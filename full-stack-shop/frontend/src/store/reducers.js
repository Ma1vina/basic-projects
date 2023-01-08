const defaultState = {
  count: [],
};

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INIT":
      if (action.payload.localC) {
        return { ...state, count: action.payload.localC }; // из ? localstorage
      }
      const prodsCount = [];
      return { ...state, count: prodsCount };

    case "INCREMENT":
      let countInc = state.count.find((elem) => elem.id === action.payload);
      if (!countInc) {
        let initCountObj = { count: 1, id: action.payload };
        return { ...state, count: [...state.count, initCountObj] };
      }
      countInc.count++;
      return { ...state, count: [...state.count] };

    case "DECREMENT":
      let countDec = state.count.find((elem) => elem.id === action.payload);
      if (countDec && countDec.count > 0) {
        countDec.count--;
        return { ...state, count: [...state.count] };
      }
      let initCountObj = { count: 0, id: action.payload };
      return { ...state, count: [...state.count, initCountObj] };


      case "DELETE":
        let countDelete = state.count.filter((elem) => elem.id !== action.payload);
        return { ...state, count: [...countDelete] };

    default:
      return state;
  }
};

const dataProd = {
  products: [],
};

export const productReducer = (state = dataProd, action) => {
  switch (action.type) {
    case "PRODUCTS":
      state.products = action.payload;
      return { ...state, products: [...state.products] };
    default:
      return state;
  }
};

const page = "";
export const pagesReducer = (state = page,action)=>{
  switch (action.type) {
    case "PAGES":
      state = action.payload;
      return state;
      default:
        return state;
  }
}
