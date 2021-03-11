import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profiles';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>   
         <Switch>
           <Route exact path="/" component={Home} /> ,
           <Route exact path="/profile/:id" component={Profile} /> ,
         </Switch>
       </Router>
  );
}

export default App;
