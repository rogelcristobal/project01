import React from 'react';

const Label = ({text,top,left}) => {
  return (
    <span className={`text-xs font-mono absolute ${!top?"top-[105%]":"bottom-[105%]"} ${!left?"right-0":"left-0"} tracking-[0rem] font-medium text-black`}>
      {text}
    </span>
  );
}

export default Label;
