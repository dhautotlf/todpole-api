const sgMail = require('@sendgrid/mail');
const constants = require('./constants');

sgMail.setApiKey(constants.apiKey);

const sendAccountActivateEmail = async ({ login, name }, activationToken) => {
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(login)) {
    console.log('Unable to send email to a non email address');
    return;
  }

  const msg = {
    to: login, // TODO change it to the real value
    from: constants.verifiedSender, // Change to your verified sender
    templateId: constants.templates.activateAccount,
    dynamicTemplateData: {
      name,
      activationUrl: `https://www.todpole-app.com/activate?token=${activationToken}`,
      // activationUrl: `http://localhost:3000/activate?token=${activationToken}`,
    },
  };
  try {
    await sgMail.send(msg);
    console.log('Registration email sent');
  } catch (e) {
    console.log(e);
  }
};

module.exports = { sendAccountActivateEmail };
