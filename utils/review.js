const {
  Op, fn, col,
} = require('sequelize');
const {
  Activity,
  Review,
} = require('../models');

const updateAverageRating = async (activityId) => {
  const activity = await Activity.findOne({ where: { id: activityId } });
  const { userId } = activity;
  const averageRating = await Review.findAll({
    attributes: [[fn('avg', col('rating')), 'averageRating']],
    where: {
      userId: {
        [Op.not]: userId,
      },
    },
    raw: true,
  });

  if (!averageRating || !averageRating.length || !averageRating[0]) {
    return 0;
  }

  return Activity.update({
    averageRating: averageRating[0].averagerating,
  }, {
    where: {
      id: activityId,
    },
  });
};

module.exports = { updateAverageRating };
