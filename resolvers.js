const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { Op } = require('sequelize');
const {
  User,
  HasFamiliyUser,
  Activity,
  Review,
  ActivityImage,
  Bookmark,
  Tag,
  ActivityTag,
  Material,
  ActivityMaterial,
} = require('./models');
const JWT_SECRET = require('./constants');

const resolvers = {
  Query: {
    async current(_, __, { user }) {
      if (user) {
        // Get toddlers
        const toddlers = await HasFamiliyUser.findAll({
          where: { userId: user.id },
          include: [User],
        });
        const bookmarks = await Bookmark.findAll({
          where: { userId: user.id },
          include: ['activity'],
        });
        const foundUser = await User.findOne({ where: { id: user.id } });
        foundUser.toddlerList = toddlers.map((t) => t.User);
        foundUser.bookmarkList = bookmarks.map((t) => t.activity);

        return foundUser;
      }
      throw new Error("Sorry, you're not an authenticated user!");
    },
    async activities(_, __, { user }) {
      if (!user) {
        throw new Error("Sorry, you're not an authenticated user!");
      }

      return Activity.findAll({ include: ['reviewList', 'activityImageList', 'tagList', 'materialList', 'user'] });
    },
    async activity(_, args) {
      const activity = await Activity.findOne({
        where: { id: args.id },
        include: ['reviewList', 'activityImageList', 'tagList', 'user', 'materialList'],
      });
      return activity;
    },
    async myReviews(_, __, { user }) {
      return Review.findAll({ where: { userId: user.id } });
    },
    myBookmarks: async (_, __, { user }) => Bookmark.findAll({ where: { userId: user.id }, include: ['activity'] }),
    searchTags: async (_, { text }) => {
      if (!text) {
        return Tag.findAll();
      }
      return Tag.findAll({ where: { text: { [Op.like]: `%${text}%` } } });
    },
    searchMaterials: async (_, { name }) => {
      if (!name) {
        return Material.findAll();
      }
      return Material.findAll({ where: { name: { [Op.like]: `%${name}%` } } });
    },
  },
  Mutation: {
    async createActivity(_, {
      activityInput: {
        category,
        name,
        ageMin,
        ageMax,
        timing,
        description,
        url,
        activityImageList,
        tagList,
        materialList,
        review,
      },
    }, { user }) {
      const activity = await Activity.create({
        userId: user.id,
        category,
        name,
        ageMin,
        ageMax,
        timing,
        description,
        url,
      });
      const activityId = activity.id;

      if (review) {
        const createdReview = await resolvers.Mutation.createReview(null, { reviewInput: { ...review, activityId } },
          { user });

        activity.reviewList = [createdReview];
      }

      if (activityImageList) {
        const images = await Promise.all(activityImageList.map((i, index) => ActivityImage.create({
          activityId: activity.id,
          url: i.url,
          isMain: index === 0,
        })));
        activity.activityImageList = images;
      }

      if (tagList) {
        const tags = await Promise.all(tagList.map((t) => Tag.findCreateFind(
          {
            where: { text: t.text },
          },
        )));

        await Promise.all(tags.map((t) => ActivityTag.findCreateFind(
          {
            where: {
              ActivityId: activity.id,
              TagId: t[0].dataValues.id,
            },
          },
        )));
        activity.tagList = tagList;
      }

      if (materialList) {
        const materials = await Promise.all(materialList.map((t) => Material.findCreateFind(
          {
            where: { name: t.name },
          },
        )));

        await Promise.all(materials.map((t) => ActivityMaterial.findCreateFind(
          {
            where: {
              ActivityId: activity.id,
              MaterialId: t[0].dataValues.id,
            },
          },
        )));
        activity.materialList = materialList;
      }

      return activity;
    },
    async createReview(_, {
      reviewInput: {
        activityId,
        rating,
        text,
      },
    }, { user }) {
      return Review.create({
        userId: user.id,
        activityId,
        rating,
        text,
      });
    },
    async createBookmark(_, {
      bookmarkInput: {
        activityId,
      },
    }, { user }) {
      const created = await Bookmark.create({
        userId: user.id,
        activityId,
      });

      return Bookmark.findOne({ where: { id: created.id }, include: ['activity'] });
    },
    async deleteBookmark(_, { id }, { user }) {
      const toDelete = await Bookmark.findOne({
        where: { id, userId: user.id },
      });
      return await toDelete.destroy();
    },
    async register(_, {
      login,
      password,
      photo,
      name,
      birthDate,
      gender,
      type,
      toddlerList = [],
    }) {
      const user = await User.create({
        login,
        password: await bcrypt.hash(password, 10),
        photo,
        name,
        birthDate,
        gender,
        type,
      });

      const results = await Promise.all(toddlerList.map((toddler) => User.create({ ...toddler, type: 'TODDLER' })));
      await Promise.all(results.map((r) => r.id).map((i) => HasFamiliyUser.create({
        userId: user.id,
        familiyMemberId: i,
      })));

      return jsonwebtoken.sign({ id: user.id, login: user.login }, JWT_SECRET, {
        expiresIn: '1d',
      });
    },

    async login(_, { login, password }) {
      const user = await User.findOne({ where: { login } });

      if (!user) {
        throw new Error(
          "This user doesn't exist. Please, make sure to type the right login.",
        );
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        throw new Error('You password is incorrect!');
      }

      return jsonwebtoken.sign({ id: user.id, login: user.login }, JWT_SECRET, {
        expiresIn: '1d',
      });
    },
  },
};

module.exports = resolvers;
