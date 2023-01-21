import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/auth/home';
import Login from './containers/auth/login';
import Register from './containers/auth/register';
const App = ()=> {
  return (
    <>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/login" element={ <Login/>}/>
    <Route path="/Register" element={ <Register/>}/>
    </Routes>
     </>
  );
}

export default App;
