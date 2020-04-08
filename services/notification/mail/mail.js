var nodemailer = require('nodemailer');
const settings=require('../../../settings')



var transporter = nodemailer.createTransport({
  host:settings.MAIL_DOMAIN, // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: settings.MAIL_PORT, // port for secure SMTP
  tls: {
     ciphers:'SSLv3'
  },
  auth: {
    user: settings.MAIL_ID,
    pass: settings.MAIL_PASS
  }
});

var mailOptions = {
  from: settings.MAIL_ID,
  to: 'prabumohan96@gmail.com',
  subject: 'Sending Email using Node.js',
  html: 'That was easy!'
};

const sendmail=(to,subject,text)=>{
  if(to)
  {
    mailOptions.to=to;
  }
  if(subject)
  {
    mailOptions.subject=subject;
  }
  if(text)
  {
    mailOptions.html=text;
  }
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {

    console.log('Email sent: ' + info.response);
  }
});
}
module.exports=sendmail