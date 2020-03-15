import User from '../entitys/User';

class UserRepository {
  async create(data) {
    try {
      let user = await User.findOne({ where: { email: data.email } });

      if (user) return user.get();

      user = await User.create(data);

      return user;
    } catch (error) {
      return error;
    }
  }
}

export default new UserRepository();
