import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';
import Table from '../table';
import { generateHash } from '../utils/security';

let router = Router();

let authors = new Table('Authors');



router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, token, info) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next);
});

router.post('/signup', (req, res) => {
    console.log('creating a new user');
    console.log(req.body);
    generateHash(req.body.password)
    .then((hash) => {
        let row = {name: req.body.name, email: req.body.email, hash: `${hash}`};
        authors.insert(row)
        console.log(hash);
        console.log(row);
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    })
})

export default router;