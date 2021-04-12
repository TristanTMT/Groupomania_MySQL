const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const commentCtrl = require('../controllers/comment');

// Commentaires
router.get('/:id/comments', auth, commentCtrl.getAllComments);
router.post('/:id/comment/', auth, commentCtrl.newComment);
router.delete('/comment/:id', auth, commentCtrl.deleteComment);

module.exports = router;