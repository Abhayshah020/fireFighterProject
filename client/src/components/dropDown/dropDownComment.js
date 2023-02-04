import { Button, Dropdown, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import '../cssFile/user.css';
const DropDownButtonComment = () => {

  const items = [
    {
      key: '1',
      label: (
        <>
        <div className='chatsBox'>
          <h3>Chats</h3>      
        </div>
          
        </>
      ),
    },
    {
      key: '2',
      label: (
        <>
        <div  >
        kjhkj
        </div>
         
        </>      
      ),
    },
    {
      key: '3',
      label: (
        <>
        <div >
            kadbijs
       </div>
         
        </>      
      ),
    },
  ];
  return(
    <>
        <Space wrap>
      <Dropdown menu={{items}} placement="bottomRight" className='dropDownBox'>
        <Button className='messageBox'><FontAwesomeIcon icon={faComments} className="commentLogo"/></Button>
      </Dropdown>
    </Space>
    </>

  )

  };
export default DropDownButtonComment;