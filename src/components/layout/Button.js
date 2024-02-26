import React from 'react';

const Button = ({ sign, count, updateCount }) => {
  return (
    <button
      className='btn blue darken-2'
      /* style={{ fontSize: '900' }} */
      onClick={() => (sign === '+' ? updateCount(1) : updateCount(-1))}
    >
      {sign}
    </button>
  );
};

export default Button;
