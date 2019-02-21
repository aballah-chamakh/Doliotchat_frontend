const initialState = {
  authenticated: false
}

const Reducer = (state=initialState,action)=>{
    let newState = Object.assign({},state) ;
    switch (action.type) {
      case 'login':
      newState.authenticated = true
      return newState
      break;
      case 'logout':
      newState.authenticated = false
      localStorage.clear()
      return newState
      break;
      default:
      return newState

    }
}
export default Reducer
