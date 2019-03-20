import React from 'react';

function CenterWrapper(props) {
  return (
    <div
    style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      ...props.style
    }}>
     { props.children }
    </div>
  )
}

export default CenterWrapper;