const { Router } = require('express');
const IndexRouter = require('./main');

// Init router and path
const router = Router();


// Add sub-routes
router.use('/', IndexRouter);

// Export the base-router 
module.exports = router;