import 'source-map-support/register';
import { Handler } from 'aws-lambda';

import UsersController from './app/controllers/UsersController';

const usersController = new UsersController();

export const createUser: Handler = async event => {
  const user = await usersController.create(event);

  return {
    statusCode: 201,
    body: JSON.stringify(user),
  };
};

export const listAllUsers: Handler = async () => {
  const users = await usersController.index();

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};

export const showUser: Handler = async event => {
  const user = await usersController.show(event);

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};

export const updateUser: Handler = async event => {
  const user = await usersController.update(event);

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};

export const deleteUser: Handler = async event => {
  await usersController.delete(event);

  return {
    statusCode: 204,
  };
};
