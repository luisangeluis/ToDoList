ROUTES

/todo
-GET(Get all toDo)
-POST(Create a new toDo)
/todo/:id
-GET(Get a toDo by id)
-DELETE(Delete a toDo by id)
-PATCH(Uptade the property done of a toDo by id)

CONTROLLERS

```javascript
const getAlltoDo = () => {
  return toDoDB;
};
const createToDo = (data) => {
  if (data.title && data.description) {
    if (toDoDB.length == 0) {
      const newToDo = {
        id: 1,
        title: data.title,
        description: data.description,
        done: false,
      };
      toDoDB.push(newToDo);
      return newToDo;
    }

    const newToDo = {
      id: toDoDB[toDoDB.length - 1].id + 1,
      title: data.title,
      description: data.description,
      done: false,
    };

    toDoDB.push(newToDo);
    return newToDo;
  }

  return false;
};

const getToDoById = (id) => {
  const index = toDoDB.findIndex((element) => element.id === id);
  if (index >= 0) {
    return toDoDB[index];
  } else {
    return false;
  }
};

const deleteToDo = (id) => {
  const index = toDoDB.findIndex((element) => element.id === id);

  if (index >= 0) {
    const deletedItem = toDoDB.slice(index, index + 1);
    toDoDB.splice(index, 1);
    return deletedItem[0];
  } else {
    return false;
  }
};

const updateToDo = (id, data) => {
  if (data.done) {
    const index = toDoDB.findIndex((element) => element.id === id);

    if (index >= 0) {
      toDoDB[index].done = data.done;
      return toDoDB[index];
    } else {
      return false;
    }
  } else {
    return false;
  }
};
```
