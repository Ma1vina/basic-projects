const defaultState = {
  count: [],
};

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INIT":
      if(action.payload.localC){
        return {...state, count: action.payload.localC}// из ? localstorage
      }
      const prodsCount = [];
      for (let i = 0; i < action.payload; i++) {
        prodsCount.push(undefined);
      }
      return { ...state, count: prodsCount };
    // case "SETCOUNTFORINDEX":
    //   state.count[action.payload.index] = action.payload.count; //index и count -индекс и число - arr[i] = count
    //   return { ...state, count: [...state.count] };

      case "INCREMENT":
// return { ...state, count: [...state.count] };
    default:
      return state;
  };

};

const dataProd = {
  products: [],
};

export const productReducer = (state = dataProd, action) => {
  switch (action.type) {
    case "PRODUCTS":
     state.products = action.payload 
     return {...state, products: [...state.products]}
     default: 
     return state;
  }
}
