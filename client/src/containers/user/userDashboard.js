import { useSelector } from 'react-redux'
import { logoutResetDetails } from "../../redux/actions/userAction"
import { useDispatch } from 'react-redux'

function UserDashboard() {
  const dispatch = useDispatch()
  const { name,role } = useSelector(state => state.user)
  const triggerLogout = () => {
      dispatch(logoutResetDetails())
  }
  return (
    <>
    <div>
         Welcome to user
         <button className="button_logout" onClick={() => triggerLogout()}>Logout</button>
    </div> 
    </>
  )
}

export default UserDashboard
