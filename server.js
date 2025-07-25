import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import scriptRoutes from './routes/scriptRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/generate-script', scriptRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
