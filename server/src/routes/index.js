import { Router } from 'express';
import peopleRouter from './people';
import blogRouter from './blog';

let router = Router();

router.use('/people', peopleRouter);
router.use('/blog', blogRouter);

export default router;