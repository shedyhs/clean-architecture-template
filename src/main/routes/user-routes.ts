import { Router } from 'express';
import { expressAdaptRoute } from '../adapters/express-route-adapter';
import { makeCreateUserController } from '../factories/user/create-user-controller-factory';
import { makeShowUserController } from '../factories/user/show-user-controller';

export default (router: Router): void => {
  router.post('/users', expressAdaptRoute(makeCreateUserController()));

  router.get('/users', expressAdaptRoute(makeShowUserController()));
};
