const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../midleware/auth");
const nodemailer = require("nodemailer");
const { check, validationResult } = require("express-validator");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "crill.garci18@gmail.com",
    pass: "Uzumakinaruto1"
  }
});
router.get("/code", (req, res) => {
  res.send("Hello");
});
//register
router.post(
  "/",

  async (req, res) => {
    const { lname, fname, email, password } = req.body;
    try {
      let ur = await User.findOne({ email });

      if (!ur) {
        user = new User({
          lname,
          fname,
          email,
          password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
          user: {
            id: user.id
          }
        };

        jwt.sign(
          payload,
          config.get("jwtSecret"),
          {
            expiresIn: 360000
          },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } else {
        res.status(400).json({ msg: "User already exist" });
      }
    } catch (err) {
      // console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.put("/", async (req, res) => {
  try {
    const { email, phonenum } = req.body;
    console.log(phonenum);
    const contactFields = {};
    contactFields.number = phonenum;

    user = await User.findOneAndUpdate(
      { email: email },
      { $set: contactFields },
      { new: true }
    );
    res.json({ user });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.post(
  "/token",
  [
    check("fname", "Please add name")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { lname, fname, email, password } = req.body;

    let ur = await User.findOne({ email });

    if (!ur) {
      const payload = {
        user: {
          id: email
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } else {
      res.status(400).json({ msg: "User already exist" });
    }
  }
);
//Login

router.post("/auth", async (req, res) => {
  let tk = null;
  let message = null;
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Password" });
    }
    const payload = {
      user: {
        id: user.id
      }
    };

    let user2 = await User.findOne({ email: email });
    if (user2.number) {
      tk = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
      const accountSid = "ACc0e429210a13959e6b6d0ff1f16fd39a";
      const authToken = "ec54945685d27767aa3585bca550523f";
      const client = require("twilio")(accountSid, authToken);

      client.messages.create({
        body: "verif Code: G" + tk,
        from: "+12082623275",
        to: user2.number
      });
    } else {
      message = true;
    }

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000
      },
      (err, token) => {
        if (err) throw err;
        const tokens = {
          token: token,
          otp: tk,
          message: message
        };
        res.json({ tokens });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//phone verification
router.get("/phonever", async (req, res) => {
  const email = req.body;
  console.log(email);
  const user = await User.findOne({ email: email });
  if (user) {
    const number = user.number;

    try {
      const tk = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
      const accountSid = "ACc0e429210a13959e6b6d0ff1f16fd39a";
      const authToken = "ec54945685d27767aa3585bca550523f";
      const client = require("twilio")(accountSid, authToken);

      client.messages.create({
        body: "verif Code: G" + tk,
        from: "+12082623275",
        to: number
      });
      res.json({ tk });
    } catch (error) {
      res.send("Error");
    }
  } else {
    res.send(email);
  }
});
// +639053724922
router.post("/phonever", (req, res) => {
  const { phone } = req.body;

  try {
    const tk = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
    const accountSid = "ACc0e429210a13959e6b6d0ff1f16fd39a";
    const authToken = "ec54945685d27767aa3585bca550523f";
    const client = require("twilio")(accountSid, authToken);

    client.messages.create({
      body: "verif Code: G" + tk,
      from: "+12082623275",
      to: phone
    });
    res.json({ tk });
  } catch (error) {
    res.send("Error");
  }
});

//email verification
router.post("/emailver", (req, res) => {
  const { token, email } = req.body;
  try {
    const mailOptions = {
      from: "crill.garci18@gmail.com",
      to: email,
      subject: "GVPX Email Verification ",
      html:
        "<h1>Successfully Registered!<h1> <br>copy url:<h5> " + token + "</h5>"
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.send("Successful");
  } catch (error) {
    console.log(error);
  }
});

//getUsers
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    if (user == "") return res.json({ msg: "Add a User" });
    res.json(user);
  } catch (err) {
    console.err(err.message);
    res.status(500).send("Server Error");
  }
});
router.post("/changepass", async (req, res) => {
  try {
    const { email, password } = req.body;
    const contactFields = {};
    const salt = await bcrypt.genSalt(10);
    contactFields.password = await bcrypt.hash(password, salt);
    user = await User.findOneAndUpdate(
      email,
      { $set: contactFields },
      { new: true }
    );
    res.json({ msg: "Password Successfully Updated" });
  } catch (err) {
    res.json({ msg: "Server Error" });
  }
});
module.exports = router;
