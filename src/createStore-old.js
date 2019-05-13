export default function createStore(reducer) {
  
function getState()  { return state }
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  dispatch( {type: '@@INIT'} )

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
