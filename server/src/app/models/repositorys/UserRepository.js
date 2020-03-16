/* eslint-disable no-unused-vars */
import User from '../entitys/User';

class UserRepository {
  async create(data) {
    try {
      let user = await User.findOne({ where: { email: data.email } });

      if (user) return user.get();

      user = await User.create(data);

      const { password, ...userData } = user.get();
      return userData;
    } catch (error) {
      return error;
    }
  }

  async update(data) {
    try {
      let user = await User.findOne({
        where: {
          email: data.email,
        },
      });

      if (user) return { message: 'User exists' };

      user = await User.update(
        {
          update_at: new Date(),
          ...data,
        },
        {
          where: {
            email: data.email,
          },
        }
      );
      return user;
    } catch (error) {
      return error;
    }
  }

  async delete(data) {
    try {
      const user = await User.findOne({
        where: {
          email: data.email,
        },
      });
      if (!user) return { error: 'User not exists' };

      await User.destroy({
        where: {
          email: data.email,
        },
      });
      return { message: 'User destry sucess' };
    } catch (error) {
      return error;
    }
  }
}

export default new UserRepository();
