import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import { ValidatorsUserCreate } from './app/middlewares/ValidatorUserFields';
import Auth from './app/middlewares/Auth';

import multerConfig from './config/multer';

const routes = Router();
const uploads = multer(multerConfig);

routes.post('/user', ValidatorsUserCreate, UserController.store);
routes.post('/session/create', SessionController.store);

routes.use(Auth);

routes.put('/users', ValidatorsUserCreate, UserController.update);
routes.delete('/users', UserController.destroy);
// routes.get('/users/use', UserController.show);
routes.get('/users', UserController.index);

routes.post('/files', uploads.single('file'), FileController.store);

export default routes;
