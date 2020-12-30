const express = require('express');
const nodemailer = require("nodemailer");
const creds = require('./config');
const emailValidator = require('deep-email-validator'); 

const app = express();
const port = 3001;

app.use(express.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST");
  next();
});

app.post('/sendEmail', async function (req, res) {
  try {
    console.log(req.body);
    if (req.body.name === "" || req.body.email === "" || 
      req.body.message === ""){
        throw Error("One or more required fields were empty");
    }
    let emailRes = await emailValidator.validate({email: req.body.email,
    validateSMTP: false});
    console.log(emailRes);
    if (!emailRes.valid)
      throw Error("Oops, you have entered an invalid email");
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: [
        {
          name: req.body.name,
          address: req.body.email
        }
      ], // sender address
      to: "tanmaysk1@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    res.json({message: "Sent"});
  } catch(e){
    res.status(400).send({
      message: e.toString()
    });
    console.log(e.toString());
  }
});

