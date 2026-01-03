import express from 'express';
import cors from 'cors';
import path from 'path';
import router from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
