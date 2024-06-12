import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const secret = 'your_jwt_secret';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token is not valid' });
      }
      res.status(200).json({ authenticated: true, user });
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};
