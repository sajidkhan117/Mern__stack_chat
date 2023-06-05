const express = require('express')
const { registerUser, authUser, allUsers } = require("../controllers/user.Controllers");

const { protect } = require("../middlewares/authMiiddleware")
const router = express.Router();

router.route('/').post(registerUser).get(protect, allUsers)
// router.get("/", allUsers);
// router.post("/", registerUser);
router.route("/login").post(authUser);


module.exports = router;
