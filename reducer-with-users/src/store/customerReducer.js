const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

const defaultState = {
  customer: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_MANY_CUSTOMERS':
      return { ...state, customer: [...state.customer, ...action.payload]}
    case "ADD-CUSTOMER":
      return { ...state, customer: [...state.customer, action.payload] };
    case "REMOVE-CUSTOMER":
      return {
        ...state,
        customer: state.customer.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};


export const addManyCustomers = (payload)=>{
  return {type: ADD_MANY_CUSTOMERS, payload}
  }
