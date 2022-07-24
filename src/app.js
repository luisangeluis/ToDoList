const express =require('express');
const toDoRouter =require('./toDo/toDo.router').router;

require('dotenv').config();
const port = process.env.PORT;
const app =express();

app.use(express.json());

app.use('/api/v1',toDoRouter);

app.listen(port,()=>{
  console.log(`Server started at port ${port}`);
})