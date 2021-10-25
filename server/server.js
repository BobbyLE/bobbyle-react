process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

const path = require('path')
const express = require('express')
const asyncHandler = require('express-async-handler')
const app = express()
const nodemailer = require('nodemailer')
const { google } = require("googleapis")

const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000
const emailTo = 'bobbywle7@gmail.com'
const OAuth2 = google.auth.OAuth2;

app.use(express.static(publicPath));
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads


app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/send-email', asyncHandler(async(req, res) => {
  const CLIENT_ID = process.env.GMAIL_CLIENT_ID
  const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET
  const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN
  const EMAIL_USER = process.env.GMAIL_EMAIL_USER
  
  const createTransporter = async () => {
    const myOAuth2Client = new OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
    )
    
    myOAuth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN
    })

    const accessToken = await new Promise((resolve, reject) => {
      myOAuth2Client.getAccessToken((err, token) => {
        if (err) {
          reject();
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL_USER, //your gmail account you used to set the project up in google cloud console"
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken, //access token variable we defined earlier
      }
    })

    return transporter
  }

  const sendEmail = async (emailOptions) => {
    try {
      let emailTransporter = await createTransporter();
      return await emailTransporter.sendMail(emailOptions);
    } catch(error){
      console.log(error)
    }
  }
    
  let mailOptions = {
    from: req.body.cName, // sender address
    to: emailTo, // list of receivers
    subject: `Message via Bobby Le Portfolio de ${req.body.cName} <${req.body.cEmail}>`, // Subject line
    text: req.body.cMessage, // plain text body
  };


  const sendEmailToMe = await sendEmail(mailOptions)
  console.log('Message %s sent: %s', sendEmailToMe.messageId, sendEmailToMe.response);

  let mailToSenderOptions = {
    from: 'Bobby Le', // sender address
    to: req.body.cEmail, // list of receivers
    subject: `Your message to ${emailTo} via Bobby Le Portfolio has been successfully sent`, // Subject line
    text: `Your message: ${req.body.cMessage}`, // plain text body
  }

  const sendEmailToSender = await sendEmail(mailToSenderOptions)
  console.log('Message %s sent: %s', sendEmailToSender.messageId, sendEmailToSender.response)
  res.sendFile(path.join(publicPath, 'index.html'))
}))

app.listen(port, () => {
  console.log('Server is up!');
});
