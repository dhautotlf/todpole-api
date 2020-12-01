const jsonwebtoken = require('jsonwebtoken');
const { ACTIVATION_JWT_SECRET } = require('../../constants');
const { User } = require('../../models');

const activate = async (req, res) => {
  const { token } = req.query;
  if (!token) {
    // build error page
    return res.status(403).send('Bad Request');
  }
  // TODO check the token and update the user status
  try {
    const { id } = jsonwebtoken.verify(token, ACTIVATION_JWT_SECRET);
    // TODO update the user status
    await User.update(
      {
        status: 'ACTIVE',
      },
      {
        returning: true,
        where: { id },
      },
    );
    res.send('Activation successful. You can close this page');
  } catch (err) {
    console.log(err);
    return res.status(403).send('Unable to validate your activation token');
  }
};

module.exports = { activate };
