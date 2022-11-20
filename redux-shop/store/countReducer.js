const defaultState = {
  count: [],
};

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INIT":
      if(action.payload.localC){
        return {...state, count: action.payload.localC}
      }
      const prodsCount = [];
      for (let i = 0; i < action.payload; i++) {
        prodsCount.push(undefined);
      }
      return { ...state, count: prodsCount };
    case "SETCOUNTFORINDEX":
      state.count[action.payload.index] = action.payload.count; //index и count -индекс и число - arr[i] = count
      return { ...state, count: [...state.count] };
    default:
      return state;
  }
};


    //  case "INCREMENT":
    //    state.count[action.payload] = state.count[action.payload] +1
    //   return  {...state, count:[...state.count]};
    //   case "DECREMENT":
    //     state.count[action.payload] = state.count[action.payload] -1
    //   return {...state, count:[...state.count]}s