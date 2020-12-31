const express = require('express');
const path = require('path');
const nodemailer = require("nodemailer");
const creds = require('./config');
const emailValidator = require('deep-email-validator'); 
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const app = express();
const port = 3001;
const oauth2Client = new OAuth2(
  creds.clientId,
  creds.clientSecret, 
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: creds.refreshToken
});
const accessToken = oauth2Client.getAccessToken()

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",  "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      tls: {
        rejectUnauthorized: false
      },
      auth: {
           type: "OAuth2",
           user: creds.user, 
           clientId: creds.clientId,
           clientSecret: creds.clientSecret,
           refreshToken: creds.refreshToken,
           accessToken: accessToken
    }});

    const mailOptions = {
      from: [
        {
          name: req.body.name,
          address: creds.user
        }
      ], // sender address
      to: creds.user, // list of receivers
      subject: req.body.subject, // Subject line
      text: "Name: " + req.body.name + "\n" 
      + "Email: " + req.body.email + "\n\n" 
      + req.body.message, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, response) => {
      error ? res.status(400).send({
                  message: "Something went wrong :("
              }) 
      : res.json({message: "Sent"});
      transporter.close();
    });
  } catch(e){
    res.status(400).send({
      message: e.toString()
    });
    console.log(e.toString());
  }
});

