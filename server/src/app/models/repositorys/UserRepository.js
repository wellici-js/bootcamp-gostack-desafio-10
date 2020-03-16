/* eslint-disable no-unused-vars */
import { Op } from 'sequelize';
import User from '../entitys/User';

class UserRepository {
  async index(query) {
    try {
      const users = await User.findAll({
        limit: query.limit,
        attributes: {
          exclude: ['password_hash'],
        },
      });

      if (!users.length) return { error: 'User not already exists' };

      return users;
    } catch (error) {
      return error;
    }
  }

  async show(data) {
    try {
      const user = await User.findOne({ where: { email: data.email } });

      if (!user) return { error: 'User not already exists' };

      return user;
    } catch (error) {
      return error;
    }
  }

  async create(data) {
    try {
      let user = await User.findOne({
        where: { email: data.email },
        attributes: { exclude: ['password_hash'] },
      });

      if (user) return user.get();

      user = await User.create(data);

      const { password_hash, password, ...userData } = user.get();

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

      if (user) return { message: 'User already exists' };

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
      if (!user) return { error: 'User not already exists' };

      await User.destroy({
        where: {
          email: data.email,
        },
      });
      return { message: 'User deleted with sucess' };
    } catch (error) {
      return error;
    }
  }
}

export default new UserRepository();
