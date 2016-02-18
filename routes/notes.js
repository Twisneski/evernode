const express = require('express');
const router = express.Router();

const note = require('../controllers/note');

router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.delete('/notes/:id', note.destroy);
//looking for delete request on this route
router.post('/notes', note.create);
//match routes to routing table

module.exports = router;
