"use client";
import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const Button1: React.FC = () => {
  const router = useRouter(); // Use `useRouter` here at the top level of the component

  const handleButtonClick = () => {
    router.push("./MasterViewMerge"); // Navigate to the desired route
  };

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Button
        onClick={handleButtonClick}
        icon={<CheckCircleOutlined />}
        style={{ backgroundColor: "#4CC9FE", color: "#fff" }}
      >
        Select
      </Button>
    </div>
  );
};

export default Button1;
