const { restart } = require('nodemon');
const controllerToDo =  require('./toDo.controller');

const getAll=(req,res)=>{
  const data = controllerToDo.getAlltoDo();
  res.status(200).json({
    items:data.length,
    response:data
  })
}                                   

const getById=(req,res)=>{
  const id = Number(req.params.id);

  if(id){
    const data = controllerToDo.getToDoById(id);

    if(data.id){
      res.status(200).json(data)
    }else{
      res.status(400).json({message:'Invalid id'});

    }
    
  }else{
    res.status(400).json({message:'Id is not a number'});

  }
}

const create=(req,res)=>{
  const info = req.body;
  const data = controllerToDo.createToDo(info);

  if(data.id){
    res.status(201).json(data)
  }else{
  res.status(400).json({message:'Missing data'})

  }


}

const del=(req,res)=>{
  const id=Number(req.params.id);

  if(id){
    const data = controllerToDo.deleteToDo(id);
    
    if(data.id){
      // console.log(data);
      res.status(204).json()
    }else{
      res.status(400).json({message:'Invalid id'})
    }

  }else{
    res.status(400).json({message:'Id is not a number'});

  }

  
}

const update=(req,res)=>{
  const id =Number(req.params.id);
  const info = req.body;

  if(id){
    const data =controllerToDo.updateToDo(id,info);
    if(data.id){
      res.status(200).json(data);
    }else{
      res.status(400).json({message:'Invalid id'})

    }
  } else{
    res.status(400).json({message:'Id is not a number'});

  }

}

module.exports={
  getAll,
  getById,
  create,
  del,
  update
}
