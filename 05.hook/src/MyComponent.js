import React, { useRef } from 'react';

const MyComponent = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };

  return <div>아무거나</div>;
};

export default MyComponent;
