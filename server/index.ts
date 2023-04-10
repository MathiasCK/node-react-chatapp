import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import auth from './routes';

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();

app.use(express.json());
app.use(cors({origin: true}));

app.use('/api/auth', auth);

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
