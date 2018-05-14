import { Router } from 'express';
import blogRouter from './blog';
import usersRouter from './users';
import authRouter from './auth';
import contactRouter from './contactform';
import stripeDonationsRouter from './stripeDonations';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/blog', blogRouter);
router.use('/users', usersRouter);


export default router;