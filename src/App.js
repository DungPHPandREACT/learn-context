import React, { useState } from 'react';
import Page from './layout/Page';
import ColorContext from './contexts/ColorContext';

const App = () => {
  // gọi API để lấy mã màu ()
  const [color, setColor] = useState({
    header: 'red',
    body: 'purple',
    footer: 'pink',
  });
  return (
    <div>
      <ColorContext.Provider
        value={{ color: color, 
          onChangeBackground: setColor }}
      >
        <Page />
      </ColorContext.Provider>
    </div>
  );
};

export default App;
