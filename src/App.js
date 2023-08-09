import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import './App.css';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Stock from './pages/Stock'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='stockContainer'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About/>} />
          {/* <Route path='/stock/:symbol/' element={<Stock />} /> */}
          <Route path='/stock/:name/:symbol/:lastPrice/:change' element={<Stock />} />
          <Route path='/stocks' element={<Dashboard/>} />

          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
