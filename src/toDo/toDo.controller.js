const toDoDB = [
  {
    id:1,
    title:'prueba 1',
    description:'prueba 1',
    done:false
  }
];

const getAlltoDo = () => {
  return toDoDB;
}

const getToDoById = (id) => {
  // const element = toDoDB.filter(element => element.id === id);
  const index = toDoDB.findIndex(element=>element.id ===id)

  if(index>=0){return toDoDB[index]}
  else{return false}
  
  // return element[0];

}

const createToDo = (data) => {
  if (data.title && data.description) {

    if (toDoDB.length == 0) {
      const newToDo = {
        id: 1,
        title: data.title,
        description: data.description,
        done:false
      }
      toDoDB.push(newToDo);
      return newToDo;
    }

    const newToDo = {
      id: toDoDB[toDoDB.length - 1].id + 1,
      title: data.title,
      description: data.description,
      done:false

    }

    toDoDB.push(newToDo);
    return newToDo;
  }

  return false;

}


const deleteToDo =(id)=>{
  const index = toDoDB.findIndex(element =>element.id===id);

  if(index >= 0){
    // const deletedItem = toDoDB[index];
    const deletedItem = toDoDB.slice(index,index+1);
    toDoDB.splice(index,1);
    return deletedItem[0];
    
  }else{
    return false;

  }
}

const updateToDo =(id,data)=>{
  
  if(data.done){
    const index = toDoDB.findIndex(element=>element.id===id);
    
    if(index>=0){
      toDoDB[index].done =data.done;
      return toDoDB[index];
    }else{
      return false;
    }
  }else{
    return false;

  }

}

module.exports={
  getAlltoDo,
  getToDoById,
  createToDo,
  deleteToDo,
  updateToDo
}



