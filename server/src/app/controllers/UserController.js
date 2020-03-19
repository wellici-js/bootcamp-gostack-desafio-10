/* eslint-disable no-unused-vars */
import UserRepository from '../models/repositorys/UserRepository';

class UserController {
  async index(req, res) {
    try {
      const users = await UserRepository.index({ limit: 10 });

      if (users.error) return res.status(400).json(users.error);

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async show(req, res) {
    try {
      const user = await UserRepository.show(req.body);

      if (user.error) return res.status(400).json(user.error);

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const { email, password, name } = req.body;

      const user = await UserRepository.create({
        email,
        password,
        name,
      });

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  }

  async update(req, res) {
    try {
      const { userId, body } = req;

      const user = await UserRepository.update({ userId, body });

      if(user.message) return res.status(401).json(user);

      return res.json({ user });
    } catch (error) {
      return res.status(401).json({
        message: error,
      });
    }
  }

  async destroy(req, res) {
    try {
      const response = await UserRepository.delete(req.body);

      if (response.error) return res.status(400).json(response);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default new UserController();
