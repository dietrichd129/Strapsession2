const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.ionos.com",
  port: 587,
  secure: true, // use TLS
  auth: {
    user: "dietrichd703@gmail.com",
    pass: "1234Dietrich!"
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
})

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: "support@strapsessions.com",
    subject: `New message from ${from}`,
    text,
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send