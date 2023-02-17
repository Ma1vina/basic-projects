const defaultState = {
  customer: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
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
