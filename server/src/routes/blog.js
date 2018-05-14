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
    console.log(id);
    blog.getOne(id) 
    .then(blog => {
        res.json(blog);
        console.log(blog);
    }).catch((err) => {
        console.log(err);
    })
});

router.get('/author/:id', (req, res) => {
    let id = req.params.id;
    blog.getAuthor(id) 
    .then(blog => {
        res.json(blog);
    }).catch((err) => {
        console.log(err);
    })  
})

router.post('/', (req, res) => {
    let row = {title: req.body.title, content: req.body.content, authorid: req.body.authorid};
    console.log(typeof req.body.authorid);
    console.log('posting a new blog');
    console.log(row);
    blog.insert(row)
    .then(result => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    })
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let row = {title: req.body.title, content: req.body.content};
    console.log('this is the put reqeust router');
    console.log(row);
    blog.update(id, row) 
    .then(blog => {
        res.json(blog);
        console.log(blog);
    }).catch((err) => {
        console.log(err);
    })
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    blog.delete(id)
    .then((result) => {
        res.send('success');
    }).catch((err) => {
        console.log(err);
    })
});


export default router;