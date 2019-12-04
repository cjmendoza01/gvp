const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/", async (req, res) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const data = {
      address: "09263890894",
      message: "Haey"
    };
    const res1 = await axios.post(
      "https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/21586241/requests?access_token=ouleGmIVKFvJxSmNvn_yqLaAWJUhf7DtY_3m3LXwEgo",
      data,
      config
    );
    res.send(res1);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  res.send("Hi");
});
module.exports = router;
