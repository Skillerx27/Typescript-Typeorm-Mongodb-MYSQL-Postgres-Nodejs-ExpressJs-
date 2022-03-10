import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import  connection  from './dbConnection/dbConfig'
import { createConnection } from "typeorm";


import userRoute from './routes/userRoute';
import convert from 'number-to-words';

const app = express();

app.use(json());

app.get('/',(req,res)=>{
  res.status(200).send("backend server is running")
})

app.use('/api', userRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});


//exporing db as module


// connection.then(res=>{
//   console.log("DATABS===",res)
// }).catch(er=>{
//   console.log('err',er)
// })
// app.listen(3000);

createConnection('default')
  .then(async (connection) => {
    console.log('connectoon',connection.isConnected)
    app.listen(3000);
  })
  .catch((error) => console.log(error));