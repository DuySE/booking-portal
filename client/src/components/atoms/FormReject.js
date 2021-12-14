import 'antd/dist/antd.css';
import { Form, Button, Input, message } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const FormReject = ({ data }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    await axios.patch(`http://localhost:3001/booking`, { id: data._id, values })
      .then(() => message.success('Update successfully'));
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
          label="Reason"
          name="reason"
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormReject;
