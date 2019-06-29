const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jacquesle@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jacquesle@hotmail.com',
        subject: 'Sorry to see you go!',
        text: `We're sorry to see you go ${name}! Thanks for trying us out.`
    })
}

module.exports = {
    sendWelcomeEmail, 
    sendCancelEmail
}