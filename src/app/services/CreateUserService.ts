import { Document } from 'mongoose';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { User } from '../models/User';

export default class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<Document> {
    const user = await User.create({ name, email, password });

    return user;
  }
}
