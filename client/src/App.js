import './App.css';
import axios from 'axios'
import React , { useState } from 'react'

function App() {

  const [state,setState] = useState([])

  axios.get('http://localhost:5000/personal')
  .then(({data}) => {
    setState(data)
    console.log(state, "<<")
  })

  return (
    <div className="App">
      {/* {JSON.stringify(state, null, 2)} */}
    </div>
  );
}

export default App;
