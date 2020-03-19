import jwt from 'jsonwebtoken';
import User from '../models/entitys/User';

class SessionController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        req.flash('error', 'User not already exists with email');
        return res
          .status(401)
          .json({ error: 'User not already exists with email' });
      }

      if (!user.checkPassword(password)) {
        req.flash('error', 'Password invalid');
        return res.status(401).json({ error: 'Password does not match' });
      }

      const { id, name } = user;
      // console.log(user, id, name,' user')
      // req.session.user = user;

      return res.json({
        user: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id }, process.env.APP_SECRET, { expiresIn: '1d' }),
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  }
}

export default new SessionController();
