import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Games from "./pages/Games/Game";
import Home from './pages/Homes/Home';
function App() {
  
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/game" component={Games}/>
        </Switch>   
    </div>
    </Router>
  );
}
export default App;
