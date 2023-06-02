import './App.css';
import Home from './components/Home/Home';
import Creador from './components/Creado/Creado';
import NavSearch from './components/NavBar/NavBar'
import Procesos from './components/Proceso/Proceso';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavSearch />
        <Switch>
          <Route exact path='/talleres'>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/proceso'>
            <Procesos />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/crear'>
            <Creador />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
