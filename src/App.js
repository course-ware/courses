
import React, { useState, useEffect }  from 'react';
import Main from './main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from './welcome';


function App() {

  const[state, setState] = useState({data: {}});
  
  useEffect(()=>{
    fetch('data.json').then(response => {
        response.json().then(data => {
            setState({data: data});
        })
    })
})


  return (
    
    
    <div className="App" >

      <Router>
        <Routes>
        <Route 
            path={"/courses/"} 
            exact 
            element={<Welcome />}
        />
      {
        
        Object
          .keys(state.data)
          .map(route => (

              <Route 
                key={route}
                path={"/courses/"+route} 
                exact 
                element={<Main data = {state.data[route]} />}
              />
            
          ))
      }
        </Routes>
      </Router>

    </div>
  );
}

export default App;
