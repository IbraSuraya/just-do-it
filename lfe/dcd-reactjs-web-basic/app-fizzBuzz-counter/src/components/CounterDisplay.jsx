import React from 'react';

function CounterDisplay({ count }) {
  if (count === 0) {
    return <p>{count}</p>;
  }
 
  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  }
 
  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }
 
  if (count % 7 === 0) {
    return <p>Buzz</p>;
  }
 
  return <p>{count}</p>;
}

export default CounterDisplay;