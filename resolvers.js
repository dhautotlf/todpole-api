const { User, HasFamiliyUser, Activity } = require("./models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET = require("./constants");

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
        async activities(_, args, {user}) {
            return Activity.findAll()
        }
    },

    Mutation: {
        async createActivity(_, {
            category,
            name,
            ageMin,
            ageMax,
            timingMin,
            timingMax,
            description,
            url,
        }, { user }) {
            console.log(user)
            return Activity.create({
                userId: user.id,
                category,
                name,
                ageMin,
                ageMax,
                timingMin,
                timingMax,
                description,
                url  
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
            toddlerList
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