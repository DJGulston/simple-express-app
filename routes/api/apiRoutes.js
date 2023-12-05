const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.json({message: 'Hello API!'});
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;