import 'source-map-support/register';
import { Handler } from 'aws-lambda';

import UsersController from './app/controllers/UsersController';

const usersController = new UsersController();

export const createUser: Handler = async event => {
  const user = await usersController.create(event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      user,
    }),
  };
};
