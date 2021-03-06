const express = require("express");
const nodemailer = require("nodemailer");
const email = require("./routes/contact");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.header(("Access-Control-Allow-Origin", "*"));
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "POST, GET");
//     return res.status(200).json({});
//   }
//   next();
// });

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

const port = process.env.PORT || 3900;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
