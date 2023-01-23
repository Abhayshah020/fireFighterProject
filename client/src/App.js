import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from './containers/user/userDashboard';
import AboutUsDashboard from './containers/user/aboutUsDashboard';
import ContactDashboard from './containers/user/contactDashboard';
import Login from './containers/auth/login';
import Register from './containers/auth/register';
import { useSelector } from "react-redux";
import Home from './containers/auth/home';
import NavBar from './components/navBar';

const App = ()=> {
  const {email} =useSelector(state=>state.user)
  if(email){
    return <><NavBar/><UserScreens/></>
  }else {
    return <AuthScreens/>
  }
}

const AuthScreens = () => {
  return (
    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
  </Routes>
  )
}


const UserScreens = () => {
  return (
    <Routes>
    <Route exact path="/" element={<UserDashboard />} />
    <Route exact path="/about" element={<AboutUsDashboard />} />
    <Route exact path="/contact" element={<ContactDashboard />} />
    </Routes>
  )
}


export default App;
