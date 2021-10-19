import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Doctors from './Components/Doctors/Doctors';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import PrivateRote from './Components/PrivateRoute/PrivateRoute'
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRote path="/details/:id">
                <Details></Details>
            </PrivateRote>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
