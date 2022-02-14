import { Router } from 'express';
import { expressAdaptRoute } from '../adapters/express-route-adapter';
import { makeCreateUserController } from '../factories/user/create-user-controller-factory';

export default (router: Router): void => {
  router.post('/users', expressAdaptRoute(makeCreateUserController()));
};
