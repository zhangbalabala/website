import { NextApiRequest, NextApiResponse } from 'next';
import rateLimitMiddleware from './rate-limiter';
import axios from 'axios';

const CONVERTER_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_FILE_CONVERTER_API : 'http://localhost:3000';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { token, email } = req.query;
    try {
      // return res.status(500).json({ message: 'Unavailable' });
      const tempMailToken = req.cookies['tempMailToken'];
      const tempMailAccessToken = req.headers['x-access-token'];

      if (tempMailToken !== tempMailAccessToken)
        return res.status(401).json({
          message: 'Unauthorized',
        });

      const inbox = await axios.get(`${CONVERTER_URL}/api/temp-mail/messages/${email}/${token}`);

      return res.status(200).json(inbox.data);
    } catch (err) {
      const error = err as Error;
      if (error.message.includes('404')) {
        return res.status(404).json({
          message: error.message,
        });
      }
      return res.status(500).json({
        message: error.message,
      });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}

export default rateLimitMiddleware(handler);
