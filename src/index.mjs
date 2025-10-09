import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import https from 'http-errors';
const app = express();

const PORT = process.env.PORT || 3000;
const mockData = [{id:1,name:"John", displayName:"johnny123"},{id:2,name:"Doe", displayName:"Supaniga"},{id:3,name:"Smith", displayName:"Smithy"}];

app.get('/api/users', (req, res,next) => {;
  console.log("first one done");
  res.send(mockData);
  next();
});

app.get('/api/users/:id',(req,res) => {
    console.log(JSON.stringify(req.params));
    const parsedId = parseInt(req.params.id);
    console.log("parsedId",parsedId);
    if(isNaN(parsedId)){
      return res.status(400).send({message:"Invalid user ID"});
    }

    const findUser = mockData.find((user) => user.id === parsedId);
    if(!findUser){
      return res.status(404).send({message:"User not found"});
    }
    res.send(findUser);
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});