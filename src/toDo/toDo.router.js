const router = require('express').Router();
const httpToDo = require('./toDo.http');

router.route('/todo')
  .get(httpToDo.getAll)
  .post(httpToDo.create)
  

router.route('/todo/:id')
  .get(httpToDo.getById)
  .delete(httpToDo.del)
  .patch(httpToDo.update)
  // .update(httpToDo.update)

module.exports={
  router
}
  