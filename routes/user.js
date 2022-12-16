const express = require('express');
const router = express.Router();
const {User, Show} = require('../models/index');
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// gets all the users in the database
router.get("/", async (req, res) => {
    res.json(await User.findAll());
});

    // get req that finds users by id
router.get('/:id', async (req, res) => {
    res.json(await User.findByPk(req.params.id));
});

    // get req that finds shows of specific genre that user watches
router.get("/:id/shows", async (req, res) => {
    const currentUser = await User.findByPk(req.params.id);
    const userShows = await currentUser.getShows();
    res.json(userShows);
});

    // put req that gets gives the shows the user watches
router.put("/:id/shows/:showID", async  (req, res) => {
    const currentUser = await User.findByPk(req.params.id);
    const currentShow = await Show.findByPk(req.params.showID);
    await currentUser.addShow(currentShow);
    res.json(await Show.findByPk(req.params.showID));
})

module.exports = router;