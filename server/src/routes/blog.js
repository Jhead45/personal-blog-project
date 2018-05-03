import { Router } from 'express';
import Table from '../table';
let router = Router();

let blog = new Table('blog');

router.get('/', (req, res) => {
    
    blog.getAll()
    .then(blog => {
        res.json(blog);
        console.log(blog);
    }).catch((err) => {
        console.log(err);
    })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    blog.getOne(id) 
    .then(blog => {
        res.json(blog);
        console.log(blog);
    }).catch((err) => {
        console.log(err);
    })
});

router.post('/', (req, res) => {
    let row = {title: req.body.title, content: req.body.content};
    console.log('posting a new blog');
    console.log(row);
    blog.insert(row)
    .then(result => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    })
});


export default router;