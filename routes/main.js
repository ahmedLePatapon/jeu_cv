const { Router } = require('express');
const fs = require('fs');

const config = require('../config');

const router = Router();

router.get('/index', (req, res) => res.redirect('/'));

router.get('/', (req, res) => res.render('index', {config}));

router.get('/cv', (req, res) => res.render('cv', {config}));

module.exports = router;