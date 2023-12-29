import React from 'react';
 
function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

export default IncreaseButton;