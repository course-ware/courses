
import Main from './main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from './welcome';
import React from 'react';


class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    fetch('/courses/data.json').then(response => {
        response.json().then(data => {
          console.log(data)
            this.setState({data: data});
        })
    })            
  }

  render(){
    return (
    
      <div className="App" >

        <Router>
          <Routes>
            <Route
                path={"/courses/"} 
                exact 
                element={<Welcome />}
            />
            {console.log(this.state.data)}
            {
              this.state.data !=null &&
              Object
                .keys(this.state.data)
                .map(route => (

                    <Route 
                      key={route}
                      path={"/courses/"+route} 
                      exact 
                      element={<Main data = {this.state.data[route]} />}
                    />
                  
                ))
            }
             </Routes>
        </Router>

      </div>
    )
  };
}

export default App;
