import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const secret = 'your_jwt_secret';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    // Add your authentication logic here
    if (username === 'admin' && password === 'password') {
      const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
      res.status(200).json({ user: { username }, token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
