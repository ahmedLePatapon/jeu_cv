const {Router} = require('express');
const fs = require('fs');
const router = Router();

router.get('/', (req, res) => {
    fs.readFile('./views/index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});

module.exports = router;