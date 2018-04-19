export default function createStore(reducer) {
  let state;

  const getState = () => {
    state = reducer(state, {type: '@@INIT'})
    return state
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    render()
  }

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
