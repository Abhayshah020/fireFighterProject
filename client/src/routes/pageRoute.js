
import { Route, Routes } from 'react-router-dom';
import UserDashboard from '../containers/user/userDashboard';
import AdminDashboard from '../containers/admin/adminDashboard';
import Login from '../containers/auth/login';
import Register from '../containers/auth/register';
import { useSelector } from "react-redux";
import Home from '../containers/home/home';
import NavBar from '../components/navBar';
import UserListDashboard from '../containers/admin/userListDashboard';
import NotificationDashboard from '../components/notification/notificationDashboard';
import Profile from '../containers/sharedScreen/profile';
import MapDashboard from '../components/map/mapDashboard';
import PracticeModels from '../components/practiceModels';
import PracticeModle2 from '../components/practiceModule2';

const PageRoute = ()=> {
  const {role} =useSelector(state=>state.user)
  if(role==="user"){
    return <><NavBar/><UserScreens/></>
  }else if(role==="admin")  {
    return <><NavBar/><AdminScreens/></>
  }else{
    return <AuthScreens/>
  }
  // return (
  //   <Routes>
  //   <Route exact path="/" element={<PracticeModels />} />
  //   <Route exact path="/hello" element={<PracticeModle2 />} />
  //   </Routes>
  // )
}

const AuthScreens = () => {
  return (
    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<><NavBar/><Home /></>} />
  </Routes>
  )
}


const UserScreens = () => {
  return (
    <Routes>
    <Route exact path="/" element={<UserDashboard />} />
    <Route exact path="/profile" element={<Profile />} />
    <Route exact path="/notifications" element={<NotificationDashboard />} />
    <Route exact path="/map" element={<MapDashboard />} />
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
    <Route exact path="/map" element={<MapDashboard />} />
    </Routes>
  )
}


export default PageRoute;
