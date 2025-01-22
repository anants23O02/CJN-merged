import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';


const Button1: React.FC = () => (
  <Flex gap="small" vertical>
    
    <Flex wrap gap="small">
      
      <Button icon={<CheckCircleOutlined />} style={{backgroundColor:"#4CC9FE", color:"#fff"}}>Select</Button>
      
      
      
    </Flex>
  </Flex>
);

export default Button1;