"use client";

import React from "react";
import { Modal, Button } from "antd";

interface CustomModalProps {
  visible: boolean;
  handleClose: () => void; 
  children: React.ReactNode;
  rightbutton: () => void; 
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, value,handleClose, children, rightbutton,leftbutton }) => {
  const buttonhandler = () => {
    if(value === 'Right') {
      rightbutton();
      console.log('closing');
      handleClose();     
    }
    else if(value === 'Left') {
      leftbutton();
      handleClose();
      console.log('closed');

    }
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
        <Button key="action" type="primary" onClick={buttonhandler}>
          Confirm 
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
