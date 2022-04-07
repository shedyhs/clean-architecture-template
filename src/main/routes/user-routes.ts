import { Router } from 'express';
import { expressAdaptRoute } from '../adapters/express-route-adapter';
import { makeCreateUserController } from '../factories/user/create-user-controller-factory';
import { makeDeleteUserController } from '../factories/user/delete-user-controller-factory';
import { makeShowUserController } from '../factories/user/show-user-controller-factory';
import { makeUpdateUserController } from '../factories/user/update-user-controller-factory';

export default (router: Router): void => {
  router.post('/users', expressAdaptRoute(makeCreateUserController()));
  router.put('/users/:id', expressAdaptRoute(makeUpdateUserController()));
  router.get('/users/:id', expressAdaptRoute(makeShowUserController()));
  router.delete('/users/:id', expressAdaptRoute(makeDeleteUserController()));
};
