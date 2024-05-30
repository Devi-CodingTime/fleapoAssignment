import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>
    </div>
  );
}

export default App;
