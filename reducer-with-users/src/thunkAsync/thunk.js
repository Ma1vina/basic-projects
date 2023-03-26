import { addManyCustomers } from "../store/customerReducer"

export const getCustomers = () =>
function(dispatch){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCustomers(json)))
}
