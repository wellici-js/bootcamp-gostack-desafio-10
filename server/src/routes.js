import { Router } from 'express';

import { ValidatorsUserCreate } from './app/middlewares/ValidatorUserFields';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/user', ValidatorsUserCreate, UserController.store);
routes.put('/user', ValidatorsUserCreate, UserController.update);
routes.delete('/user', UserController.destroy);
routes.get('/user', UserController.show);
routes.get('/users', UserController.index);

export default routes;
