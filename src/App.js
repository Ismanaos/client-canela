import './App.css';
import Home from './components/Home/Home';
import Creador from './components/Creado/Creado';
import NavSearch from './components/NavBar/NavBar'
import Procesos from './components/Proceso/Talleres';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detalle from './components/Detalle/Detalle';
import Agregado from './components/Agregados/Agregados';
import Dashboard from './components/Dashboard/Dashboard';
import Buscador from './components/Buscador/Buscador';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/modelos'>
            <NavSearch />
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/talleres'>
            <Dashboard />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/crear'>
            <NavSearch />
            <Creador />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/taller'>
            <Detalle />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/agregar'>
            <NavSearch />
            <Agregado />
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/buscador'>
            <NavSearch />
            <Buscador />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
