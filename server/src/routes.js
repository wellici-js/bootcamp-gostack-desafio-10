import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import { ValidatorsUserCreate } from './app/middlewares/ValidatorUserFields';
import Auth from './app/middlewares/Auth';

const routes = Router();

// routes.use('/api', AuthMiddleware);

// routes.use((req, res, next) => {
//   res.locals.flashSuccess = req.flash('success');
//   res.locals.flashError = req.flash('error');

//   return next();
// });

routes.post('/user', ValidatorsUserCreate, UserController.store);
routes.post('/session/create', SessionController.store);

routes.use(Auth);

routes.put('/user', ValidatorsUserCreate, UserController.update);
routes.delete('/user', UserController.destroy);
routes.get('/user', UserController.show);
routes.get('/users', UserController.index);


export default routes;
