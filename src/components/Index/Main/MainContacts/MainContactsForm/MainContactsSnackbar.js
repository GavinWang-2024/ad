import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function SimpleSnackbar(props) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { snackBar, setSnackBar } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBar((prevState) => {
      return { ...prevState, open: false };
    });
  };

  return (
    <Snackbar
      open={snackBar.open}
      autoHideDuration={snackBar.duration}
      onClose={handleClose}
      message={snackBar.message}
      className="snackbar"
    >
      <Alert
        onClose={handleClose}
        severity={snackBar.severity}
        sx={{ width: '100vw' }}
      >
        {snackBar.message}
      </Alert>
    </Snackbar>
  );
}
