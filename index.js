const express = require("express");
const nodemailer = require("nodemailer");
const email = require("./routes/contact");
const cors = require("cors");
const app = express();

app.use(express.json());

// Middleware
app.use("/api/email", email);
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(cors());

const port = process.env.PORT || 3900;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
