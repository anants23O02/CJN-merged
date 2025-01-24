"use client";

import React from "react";
import { Modal, Button } from "antd";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, onClose, children,rightbutton }) => {
    function rightbuttonhandler() {
        rightbutton();
        onClose();
        
    }
  return (
    <Modal
      title="Custom Modal"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
        <Button key="action" type="primary" onClick={rightbuttonhandler}>
          Confirm Action
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
