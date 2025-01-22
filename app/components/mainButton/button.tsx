"use client";
import { Button } from "antd";

interface MainButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({ children, handleClick }) => {
  function handler (){
    handleClick();
  };

  return (
    <Button
      type="primary"
      htmlType="submit"
      style={{ width: "100%" }}
      onClick={handler}
    >
      {children}
    </Button>
  );
};

export default MainButton;
