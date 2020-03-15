/* eslint-disable no-unused-vars */
import validator from 'validator';

import UserRepository from '../models/repositorys/UserRepository';

class UserController {
  async store(req, res) {
    try {
      const { email, password, name } = req.body;

      if (!validator.isEmail(email))
        return res.status(400).json({ message: 'Email is not valid' });

      if (!validator.isLength(password, { min: 6 }))
        return res.status(400).json({ message: 'Password is not correct' });

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
}

export default new UserController();
