import { useSelector } from 'react-redux'

function UserDashboard() {
  const {_id} =useSelector(state=>state.user)
  const { name,role } = useSelector(state => state.user)
  return (
    <>
    <div>
    <h1>Welcom User {name}. Your Id is #{_id}</h1>
         {/* <CardPage/>
         <Footer/> */}
    </div> 
    </>
  )
}

export default UserDashboard
