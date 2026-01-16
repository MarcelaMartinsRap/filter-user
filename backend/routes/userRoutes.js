const express = require('express');
const { getUsersLike, getUsersBackend } = require('../controllers/userController');
const router = express.Router();

router.get('/users-like', getUsersLike);
router.get('/users-backend', getUsersBackend);

module.exports = router;
