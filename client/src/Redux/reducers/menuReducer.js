const initialState = {
  menu: []
}

const menuReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_MENU':
      return {
        ...state,
        menu: payload
      }

    default:
      return state
  }
}
export default menuReducer;