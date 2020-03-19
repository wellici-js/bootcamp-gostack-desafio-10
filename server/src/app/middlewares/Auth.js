import jwt from 'jsonwebtoken';

const Auth = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token)
    return res.status(401).json({ auth: false, message: 'Token not informed' })

  jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ auth: false, message: 'Token invalid', err })
    req.userId = decoded.id;

    return next();
  });
}

export default Auth;
