import React, { useContext } from 'react';
import ColorContext from '../contexts/ColorContext';

const Body = () => {
  const dataContext = useContext(ColorContext);
  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        background: dataContext.color.body,
      }}
    >
      Body
    </div>
  );
};

export default Body;
