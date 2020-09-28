import { User } from '../models/User';

export default class RemoveUserService {
  public async execute(id: string): Promise<void> {
    await User.findOneAndRemove({ _id: id });
  }
}
