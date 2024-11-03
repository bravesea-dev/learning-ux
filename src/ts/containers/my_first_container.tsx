import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import './assets/scss/app.scss';

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello Material UI
      </Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));