// index.js
import express from 'express';
import bodyParser from 'body-parser';
import regesterationRouter   from './Routes/UsamRegisterationProgramRoutes.js'
import cors from 'cors';

const app = express();
app.use(bodyParser.json());


app.use(cors());

const corsOptions = {
  origin: process.env.frontEnd_dev, 
  methods: ['GET', 'POST'],    
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use('/api', cors(corsOptions));

app.use("/api/usamRegisteration" , regesterationRouter)

app.get("/" , (req , res) => res.send("Hello World"))

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
