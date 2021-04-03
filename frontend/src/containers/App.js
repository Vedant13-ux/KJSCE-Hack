import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'


const App = () => {
  return (
    <Router>
      <div>
        <Main />
      </div>
    </Router>
  )

};


export default App;
