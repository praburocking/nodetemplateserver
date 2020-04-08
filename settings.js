require('dotenv').config()

let MONGODB_URL = process.env.MONGODB_URL
//authentication
const excludeUrl=['/login','/signup','/pay/stripe/webhook','/signup/exist','/forgotpassword','/forgotpassword/verifykey','/resetpass','/verifyuser'];
let ENVIRONMENT=process.env.ENVIRONMENT
let SECURITY_HEADER=process.env.SECURITY_HEADER
let SECRET=process.env.SECRET;
let SERVER_URL=process.env.SERVER_URL;

//notification-mail
let MAIL_ID=process.env.MAIL_ID
let MAIL_PASS=process.env.MAIL_PASS
let MAIL_PORT=process.env.MAIL_PORT
let MAIL_DOMAIN=process.env.MAIL_DOMAIN

//notification-slack
let SLACK_URL=process.env.SLACK_URL

//stripe
let PAYMENT_SECRET=process.env.PAYMENT_SECRET
let STRIPE_WEBHOOK_SECRET=process.env.STRIPE_WEBHOOK_SECRET



module.exports = {
  MONGODB_URL,
 excludeUrl,
 ENVIRONMENT,
 SECURITY_HEADER,
 SECRET,
 SERVER_URL,
 MAIL_ID,
 MAIL_PASS,
 MAIL_PORT,
 MAIL_DOMAIN,
 SLACK_URL,
 PAYMENT_SECRET,
 STRIPE_WEBHOOK_SECRET,
}
