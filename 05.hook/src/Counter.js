// import React, { useReducer } from 'react';

function useReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
      break;

    case 'DECREMENT':
      return { value: state.value + 1 };
      break;

    default:
      return state;
      break;
  }
}

const Counter = () => {
  const [state, ditpatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => ditpatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => ditpatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
