const express = require("express");

const authenticationMiddleware = require("./../middleware/auth");

const router = express.Router();

const { login, dashboard } = require("./../controllers/main");

router.route("/dashboard").get(authenticationMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;
