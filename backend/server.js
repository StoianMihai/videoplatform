import path from 'path'
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import videoRoutes from './routes/videos.js';
import connectDB from './config/db.js'


dotenv.config();

connectDB()

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())
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
//showing the message for the 404 error
app.use(notFound)

//have messages with the error in production mode
app.use(errorHandler)
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
