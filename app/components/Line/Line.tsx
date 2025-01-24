"use client";

import React, { useState } from "react";
import { Drawer, Button, Divider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const VerticalLineWithDrawer: React.FC = ({rightbutton}) => {
  const [visible, setVisible] = useState(false);
  function rightbuttonhandler() {
    rightbutton();
  }
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
        {/* Drawer Button */}
        <Button
          type="primary"
          icon={<LeftOutlined />}
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            border:"none",
            borderRadius:"20px",
            height:"40px",
            width:"20px",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
          onClick ={rightbuttonhandler}
        />
         <Button
          type="primary"
          icon={<RightOutlined/>}
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            border:"none",
            borderRadius:"20px",
            height:"40px",
            width:"20px",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
         
        />
      </div>

      
    </div>
  );
};

export default VerticalLineWithDrawer;
