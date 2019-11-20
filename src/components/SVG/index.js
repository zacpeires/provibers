import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  line {
    stroke: rgb(255, 255, 255);
    stroke-width: 2;
  }
`;

export const DashedLine = () => {
  return (
    <Container>
      <svg
        id='dashed-line'
        width='600'
        height='20'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          stroke-dasharray='10, 5'
          x1='0'
          y1='11'
          x2='1920'
          y2='11'
          style={{ strokeWidth: '4px', stroke: 'rgb(255, 255, 255);' }}
        ></line>
      </svg>
    </Container>
  );
};

export const Diamond = () => {
  return (
    <svg
      preserveAspectRatio='none'
      data-bbox='0 0 298.185 352.082'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 298.185 352.082'
      role='img'
    >
      <g>
        <path d='M298.185 264.061l-149.093 88.021L0 264.061V88.021L149.092 0l149.093 88.021v176.04z'></path>
      </g>
    </svg>
  );
};
