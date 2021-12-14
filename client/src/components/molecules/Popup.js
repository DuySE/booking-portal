import { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

const Popup = ({ comp }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const close = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button style={{ float: 'right', marginBottom: '20px' }} type="primary" onClick={showModal}>
        New Booking
      </Button>
      <Modal
        title="New Booking"
        visible={isModalVisible}
        keyboard={true}
        onCancel={close}
        footer={[
          <>
            <Button key="2" type="secondary" onClick={close}>
              Close
            </Button>
          </>
        ]}
      >
        {comp}
      </Modal>
    </>
  );
};

export default Popup;
