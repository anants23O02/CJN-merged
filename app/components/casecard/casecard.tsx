'use client';
import {useEffect} from 'react';
import React from 'react';
import { Card, Row, Col, Space, Typography, Checkbox, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import  './casecard.module.css';
import {CaseCardProps} from './CaseCard.types'
const { Text } = Typography;


const CaseCard: React.FC<CaseCardProps> = ({ value, data, children, actions,type }) => {

  useEffect(() => {
    const cardBody = document.querySelector('.ant-card-body');
    if (cardBody) {
      cardBody.setAttribute('style', 'padding: 0 !important');
    }
  }, []);

  const backgroundColor =
  value === "" ? "" : 
  Number(value) >= 75 ? "#b1ffc6" : 
  Number(value) >= 50 ? "#fefcb4" : 
  Number(value) >= 25 ? "#ffdabb" : 
  "#ffbab9";

  return (
    <Row
    align="top"
    style={{
      margin: "0",
      padding: "0",
      width: "100%",
      display: "flex",
      overflow:'visible'
    }}
  >
    <Col
      style={{
        flex: 1,
        width: "50%",
        padding: "0",
        margin: "0",
        overflow:'visible'
      }}
    >
      <Card
        bordered
        style={{
          borderColor: "#727677",
          borderWidth: "1px", // Explicitly set border width
          borderStyle: "solid", // Ensure the border style is solid
          borderRadius: "20px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "16px",
          overflow: "hidden",
        }}
        bodyStyle={{
          padding: "0px", // Ensure no padding inside the Card
        }}
      >
        <Row
  justify="space-between" 
  align="middle"
  style={{
    padding: '24px',
    backgroundColor: '#f0f4fc',
    
  }}
>
  <Col>
    <Text
      style={{
        fontSize: "20px",
        marginRight: "15px",
        padding: "10px",
        background: backgroundColor,
      }}
    >
      {value}
    </Text>
  </Col>
  <Col>
    <Text style={{ color: "#556d7a" }} strong>
      First:
    </Text>{" "}
    <br />
    <Text>{data.firstName}</Text>
  </Col>
  <Col>
    <Text style={{ color: "#556d7a" }} strong>
      Middle:
    </Text>{" "}
    <br />
    <Text>{data.middleName ? data.middleName : '---'}</Text>
  </Col>
  <Col>
    <Text style={{ color: "#556d7a" }} strong>
      Last:
    </Text>{" "}
    <br />
    <Text>{data.lastName}</Text>
  </Col>
  <Col>
    <Text style={{ color: "#556d7a" }} strong>
      Suffix:
    </Text>{" "}
    <br />
    <Text>{data.suffix || "---"}</Text>
  </Col>
  <Col>
    <Text style={{ color: "#556d7a" }} strong>
      DOB:
    </Text>{" "}
    <br />
    <Text>{data.dob}</Text>
  </Col>
  <Col>
    <UserOutlined style={{ fontSize: "16px", cursor: "pointer" }} onClick={primaryrecorddisturebed}/>
  </Col>
  <Col>
    <Checkbox />
  </Col>
</Row>

    
        <div
          style={{
            maxHeight: "585px", 
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      </Card>
    </Col>
  </Row>
  
  );
};

export default CaseCard;
