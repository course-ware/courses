
import Main from './courses'
import {Routes, Route} from 'react-router-dom'
import Welcome from './welcome';
import React from 'react';
import data from "./data/data.json"



function App() {

    return (
      <div className="App" >

          <Routes>
            
            <Route
                path={"/"} 
                exact 
                element={<Welcome />}
            />

            <Route
                path={"/core-java"} 
                exact 
                element={<Main data = {data['core-java']} />}
            />

            <Route
                path={"/frontend-intro"} 
                exact 
                element={<Main data = {data['frontend-intro']} />}
            />

          </Routes>

      </div>
    )

}

export default App;
