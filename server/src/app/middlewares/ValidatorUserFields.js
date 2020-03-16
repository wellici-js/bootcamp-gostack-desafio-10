import validator from 'validator';

export const ValidatorsUserCreate = (req, res, next) => {
  const { email, name, password } = req.body;
  if (!validator.isEmail(email) || !email)
    return res.status(400).json({ message: 'Email is not valid' });

  if (!validator.isLength(password, { min: 6 }) || !password)
    return res.status(400).json({ message: 'Password is not correct' });

  if (!validator.isLength(name, { min: 1 }) || !name)
    return res.status(400).json({ message: 'Name is required' });
  return next();
};

export const ValidatorsUserLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!validator.isLength(password, { min: 6 }) || !password)
    return res.status(400).json({ message: 'Passwprd is required' });
  if (!validator.isEmail(email) || !email)
    return res.status(400).json({ message: 'Email is required' });

  return next();
};
