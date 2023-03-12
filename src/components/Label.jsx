import React from 'react';

const Label = ({text}) => {
  return (
    <span className='text-xs font-mono absolute bottom-0 right-32 font-medium'>
      {text}
    </span>
  );
}

export default Label;
