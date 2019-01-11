export default (store) => (next) => async (action) => {
  if(!action.payload || !action.payload.then){
    return next(action);
  }

  const response = await action.payload;
    const newAction = {
      ...action,
      payload: response
    }

    store.dispatch(newAction);

    return response;
  };


// export default function (store){
//   return function (next){
//     return function (action){
//       //code action
//     }
//   }
// }