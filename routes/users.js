const express = require("express");
const router = express.Router();
const axios = require("axios");
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

//register
router.post("/", async (req, res) => {
  let { lname, fname, email, password } = req.body;
  try {
    let ur = await User.findOne({ email });
    fname = fname[0].toUpperCase() + fname.slice(1);
    lname = lname[0].toUpperCase() + lname.slice(1);
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
});

router.put("/", async (req, res) => {
  try {
    const { email, phonenum } = req.body;

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
router.put("/edit", auth, async (req, res) => {
  const { fname, lname, email, number } = req.body;

  const contactFields = {};
  if (fname) contactFields.fname = fname[0].toUpperCase() + fname.slice(1);
  if (lname) contactFields.lname = lname[0].toUpperCase() + lname.slice(1);
  if (email) contactFields.email = email;
  if (number) contactFields.number = number;

  try {
    let contact = await User.findById(req.user.id);

    if (!contact) return res.status(404).json({ msg: "Server Error" });

    contact = await User.findByIdAndUpdate(
      req.user.id,
      { $set: contactFields },
      { new: true }
    );
   
    res.json(contact);
  } catch (err) {
    console.error(er.message);
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
    
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const data = {
        address: user2.number,
        message: "GVPX Verification Code: " + tk
      };
      const res1 = await axios.post(
        "https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/21586241/requests?access_token=ouleGmIVKFvJxSmNvn_yqLaAWJUhf7DtY_3m3LXwEgo",
        data,
        config
      );
    } else {
      message = "true";
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

router.post("/phonever", async (req, res) => {
  const { phone } = req.body;

  try {
    const tk = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
   
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const data = {
      address: phone,
      message: "GVPX Verification Code: G" + tk
    };
    const res1 = await axios.post(
      "https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/21586241/requests?access_token=ouleGmIVKFvJxSmNvn_yqLaAWJUhf7DtY_3m3LXwEgo",
      data,
      config
    );

    res.json({ tk });
  } catch (error) {
    res.send("Error");
  }
});

//Email verification
router.post("/emailver", (req, res) => {
  const { token, email } = req.body;
  try {
    const mailOptions = {
      // from: "crill",
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

//Forget Password
router.post("/forget", async (req, res) => {
  const { email } = req.body;
  let tk;

  try {
    const em = await User.findOne({ email });
    if (em) {
      const payload = {
        user: {
          id: em.id
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

          const mailOptions = {
            to: email,
            subject: "GVPX Password Reset",
            // html: `<center>Reset Password</center><br/><br/>Click the Link: <a href='http://localhost:3000/Recovery/${token}'>GVPX Reset Password</a>`
            html: `<center>Reset Password</center><br/><br/>Click the Link: <a href='https://radiant-refuge-61599.herokuapp.com/Recovery/${token}'>GVPX Reset Password</a>`
          };

          transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log(error);
              res.send(error);
            } else {
              res.json({ msg: "PasswordChange" });
              console.log("Email sent: " + info.response);
            }
          });
        }
      );
    } else {
      res.json({ msg: "Email doesnt exist" });
    }
  } catch (err) {
    console.log(err);
  }
});

//getUsers
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    if (user == "") {
      return res.json({ msg: "Add a User" });
    } else {
      res.send(" User");
    }
  } catch (err) {
    console.err(err.message);
    res.status(500).send("Server Error");
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
     
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const data = {
        address: number,
        message: "GVPX Verification Code: G" + tk
      };
      const res1 = await axios.post(
        "https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/21586241/requests?access_token=ouleGmIVKFvJxSmNvn_yqLaAWJUhf7DtY_3m3LXwEgo",
        data,
        config
      );

      res.json({ tk });
    } catch (error) {
      res.send("Error");
    }
  } else {
    res.send(email);
  }
});
// Change password (Setings)
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

//Change Password (Link)
router.post("/changepassLink", async (req, res) => {
  try {
    const { token, password } = req.body;
    // const { token } = req.body;
    const jtoken = jwt.verify(token, config.get("jwtSecret"));
    const id = jtoken.user.id;
    const contactFields = {};
    const salt = await bcrypt.genSalt(10);
    contactFields.password = await bcrypt.hash(password, salt);
    user = await User.findByIdAndUpdate(
      id,
      { $set: contactFields },
      { new: true }
    );
    res.json({ msg: "PasswordSuccessfullyUpdated" });
  } catch (err) {
    res.json({ msg: "Server Error" });
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
     
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const data = {
        address: number,
        message: "GVPX Verification Code: G" + tk
      };
      const res1 = await axios.post(
        "https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/21586241/requests?access_token=ouleGmIVKFvJxSmNvn_yqLaAWJUhf7DtY_3m3LXwEgo",
        data,
        config
      );

      res.json({ tk });
    } catch (error) {
      res.send("Error");
    }
  } else {
    res.send(email);
  }
});

module.exports = router;

