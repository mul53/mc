import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  progress: {
    marginBottom: '8px',
    color: '#d22f2f',
  },
});

function Loader(props) {
  const { classes } = props;
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontWeight: '500',
    }}
    >
      <CircularProgress
        className={classes.progress}
      />
      Loading
    </div>
  );
}

export default withStyles(styles)(Loader);
