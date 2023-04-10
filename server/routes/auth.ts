import axios from 'axios';
import express from 'express';

const router = express.Router();

router.post('/', async (req: express.Request, res: express.Response) => {
  try {
    const response = await axios.put(
      'https://api.chatengine.io/users',
      {
        username: req.body.username,
        secret: req.body.username,
        first_name: req.body.username,
      },
      {headers: {'private-key': process.env.PRIVATE_KEY}},
    );
    return res.status(response.status).json(response.data);
  } catch (e) {
    // @ts-ignore
    return res.status(e.response.status).json(e.response.data);
  }
});

export default router;
