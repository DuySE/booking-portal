import 'antd/dist/antd.css';

const Dropdown = () => {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select type of event"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value='Health Talk'>Health Talk</Option>
      <Option value='Wellness Events'>Wellness Events</Option>
      <Option value='Fitness Activities'>Fitness Activities</Option>
    </Select>
  )
};

export default Dropdown;
