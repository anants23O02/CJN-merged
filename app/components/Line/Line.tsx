"use client";

import React, { useState } from "react";
import { Button, Divider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CustomModal from "./CustomModal"; // Import the new modal component

const VerticalLineWithDrawer: React.FC<{ rightbutton: () => void }> = ({ rightbutton }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handler for opening the modal
  const handleModalOpen = () => {
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
          onClick={handleModalOpen}
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
        />
      </div>


      <CustomModal
        visible={isModalVisible}
        handleClose={handleModalClose} 
        rightbutton={rightbutton}
      >
        <p>Confirm merging these records</p>
      </CustomModal>
    </div>
  );
};

export default VerticalLineWithDrawer;
