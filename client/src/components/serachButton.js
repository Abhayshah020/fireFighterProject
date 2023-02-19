import { Input } from 'antd';
import { Popover } from 'antd';

const { Search } = Input;
const onSearch = (value) => console.log(value);
const content = (
  <div>
    <p style={{color:'red'}}>!!Search function is currently unavailable!:(</p>
  </div>
);
const SerachButton = () => {

  return(
    <>
        <Popover content={content} title={null} trigger="click">
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 450,
        marginRight: "80px"
      }}
    />
     </Popover>
    </>
  )
};
    export default SerachButton;