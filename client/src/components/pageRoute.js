
import { Route, Routes } from 'react-router-dom';
import UserDashboard from '../containers/user/userDashboard';
import AdminDashboard from '../containers/admin/adminDashboard';
import AboutUsDashboard from '../containers/user/aboutUsDashboard';
import ContactDashboard from '../containers/user/contactDashboard';
import Login from '../containers/auth/login';
import Register from '../containers/auth/register';
import { useSelector } from "react-redux";
import Home from '../containers/auth/home';
import NavBar from '../components/navBar';

const PageRoute = ()=> {
  const {email,role} =useSelector(state=>state.user)
  if(role=="user"){
    return <><NavBar/><UserScreens/></>
  }else if(role=="admin")  {
    return <><NavBar/><AdminScreens/></>
  }else{
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
const AdminScreens = () => {
  return (
    <Routes>
    <Route exact path="/" element={<AdminDashboard />} />
    </Routes>
  )
}


export default PageRoute;
