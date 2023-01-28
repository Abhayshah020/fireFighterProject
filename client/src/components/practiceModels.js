import { message, Popconfirm } from 'antd';
const confirm = () => {
  message.success('Click on Yes');
};
const cancel = () => {
  message.error('Click on No');
};
const PracticeModels = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <>Delete</>
  </Popconfirm>
);
export default PracticeModels;