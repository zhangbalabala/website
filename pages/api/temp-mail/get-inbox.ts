import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { token } = req.query;

    const inbox = await axios.get(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}/auth/${token}`);

    return res.status(200).json(inbox.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
