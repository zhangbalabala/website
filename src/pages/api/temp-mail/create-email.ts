import axios, { AxiosError, AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const CONVERTER_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_FILE_CONVERTER_API : 'http://localhost:3000';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const tempMailToken = req.cookies['tempMailToken'];

      // return res.status(500).json({ message: 'Unavailable' });

      if (!tempMailToken)
        return res.status(401).json({
          message: 'Unauthorized',
        });

      const email = await axios.get(`${CONVERTER_URL}/api/temp-mail/address`);

      return res.status(200).json(email.data);
    } catch (err) {
      const error = err as Error | AxiosError;
      console.log('ERROR:', error.message || JSON.stringify(error, null, 2));
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
