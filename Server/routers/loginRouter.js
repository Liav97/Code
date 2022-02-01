const express = require("express")
const loginBL = require("../models/loginBL")

const router = express.Router();

router.route("/")
    .get(async function(req, resp)
    {
        let data = await loginBL.getAll()
        return resp.json(data)
    })

router.route("/:id")
    .get(async function (req, resp)
    {
        let id = req.params.id
        let data = await loginBL.getUser(id)
        return resp.json(data)
    })

    module.exports = router;