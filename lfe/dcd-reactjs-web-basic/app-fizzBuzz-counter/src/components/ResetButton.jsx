import React from 'react';

function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}

export default ResetButton;