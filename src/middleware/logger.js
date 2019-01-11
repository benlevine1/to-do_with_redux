export default store => next => action =>{
  console.log("Action", action);

  return next(action);
}