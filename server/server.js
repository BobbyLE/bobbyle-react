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
app.use(express.json())


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
        user: EMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken,
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
    from: req.body.cName,
    to: emailTo, 
    subject: `Message via Bobby Le Portfolio de ${req.body.cName} <${req.body.cEmail}>`,
    text: req.body.cMessage,
  };


  const sendEmailToMe = await sendEmail(mailOptions)
  console.log('Message %s sent: %s', sendEmailToMe.messageId, sendEmailToMe.response);

  let mailToSenderOptions = {
    from: 'Bobby Le',
    to: req.body.cEmail, 
    subject: `Your message to ${emailTo} via Bobby Le Portfolio has been successfully sent`,
    text: `Your message: ${req.body.cMessage}`,
  }

  const sendEmailToSender = await sendEmail(mailToSenderOptions)
  console.log('Message %s sent: %s', sendEmailToSender.messageId, sendEmailToSender.response)
  res.sendFile(path.join(publicPath, 'index.html'))
}))

app.listen(port, () => {
  console.log('Server is up!');
});
