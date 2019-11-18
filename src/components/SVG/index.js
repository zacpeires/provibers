import React from 'react';

export const DashedLine = () => {
  return (
    <svg height='80' width='300'>
      <g fill='none' stroke='white' stroke-width='4'>
        <path fill="white" stroke-dasharray='5,5' d='M5 20 l215 0' />
      </g>
    </svg>
  );
};
