import { Document } from 'mongoose';

import CreateUserService from '../services/CreateUserService';
import ListAllUsersService from '../services/ListAllUsersService';

export default class UsersController {
  public async create(event: any): Promise<Document> {
    const createUserService = new CreateUserService();

    const { name, email, password } = JSON.parse(event.body);

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return user;
  }

  public async index(): Promise<Document[]> {
    const listAllUsersService = new ListAllUsersService();

    const users = await listAllUsersService.execute();

    return users;
  }
}
