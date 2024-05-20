import './App.css';
import NavBar from './layout/NavBar';
import RoutesList from './RoutesList';

import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <RoutesList/>
    </BrowserRouter>
  );
}

export default App;
