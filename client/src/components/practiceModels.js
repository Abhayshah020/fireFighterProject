import { Button, Drawer } from 'antd';
import { useState } from 'react';

const PracticeModels = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showDrawer} style={{border:"none", backgroundColor:"transparent", boxShadow:'none',paddingLeft:'0'}}>
        <h3>Settings</h3>
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default PracticeModels;