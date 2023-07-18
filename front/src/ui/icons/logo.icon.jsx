import React from 'react';
import logo from './../../images/dictionary-icon.png';

const LogoIcon = ({ style, width = 40, height = 40 }) => {
  return (
    <div style={style}>
      <img src={logo} alt={'Dictionary'} width={width} height={height} />
    </div>
  );
};

export default LogoIcon;
