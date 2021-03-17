import path from 'path'
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan'
import cors from 'cors';
import dotenv from 'dotenv';
import videoRoutes from './routes/videos.js';


const app = express();
dotenv.config();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors());

app.use('/videos', videoRoutes);

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
