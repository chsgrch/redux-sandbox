import { createStore, bindActionCreators } from 'redux'
import * as actions from './actions'
import reducer from './reducer'

let store = createStore(reducer)
const { dispatch } = store;

// const incDispatch = () => dispatch(setInc())
// const decDispatch = () => dispatch(setDec())
// const rndDispatch = (rndValue) => dispatch(setRnd(rndValue))

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

// const incDispatch = bindActionCreator(setInc, dispatch)
// const decDispatch = bindActionCreator(setDec, dispatch)
// const rndDispatch = bindActionCreator(setRnd, dispatch)

// const incDispatch = bindActionCreators(setInc, dispatch)
// const decDispatch = bindActionCreators(setDec, dispatch)
// const rndDispatch = bindActionCreators(setRnd, dispatch)

const { setInc, setDec, setRnd } = bindActionCreators(actions, dispatch)

// --- Actions ---
document
  .getElementById('inc')
  .addEventListener('click', () => setInc()) //Call cction INC (by dispatch({type: 'action')

document
  .getElementById('dec')
  .addEventListener('click', () => setDec()) //Call action DEC (by dispatch({type: 'action'}))

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const rndValue = Math.floor(Math.random() * 10)
    setRnd(rndValue)
  }
  ) //Call action RND (by dispatch({type: 'action'}))

const update = () => {
  document.getElementById('counter')
    .innerHTML = store.getState()
}

store.subscribe(update) //If state is updated