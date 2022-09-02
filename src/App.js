import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
// import NewBeer from './pages/NewBeer';
import Beer from './pages/Beer';
// import RandomBeer from './pages/RandomBeer';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:beerId" element={<Beer />} />
        {/* <Route path="/Beer/new" element={<NewBeer />} />
        
        <Route path="/Beer/randomBeer" element={<RandomBeer />} />  */}
      </Routes>

    </div>
  );
}

export default App;
