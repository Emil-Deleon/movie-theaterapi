const express = require('express');
const router = express.Router();
const {User, Show} = require('../models/index');


router.use(express.json());
router.use(express.urlencoded({extended: true}));

// get requ thats finds all shows
router.get('/', async (req, res) => {
    res.json(await Show.findAll());
});

    // get request to find show by ID
// router.get('/:id', async (req, res) => {
//     res.json(await Show.findByPk(req.params.id));
// });

    // get request to find shows of a specific genre
// router.get('/genre/:genre', async (req, res) => {
//     res.json(await Show.findAll(
//         { where: {
//             genre: req.params.genre
//         }
//     }));
// });

    // put req that updates the rating of a specific show
// router.put('/:id/:rating', async (req, res) => {
//     await Show.update({rating: req.params.rating}, 
//         { where: {
//             id: req.params.id
//         }
//     });
//     res.json(await Show.findAll());
// });

    // put req that updates the status of a specific show
// router.put('/:id/:status', async (req, res) => {
//     await Show.update({status: req.params.status}, 
//         { where: {
//             id: req.params.id
//     }});
//     res.json(await Show.findAll());
// });

    // delete req that removes specific show by show ID
// router.delete('/:id', async (req, res) => {
//     await Show.destroy(
//         { where: {
//             id: req.params.id
//         }
//     });
//     res.json(await Show.findAll());
// });

module.exports = router;