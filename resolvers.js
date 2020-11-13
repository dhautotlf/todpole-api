const { User, HasFamiliyUser, Activity, Review, ActivityImage } = require("./models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET = require("./constants");
const review = require("./models/review");

const resolvers = {
    Query: {
        async current(_, args, { user }) {
            if (user) {
                // Get toddlers
                const toddlers = await HasFamiliyUser.findAll({ where: { userId: user.id }, include: [User] })

                const foundUser = await User.findOne({ where: { id: user.id } })
                console.log(foundUser)
                foundUser.toddlerList = toddlers.map(t => t.User);

                return foundUser;
            }
            throw new Error("Sorry, you're not an authenticated user!");
        },
        async activities(_, args, { user }) {
            return Activity.findAll({ include: ['reviewList', 'activityImageList'] })
        },
        async activity(_, args, { user }) {
            console.log(args)
            const activity = await Activity.findOne({where: {id: args.id}, include: ['reviewList', 'activityImageList'] })
            console.log(activity)
            return activity
        },
        async myReviews(_, args, { user }) {
            return Review.findAll({ where: { userId: user.id } })
        }
    },

    Mutation: {
        async createActivity(_, { activityInput: {
            category,
            name,
            ageMin,
            ageMax,
            timingMin,
            timingMax,
            description,
            url,
            activityImageList
        }
        }, { user }) {
            const activity =  await Activity.create({
                userId: user.id,
                category,
                name,
                ageMin,
                ageMax,
                timingMin,
                timingMax,
                description,
                url
            });

            const images = await Promise.all(activityImageList.map((i, index) => ActivityImage.create({
                activityId: activity.id,
                url: i.url,
                isMain: index === 0
            })));

            activity.activityImageList = images;

            return activity;
        },
        async createReview(_, {
            reviewInput: {
                activityId,
                rating,
                text,
            }
        }, { user }) {
            console.log(user.id)
            return Review.create({
                userId: user.id,
                activityId,
                rating,
                text
            })
        },
        async register(_, {
            login,
            password,
            photo,
            name,
            birthDate,
            gender,
            email,
            type,
            toddlerList = []
        }) {
            console.log(toddlerList)
            const user = await User.create({
                login,
                password: await bcrypt.hash(password, 10),
                photo,
                name,
                birthDate,
                gender,
                email,
                type,
            });

            const results = await Promise.all(toddlerList.map((user) => User.create({ ...user, type: 'TODDLER' })))
            console.log(results.map(r => r.id))

            const linkResults = await Promise.all(results.map(r => r.id).map(i => {
                console.log(user.id, i)
                return HasFamiliyUser.create({
                    userId: user.id,
                    familiyMemberId: i
                })
            }))

            return jsonwebtoken.sign({ id: user.id, login: user.login }, JWT_SECRET, {
                expiresIn: "1d",
            });
        },

        async login(_, { login, password }) {
            const user = await User.findOne({ where: { login } });

            if (!user) {
                throw new Error(
                    "This user doesn't exist. Please, make sure to type the right login."
                );
            }

            const valid = await bcrypt.compare(password, user.password);

            if (!valid) {
                throw new Error("You password is incorrect!");
            }

            return jsonwebtoken.sign({ id: user.id, login: user.login }, JWT_SECRET, {
                expiresIn: "1d",
            });
        },
    },
};

module.exports = resolvers;