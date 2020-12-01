const jsonwebtoken = require('jsonwebtoken');
const { ACTIVATION_JWT_SECRET } = require('../../constants');

const activate = (req, res) => {
  const { token } = req.query;
  if (!token) {
    // build error page
    return res.status(403).send('Bad Request');
  }
  // TODO check the token and update the user status
  try {
    const decoded = jsonwebtoken.verify(token, ACTIVATION_JWT_SECRET);
    // TODO update the user status
  } catch (err) {
    console.log(err);
    return res.status(403).send('Unable to validate your activation token');
  }

  res.send('Activation successful. You can close this page');
};

module.exports = { activate };
