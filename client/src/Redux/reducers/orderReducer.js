const initialState = {
  order: []
}

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_ORDER':
      return {
        ...state,
        order: payload
      }

    default:
      return state
  }
}
export default orderReducer;