import { Document } from 'mongoose';

import { User } from '../models/User';

export default class ShowUserService {
  public async execute(id: string): Promise<Document | undefined> {
    const user = await User.findById(id);

    return user;
  }
}
