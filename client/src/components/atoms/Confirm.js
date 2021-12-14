import 'antd/dist/antd.css';
import { Popconfirm, Button, message } from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const Confirm = ({ data, action }) => {
  const icon = action === 'approved' ? <CheckCircleOutlined /> : <CloseCircleOutlined />;
  const confirm = async () => {
    await axios.patch('http://localhost:3001/booking',
      {
        id: data._id,
        status: action,
      },
    ).then(() => message.success('Update successfully'));
    window.location.reload();
  };

  const cancel = () => {
    message.error('Canceled');
  };

  return (
    <Popconfirm
      title={`Are you sure to ${action} this task?`}
      onConfirm={() => confirm()}
      onCancel={() => cancel()}
    >
      <Button icon={icon} style={{
        backgroundColor: action === 'rejected' ? '#f5222d' : '#a0d911',
        color: 'white',
      }}>
        {action}
      </Button>
    </Popconfirm>
  )
};

export default Confirm;
