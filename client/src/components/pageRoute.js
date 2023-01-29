
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
import UserListDashboard from '../containers/admin/userListDashboard';
import NotificationDashboard from '../containers/sharedScreen/notificationDashboard';
import Profile from '../containers/sharedScreen/profile';

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
    <Route exact path="/profile" element={<Profile />} />
    <Route exact path="/about" element={<AboutUsDashboard />} />
    <Route exact path="/contact" element={<ContactDashboard />} />
    <Route exact path="/notifications" element={<NotificationDashboard />} />
    </Routes>
  )
}
const AdminScreens = () => {
  return (
    <Routes>
    <Route exact path="/" element={<AdminDashboard />} />
    <Route exact path="/profile" element={<Profile />} />
    <Route exact path="/users" element={<UserListDashboard />} />
    <Route exact path="/notifications" element={<NotificationDashboard />} />
    </Routes>
  )
}


export default PageRoute;
