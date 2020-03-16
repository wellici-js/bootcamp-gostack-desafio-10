import { Router } from 'express';

import { ValidatorsUserCreate } from './app/middlewares/ValidatorUserFields';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/user', ValidatorsUserCreate, UserController.store);
routes.put('/user', ValidatorsUserCreate, UserController.update);
routes.delete('/user', UserController.destroy);

export default routes;
