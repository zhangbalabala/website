import axios from 'axios';

export default async function handler(req, res) {
  const email = req.body.email;
  console.log('email', req.body.email);

  try {
    const user = await createUser(email);

    res.status(200).json({ status: 'OK', data: user });
  } catch (error) {
    // console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ status: 'Error', message: error });
  }
}

async function createUser(email: string) {
  const createUser = await axios.post(
    `${process.env.MAILERLITE_API}/api/subscribers`,
    { email: email, status: 'active', groups: ['88604472985519229'] },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
    },
  );

  return createUser.data;
}