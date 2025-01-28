"use client";

import React, { useEffect, useState } from "react";
import { Button, Divider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CustomModal from "./CustomModal";
import { VerticalLineProps } from "./VerticalLineProps.types";

const VerticalLineWithDrawer: React.FC<VerticalLineProps> = ({
  rightbutton,
  leftbutton,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [button, setButton] = useState("");

  const handleModalOpen = (value: string) => {
    console.log('value', value);
    setButton(value);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (rightbutton) {
      // rightbutton();
    }
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "2px",
          background: "transparent",
        }}
      >
        <Divider
          type="vertical"
          style={{
            height: "100%",
            borderLeft: "1px dashed black",
            margin: 0,
          }}
        />

        <Button
          type="primary"
          icon={<LeftOutlined style={{fontSize:"10px"}}/>}
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            border: "none",
            borderRadius: "20px",
            height: "40px",
            width: "10px",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
          onClick={() => handleModalOpen("Right")}
        />

        <Button
          type="primary"
          icon={<RightOutlined  style={{fontSize:"10px"}}/>}
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            border: "none",
            borderRadius: "20px",
            height: "40px",
            width: "10px",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
          onClick={() => handleModalOpen("Left")}
        />
      </div>

      {rightbutton && leftbutton && (
        <CustomModal
          visible={isModalVisible}
          handleClose={handleModalClose}
          value={button}
          rightbutton={rightbutton}
          leftbutton={leftbutton}
        >
          <p>Confirm merging these records</p>
        </CustomModal>
      )}
    </div>
  );
};

export default VerticalLineWithDrawer;
