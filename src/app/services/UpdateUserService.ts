import { Document } from 'mongoose';

import { User } from '../models/User';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

export default class UpdateUserService {
  public async execute({
    user_id,
    name,
    email,
    password,
  }: IUpdateUserDTO): Promise<Document> {
    const updatedUser = await User.findByIdAndUpdate(
      user_id,
      {
        name,
        email,
        password,
      },
      { new: true },
    );

    return updatedUser;
  }
}
