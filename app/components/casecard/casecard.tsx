'use client';
import {useEffect} from 'react';
import React from 'react';
import { Card, Row, Col, Space, Typography, Checkbox, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import  './casecard.module.css';
const { Text } = Typography;


const CaseCard = ({ value, data, children, actions }) => {

  useEffect(() => {
    const cardBody = document.querySelector('.ant-card-body');
    if (cardBody) {
      cardBody.setAttribute('style', 'padding: 0 !important');
    }
  }, []);

  const backgroundColor =
    value >= 75 ? "#b1ffc6" : value >= 50 ? "#fefcb4" : value >= 25 ? "#ffdabb" : value === "" ? "" : "#ffbab9";

  return (
    <Row
    align="top"
    style={{
      margin: "0",
      padding: "0",
      width: "100%",
      display: "flex",
    }}
  >
    <Col
      style={{
        flex: 1,
        width: "50%",
        padding: "0",
        margin: "0",
      }}
    >
      <Card
        bordered
        style={{
          borderColor: "#d9d9d9",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "16px",
        }}
        bodyStyle={{
          padding: "0px", // Ensure no padding inside the Card
        }}
      >
        <Row justify="end" align="middle" style={{ padding:'24px' }}>
          <Space size="middle">
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
              <Text>{data.middleName}</Text>
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
            <UserOutlined style={{ fontSize: "16px", cursor: "pointer" }} />
            <Checkbox />
            <Dropdown overlay={actions} placement="bottomRight" arrow>
              <a onClick={(e) => e.preventDefault()}>⋮</a>
            </Dropdown>
          </Space>
        </Row>
  
        {/* Scrollable Container for Rows */}
        <div
          style={{
            maxHeight: "250px", // Limit the height to allow only 3 rows
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
