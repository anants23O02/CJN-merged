"use client";
import { Button } from "antd";

interface MainButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  icon?: React.ReactNode;
  
}

const MainButton: React.FC<MainButtonProps> = ({ children, handleClick,icon }) => {
  function handler (){
    handleClick();
  };

  return (
    <Button
      type="primary"
      htmlType="submit"
      style={{ width: "100px", padding:"6px", alignContent:"center",alignItems:"center" }}
      onClick={handler}
      icon={icon}
      
    >
      {children}
    </Button>
  );
};

export default MainButton;
