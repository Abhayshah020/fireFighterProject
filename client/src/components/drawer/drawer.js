import { Button, Drawer } from 'antd';
import { useState } from 'react';
import '../cssFile/drawer.css'
const DrawerFeature = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showDrawer} style={{border:"none", backgroundColor:"transparent", boxShadow:'none',paddingLeft:'10px'}}>
        <h3>Settings</h3>
      </Button>
      <Drawer title="Settings" placement="right" onClose={onClose} open={open} style={{backgroundColor:"rgba(225,225,225,0.8"}}>
        <div className='drawer'>
            <div className='drawerInfo' onClick={onClose}>
                Change User Information                
            </div>
            <div className='drawerInfo' onClick={onClose}>
                Change Password
            </div>
            <div className='drawerInfo' onClick={onClose}>
                Deactivate Account
            </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerFeature;