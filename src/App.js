
import Main from './main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DATA from './data/data.json'
import Welcome from './welcome';


function App() {
  return (
    
    
    <div className="App" >

      <Router>
        <Routes>
        <Route 
            path={"/"} 
            exact 
            element={<Welcome />}
        />
      {
        
        Object
          .keys(DATA)
          .map(route => (

              <Route 
                key={route}
                path={"/"+route} 
                exact 
                element={<Main data = {DATA[route]} />}
              />
            
          ))
      }
        </Routes>
      </Router>

    </div>
  );
}

export default App;
