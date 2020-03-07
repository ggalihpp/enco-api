const router = require('express').Router();

router.get("/", (req, res, next) => {
    res.status(200).json({ message: "ok-computer" });
});

router.use('/image', require('./imagekit/routes'));

module.exports = router;