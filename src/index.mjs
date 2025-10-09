import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import https from 'http-errors';
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;
const mockData = [{id:1,name:"John", displayName:"johnny123"},{id:2,name:"Doe", displayName:"Supaniga"},{id:3,name:"Smith", displayName:"Smithy"}];

app.get('/api/users', (req, res,next) => {;
  console.log("first one done");
  res.send(mockData);
  next();
});

app.post('/api/users', (req, res) => {
  console.log(req.body);
  const {body } = req;
  const newUser = {
    id: mockData[mockData.length - 1].id + 1,...body
  };
  mockData.push(newUser);
  return res.send(newUser).status(201);
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

app.put('/api/users/:id',(req,res) => {
  console.log(req.body);
  const {body, params:{id} } = req;
  const parsedId = parseInt(id);
  if(isNaN(parsedId)){
    return res.status(400).send({message:"Invalid user ID"});
  }
  const userIndex = mockData.findIndex((user) => user.id === parsedId);
  if(userIndex === -1){
    return res.status(404).send({message:"User not found"});
  }
  const updatedUser = {id:parsedId,...body};
  mockData[userIndex] = updatedUser;
  res.send(updatedUser);
  return console.log(res.status(200));
});

app.patch('/api/users/:id',(req,res) => {
  console.log(req.body);
  const {body, params:{id} } = req;
  const parsedId = parseInt(id);
  if(isNaN(parsedId)){
    return res.status(400).send({message:"Invalid user ID"});
  }
  const userIndex = mockData.findIndex((user) => user.id === parsedId);
  if(userIndex === -1){
    return res.status(404).send({message:"User not found"});
  }
  const existingUser = mockData[userIndex];
  const updatedUser = {...existingUser,...body};
  mockData[userIndex] = updatedUser;
  res.send(updatedUser);
  return console.log(res.status(200));
});
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});