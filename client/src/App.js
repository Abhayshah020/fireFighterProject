import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/auth/home';
import Login from './containers/auth/login';
import Register from './containers/auth/register';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/login" element={ <Login/>}/>
    </Routes>
     </>
  );
}

export default App;
