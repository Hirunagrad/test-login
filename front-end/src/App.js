import React from 'react';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import Login from './auth/login';




function App() {
 
  

  return (
    <div className="App">
       
     
          <BrowserRouter>
               
                <Switch>
                <Route path="/login"  exact><Login/></Route>
                <Route path="/admin" ><h1>Admin</h1></Route>
               
                
                </Switch>

                
                
                



                </BrowserRouter>
             
    </div>
  );
}

export default App;
