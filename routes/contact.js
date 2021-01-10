const express = require("express");
const router = express.Router();
const { validate } = require("../model/contact");
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/", (req, res) => {
  // res.header({ "Access-Control-Allow-Origin": "*" });

  const { error } = validate(req.body);
  console.log(error);
  if (error) return res.send(error.details[0].message);

  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "sampreethamith65@gmail.com", // generated ethereal user
      pass: "hzpoahpdcqcqrcfn", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" sampreethamith65@gmail.com', // sender address
    to: "sampreethamithkumar@gmail.com", // list of receivers
    subject: "Node Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send("Email Sent!!");
  });
});

module.exports = router;
