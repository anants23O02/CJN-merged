"use client";

import React, { useState } from "react";
import { Button, Divider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CustomModal from "./CustomModal"; // Import the new modal component

const VerticalLineWithDrawer: React.FC<{ rightbutton: () => void }> = ({ rightbutton,leftbutton }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [button,setButton] = useState('');
  // Handler for opening the modal
  const handleModalOpen = (value) => {
    setButton(value);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>

      <div style={{ position: "relative", height: "100%", width: "2px", background: "transparent" }}>
        <Divider
          type="vertical"
          style={{
            height: "100%",
            borderLeft: "2px dashed black",
            margin: 0,
          }}
        />


        <Button
          type="primary"
          icon={<LeftOutlined />}
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            border: "none",
            borderRadius: "20px",
            height: "40px",
            width: "20px",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
          onClick={() => handleModalOpen('Right') }
        />

        <Button
          type="primary"
          icon={<RightOutlined />}
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            border: "none",
            borderRadius: "20px",
            height: "40px",
            width: "20px",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
          onClick={() => handleModalOpen('Left')}
        />
      </div>


      <CustomModal
        visible={isModalVisible}
        handleClose={handleModalClose} 
        value = {button}
        rightbutton={rightbutton}
        leftbutton = {leftbutton}
      >
        <p>Confirm merging these records</p>
      </CustomModal>
    </div>
  );
};

export default VerticalLineWithDrawer;
