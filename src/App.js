import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Technology from './containers/Technology';
import Home from './containers/Home';
import Crew from './containers/Crew';
import Destination from './containers/Destinations';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/destination' element={<Destination/>}></Route>
        <Route path='/crew' element={<Crew/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
