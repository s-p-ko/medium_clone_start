import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'pages/routes'

function App() {
  return (
    <div>
      <h3>Welcome to hooks</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
