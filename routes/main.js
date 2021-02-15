const { Router } = require('express');
const fs = require('fs');
const router = Router();

router.get('/index', (req, res) => res.redirect('/'));

router.get('/', (req, res) => res.render('index'));

router.get('/cv', (req, res) => res.render('cv'));

module.exports = router;