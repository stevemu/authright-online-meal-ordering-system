const initialState = {a: '333'}

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_ORDER':
      return payload;

    default:
      return state
  }
}
export default orderReducer;