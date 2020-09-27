import { Document } from 'mongoose';

import CreateUserService from '../services/CreateUserService';
import ListAllUsersService from '../services/ListAllUsersService';
import ShowUserService from '../services/ShowUserService';
import UpdateUserService from '../services/UpdateUserService';

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

  public async show(event: any): Promise<Document | undefined> {
    const showUserService = new ShowUserService();

    const { id } = event.pathParameters;

    const user = await showUserService.execute(id);

    return user;
  }

  public async update(event: any): Promise<Document> {
    const updateUserService = new UpdateUserService();

    const { id } = event.pathParameters;
    const { name, email, password } = JSON.parse(event.body);

    const user = await updateUserService.execute({
      user_id: id,
      name,
      email,
      password,
    });

    return user;
  }
}
