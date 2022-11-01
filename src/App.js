import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home'
import Hulu from './pages/Hulu';
import Netlix from './pages/Netlix';
import Discord from './pages/Discord';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Hulu' element={<Hulu />}/>
        <Route path='/Netflix' element={<Netlix />}/>
        <Route path='/Discord' element={<Discord />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
