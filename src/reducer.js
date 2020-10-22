const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC': return state + 1 //action INC
    case 'DEC': return state - 1 //action DEC
    case 'RND': return state + action.rndValue //action RND
    default: return state
  }
}

export default reducer;