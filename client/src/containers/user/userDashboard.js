import { useSelector } from 'react-redux'
import { logoutResetDetails } from "../../redux/actions/userAction"
import { useDispatch } from 'react-redux'
import CardPage from '../../components/cardPage'
import Footer from '../../components/footer';

function UserDashboard() {
  const {_id} =useSelector(state=>state.user)
  const dispatch = useDispatch()
  const { name,role } = useSelector(state => state.user)
  const triggerLogout = () => {
      dispatch(logoutResetDetails())
  }
  return (
    <>
    <div>
      Its UserDashboard#{_id}
         {/* <CardPage/>
         <Footer/> */}
    </div> 
    </>
  )
}

export default UserDashboard
