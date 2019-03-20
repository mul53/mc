import React from 'react';

function CenterWrapper({ children, style }) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        ...style,
      }}
    >
      { children }
    </div>
  );
}

export default CenterWrapper;
