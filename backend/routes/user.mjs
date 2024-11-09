import { Router } from "express";
import User from "../models/user.mjs";
import { query, checkSchema, matchedData, validationResult } from "express-validator";
import { userValidation } from "../middleware/validate.mjs";
import { hashPassword } from "../middleware/helpers.mjs";
import { db } from "../db.mjs";
import passport from 'passport';



const router = new Router();

router.get('/api/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post(
    '/api/signup', 
    checkSchema(userValidation), 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const data = matchedData(req);
        data.password = hashPassword(data.password)
        const { name, email, no_wa, password } = data;
        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
            console.log('Email sudah terdaftar');
            return;
            }

            const newUser = await User.upsert({name, email, no_wa, password})
            res.status(201).json(data);
        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
});

router.post("/api/signin", passport.authenticate('local'), (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    req.session.visited = true;
    res.cookie('halo', 'mahasiswas', {maxAge: 6000 * 60 *24, signed:true})
    try {
        console.log(req.user.name)
        res.status(200).json({
            message: "Login successful",
            user: req.user, 
        });
    } catch (error) {
        console.log(error)
    }
})

router.get("/api/user/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const findUser = await User.findByPk(id);
        if (!findUser) return res.sendStatus(404);
        return res.json(findUser);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});



export default router;
