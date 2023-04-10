import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({origin: true}));
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
