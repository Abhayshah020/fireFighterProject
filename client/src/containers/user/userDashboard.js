import { useSelector } from 'react-redux'
import { logoutResetDetails } from "../../redux/actions/userAction"
import { useDispatch } from 'react-redux'
import CardPage from '../../components/cardPage'

function UserDashboard() {
  const dispatch = useDispatch()
  const { name,role } = useSelector(state => state.user)
  const triggerLogout = () => {
      dispatch(logoutResetDetails())
  }
  return (
    <>
    <div>
         <CardPage/>
    </div> 
    </>
  )
}

export default UserDashboard
