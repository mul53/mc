import React from 'react';
import { Icon } from '@mdi/react';
import { mdiAccessPointNetworkOff } from '@mdi/js';

function ErrorView({ message }) {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontWeight: '500',
      color: '#686868',
    }}
    >
      <Icon
        path={mdiAccessPointNetworkOff}
        size={1.5}
        style={{
          marginBottom: '8px',
        }}
        color="#686868"
      />
      { message }
    </div>
  );
}

export default ErrorView;
