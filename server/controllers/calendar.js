const router = require('express').Router();
const Event = require('../models/event')
const moment = require('moment')

//create an event
router.post('/create/event', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
});

router.get('/get-events', async (req, res) => {
    const events = await Event.find({
        start: { $gte: moment(req.query.start).toDate() },
        end: { $lte: moment(req.query.end).toDate() }
    });

    res.send(events);
})

module.exports = router;