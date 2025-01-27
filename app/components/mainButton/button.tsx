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
      style={{  marginLeft:'3px',padding:"10px 17px", alignContent:"center",alignItems:"center" }}
      onClick={handler}
      icon={icon}  
    >
      {children}
    </Button>
  );
};

export default MainButton;
