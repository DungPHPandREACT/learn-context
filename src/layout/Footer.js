import React, { useContext } from 'react';
import ColorContext from '../contexts/ColorContext';

const Footer = () => {
  const dataContext = useContext(ColorContext);
  // gọi API để lấy mã màu ()
  return (
    <div
      style={{ width: '100%', height: '200px', background: dataContext.color.footer }}
    >
      Footer
    </div>
  );
};

export default Footer;
