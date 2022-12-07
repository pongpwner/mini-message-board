var express = require("express");
var router = express.Router();
const messages = require("../messages");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  console.log(req.body.message);
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
