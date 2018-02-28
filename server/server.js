process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

const path = require('path'),
      express = require('express'),
      app = express(),
      publicPath = path.join(__dirname, '..', 'public'),
      port = process.env.PORT || 3000,
      nodeMailer = require('nodemailer'),
      bodyParser = require('body-parser'),
      emailTo = 'bobbywle7@gmail.com'

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


app.post('/send-email', function (req, res) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD
    }
  });
  let mailOptions = {
    from: req.body.cName, // sender address
    to: emailTo, // list of receivers
    subject: `Message via Bobby Le Portfolio de ${req.body.cName} <${req.body.cEmail}>`, // Subject line
    text: req.body.cMessage, // plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });

  let mailToSenderOptions = {
    from: 'Bobby Le', // sender address
    to: req.body.cEmail, // list of receivers
    subject: `Your message to ${emailTo} via Bobby Le Portfolio has been successfully sent`, // Subject line
    text: `Your message: ${req.body.cMessage}`, // plain text body
  }
  transporter.sendMail(mailToSenderOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.sendFile(path.join(publicPath, 'index.html'));
  });
});


app.listen(port, () => {
  console.log('Server is up!');
});
