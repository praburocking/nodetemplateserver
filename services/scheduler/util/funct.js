//what ever the function you want to schedule please import it here and then use it in schedule job as String (functions key);
//funct name and its key should be same and unique across the list.
const sendnotification=require('../../notification/slack/core/slack')
const sendMail=require('../../notification/mail/mail')
const funct={
sendnotification:sendnotification,
sendMail:sendMail
}

module.exports=funct;