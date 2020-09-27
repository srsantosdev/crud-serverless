import { Document } from 'mongoose';

import { User } from '../models/User';

export default class ListAllUsersService {
  public async execute(): Promise<Document[]> {
    const users = await User.find();

    return users;
  }
}
