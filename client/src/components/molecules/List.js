import 'antd/dist/antd.css';
import moment from 'moment';
import { Table, Tag, Space, Spin } from 'antd';
// These icons are used for status of booking
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import Confirm from '../atoms/Confirm';

const List = ({ data, loading }) => {
  const role = localStorage.getItem('role');
  // Columns of booking list
  const columns = [
    {
      title: 'Type of event',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Location of event',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Date',
      dataIndex: 'datetime',
      key: 'datetime',
      render: datetime => (
        <ul>
          {datetime.map(date => (
            <li>
              {moment(date).format('MM/DD/YYYY hh:mm:ss')}
            </li>
          ))}
        </ul>
      )
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      hidden: role === 'false',
      key: 'reason',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: status => {
        let color = '', icon = null;
        if (status === 'approved') {
          color = 'green';
          icon = <CheckCircleOutlined />;
        }
        else if (status === 'pending') {
          color = 'geekblue';
          icon = <SyncOutlined spin />;
        } else {
          color = 'volcano';
          icon = <CloseCircleOutlined />;
        }
        return (
          <>
            <Tag icon={icon} color={color}>
              {status.toUpperCase()}
            </Tag>
          </>
        )
      }
    },
    {
      title: 'Action',
      key: 'action',
      hidden: role === 'false',
      render: record => (
        <Space size="middle">
          {
            record.status === 'pending' ? (
              <>
                <Confirm action='approved' data={record} />
                <Confirm action='rejected' data={record} />
              </>
            ) : <Tag>DONE</Tag>
          }
        </Space>
      ),
    },
  ].filter(column => !column.hidden); // filter action column which is hidden

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={{ indicator: <Spin />, spinning: loading }} />
  )
}

export default List;
