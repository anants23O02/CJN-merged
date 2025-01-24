"use client";

import React, { useState } from "react";
import { Button, Divider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CustomModal from "./CustomModal"; // Import the new modal component

const VerticalLineWithDrawer: React.FC = ({rightbutton}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handler for opening the modal
  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  // Handler for closing the modal (passed as a prop to CustomModal)
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      {/* Vertical dashed line */}
      <div style={{ position: "relative", height: "100%", width: "2px", background: "transparent" }}>
        <Divider
          type="vertical"
          style={{
            height: "100%",
            borderLeft: "2px dashed black",
            margin: 0,
          }}
        />

        {/* Left Button to Open Modal */}
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
          onClick={handleModalOpen} // Open modal on button click
        />

        {/* Right Button (optional, with no functionality in this example) */}
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

      {/* Render the modal */}
      <CustomModal visible={isModalVisible} onClose={handleModalClose} rightbutton={rightbutton}>
        <p>Confirrm merging these records</p>
      </CustomModal>
    </div>
  );
};

export default VerticalLineWithDrawer;
