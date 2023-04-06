import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleRoutes from './routes/dalle.routes.js'
// to set up environment variables
dotenv.config()

// setting up express application
const app=express();
// middleware to solve cross origin problems
app.use(cors());
// setting limit to the size of request
app.use(express.json({limit:'50mb'}))

// middleware to redirect to different routes
// /api/v1/dalle is custom route and can be renamed,
//  what to do at this route is specified at second argument
app.use('/api/v1/dalle',dalleRoutes)
// a demo route
app.get('/',(req,res)=>{
    res.status(200).json({message:'Hello from DALL-E'})
})

// host it on a local port to listen to the requests
app.listen(8080,()=>{
    console.log('server started at port 8080')
})