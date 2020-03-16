/* eslint-disable no-unused-vars */
import UserRepository from '../models/repositorys/UserRepository';

class UserController {
  async store(req, res) {
    try {
      const { email, password, name } = req.body;

      const { password_hash, ...user } = await UserRepository.create({
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
      const user = await UserRepository.update(req.body);

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
