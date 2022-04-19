import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Navbar from './menu/Navbar';
import inicio from './componentsmenu/inicio'
import carritodecompras from './componentsmenu/carritodecompras';
import servicios from './componentsmenu/servicios';


function App() {
  return (
    <div className="App">
     
     <Router>
     <Navbar/>
     <Route path= '/' exact component = {inicio}/>
     <Route path= '/carritodecompras' exact component = {carritodecompras}/>
     <Route path= '/servicios' exact component = {servicios}></Route>
     </Router>


    </div>
  );
}

export default App;
