import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function ColorAlerts() {
  return (
    <Alert severity="error" color="error" style={{marginTop:"10%"}}>
      Request failed with status code 422 !
    </Alert>
  );
}