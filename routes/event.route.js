const express = require('express');
const { allEventsByClub, addEvent, updateEvent, delet, getEventByDate } = require('../controllers/Event.controller')
const router = express.Router()

// Program Crud
router.get('/Events/:id', allEventsByClub)
router.get('/Events/:id/:dateFrom/:dateTo', getEventByDate)
router.post('/event/addnew', addEvent)
router.put('/event/update/:id', updateEvent)
router.delete('/event/delete/:id', delet)


module.exports = router;