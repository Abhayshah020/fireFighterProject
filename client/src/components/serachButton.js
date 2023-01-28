import { Input, Space } from 'antd';
const { Search } = Input;
const onSearch = (value) => console.log(value);

const SerachButton = () => (
    <Search
      placeholder="input search text"
      allowClear
      
      onSearch={onSearch}
      style={{
        width: 200,
        marginRight:"80px"
      }}
    />
);
export default SerachButton;