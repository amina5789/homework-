import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick =useCallback(() => {
    setCount(prevCount => prevCount + 1);
  },[])

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('Child re-rendered');
  return <button onClick={onClick}>Click me</button>;
}

export default ParentComponent;