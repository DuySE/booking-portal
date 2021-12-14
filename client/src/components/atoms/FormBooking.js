import 'antd/dist/antd.css';
import { DatePicker, Form, Input, Button, Select } from 'antd';
import axios from 'axios';
const { Option } = Select;

const FormBooking = () => {
  const [form] = Form.useForm();
  const id = localStorage.getItem('id');
  const onFinish = async (values) => {
    const booking = {
      booking: {
        type: values.type,
        location: values.location,        
        datetime: [
          values.proposedDate1,
          values.proposedDate2,
          values.proposedDate3
        ].filter(date => date),
        status: "pending",
        user: id,
      },
    }
    await axios.post('http://localhost:3001/booking', booking);
    form.resetFields();
    window.location.reload();
  };

  return (
    <>
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Type of event"
          name="type"
          rules={[
            {
              required: true,
              message: 'Please choose type of event!',
            },
          ]}
        >
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
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: 'Please input location!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Proposed Date 1" name="proposedDate1">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Proposed Date 2" name="proposedDate2">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Proposed Date 3" name="proposedDate3">
          <DatePicker />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormBooking;
