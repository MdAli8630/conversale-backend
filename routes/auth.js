const router = require("express").Router();
const passport = require("passport");

const userModel = require("../models/user")

router.get("/login/success", async (req, res) => {
	
	
	try {
		if (req.user) {



			res.status(200).json({
				error: false,
				message: "Successfully Loged In",
				user: req.user,
			});
		} else {
			res.status(403).json({ error: true, message: "Not Authorized" });
		}

	} catch (err) {
		console.log(err)
		res.status(500).json({ success: false, message: "Something went Wrong!" })
	}


});



router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",


	passport.authenticate("google", {
		successRedirect: `${process.env.CLIENT_URL}/signup`,
		failureRedirect: "/login/failed",
	})
);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
