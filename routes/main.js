const { Router } = require('express');
const fs = require('fs');
const router = Router();

router.get('/index', (req, res) => res.redirect('/'));

router.get('/', (req, res) => fs.readFile('./views/index.html', 'utf8', (err, text) => res.send(text)));

router.get('/cv', (req, res) => fs.readFile('./views/cv.html', 'utf8', (err, text) => res.send(text)));

module.exports = router;