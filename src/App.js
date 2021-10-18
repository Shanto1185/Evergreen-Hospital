import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Doctors from './Components/Doctors/Doctors';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
