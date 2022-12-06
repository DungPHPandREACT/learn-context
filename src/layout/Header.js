import React, { useContext } from 'react';
import ColorContext from '../contexts/ColorContext';

const Header = (props) => {
  // gọi API để lấy mã màu ()
  const dataContext = useContext(ColorContext);
  console.log('color trong component Header: ', dataContext);

  const handleChangeBackgound = () => {
    dataContext.onChangeBackground({ ...dataContext.color, header: 'white' });
  };

  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        background: dataContext.color.header,
      }}
      onClick={handleChangeBackgound}
    >
      Header
    </div>
  );
};

export default Header;
