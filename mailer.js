const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: "dietrichd703@gmail.com",
    pass: "1234Dietrich!"
  },
})

const send = ({ email, name, mes }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: "gwagsiglenn@gmail.com",
    subject: `New message from ${from}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${mes}</p>`,
    replyTo: from,
    
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

module.exports = send