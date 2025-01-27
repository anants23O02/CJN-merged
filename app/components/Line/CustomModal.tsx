"use client";

import React from "react";
import { Modal, Button } from "antd";

interface CustomModalProps {
  visible: boolean;
  handleClose: () => void; 
  children: React.ReactNode;
  rightbutton: () => void; 
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, handleClose, children, rightbutton }) => {
  const rightbuttonhandler = () => {
    rightbutton();
    console.log('closing');
    handleClose();     
    console.log('closed');
  };

  return (
    <Modal
      title="Custom Modal"
      open={visible}
      onCancel={handleClose} 
      footer={[
        <Button key="close" onClick={handleClose}>
          Close
        </Button>,
        <Button key="action" type="primary" onClick={rightbuttonhandler}>
          Confirm 
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
