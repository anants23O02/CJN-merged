"use client";

import React from "react";
import { Row, Col, Checkbox, Typography, Space } from "antd";

const { Text } = Typography;

interface RowData {
  caseNumber: string;
  date: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string | null;
  dob: string;
  sex: string;
  race: string;
  height: string;
  weight: string;
  id: string;
  phoneNumber: string;
  address: string;
}

const CaseRow: React.FC<RowData> = ({
  caseNumber,
  date,
  firstName,
  middleName,
  lastName,
  suffix,
  dob,
  sex,
  race,
  height,
  weight,
  id,
  phoneNumber,
  address,
}) => {
  return (
    <>
      <div
      style={{
        overflowX: 'auto', // Enable horizontal scrolling
        padding: '8px',
      }}
    >
      <Row justify="start" align="middle" style={{ marginBottom: "8px" }}>
        <Space size="large">
          <Checkbox></Checkbox>
          <Col>
            <Text>Case:</Text>
            <Text>{" " + caseNumber}</Text>
          </Col>
          <Col>
            <Text>Date:</Text>
            <Text>{" " + date} </Text>
          </Col>
        </Space>
      </Row>
      <Row justify="start" align="middle" style={{ marginBottom: "16px",whiteSpace: 'nowrap', // Prevent wrapping
          width: 'max-content', }}>
        <Space size="large">
           <Col>
           <Text>First Name</Text><br />
            <Text>{firstName}</Text>
          </Col>
          <Col>
            <Text>Middle Name</Text><br />
            <Text>{middleName}</Text>
          </Col><Col>
            <Text>Last Name</Text><br />
            <Text>{lastName}</Text>
          </Col>
          <Col>
           <Text>suffix</Text><br />
            <Text>{suffix}</Text>
          </Col>
          <Col>
            <Text>DOB</Text><br />
            <Text>{dob}</Text>
          </Col><Col>
            <Text>Last Name</Text><br />
            <Text>{lastName}</Text>
          </Col>
          <Col>
           <Text>Sex</Text><br />
            <Text>{sex}</Text>
          </Col>
          <Col>
            <Text>Race</Text><br />
            <Text>{race}</Text>
          </Col><Col>
            <Text>Height</Text><br />
            <Text>{height}</Text>
          </Col>
          <Col>
           <Text>ID</Text><br />
            <Text>{id}</Text>
          </Col>
          <Col>
            <Text>Phone No.</Text><br />
            <Text>{phoneNumber}</Text>
          </Col><Col>
            <Text>Address</Text><br />
            <Text>{address}</Text>
          </Col>
        </Space>
      </Row>

      <Row justify="start" align="middle" style={{ marginBottom: "8px" }}>
        <Space size="large">
          <Checkbox></Checkbox>
          <Col>
            <Text>Case:</Text>
            <Text>{" " + caseNumber}</Text>
          </Col>
          <Col>
            <Text>Date:</Text>
            <Text>{" " + date} </Text>
          </Col>
        </Space>
      </Row>
      <Row justify="start" align="middle" style={{ marginBottom: "16px",whiteSpace: 'nowrap', // Prevent wrapping
          width: 'max-content', }}>
        <Space size="large">
           <Col>
           <Text>First Name</Text><br />
            <Text>{firstName}</Text>
          </Col>
          <Col>
            <Text>Middle Name</Text><br />
            <Text>{middleName}</Text>
          </Col><Col>
            <Text>Last Name</Text><br />
            <Text>{lastName}</Text>
          </Col>
          <Col>
           <Text>suffix</Text><br />
            <Text>{suffix}</Text>
          </Col>
          <Col>
            <Text>DOB</Text><br />
            <Text>{dob}</Text>
          </Col><Col>
            <Text>Last Name</Text><br />
            <Text>{lastName}</Text>
          </Col>
          <Col>
           <Text>Sex</Text><br />
            <Text>{sex}</Text>
          </Col>
          <Col>
            <Text>Race</Text><br />
            <Text>{race}</Text>
          </Col><Col>
            <Text>Height</Text><br />
            <Text>{height}</Text>
          </Col>
          <Col>
           <Text>ID</Text><br />
            <Text>{id}</Text>
          </Col>
          <Col>
            <Text>Phone No.</Text><br />
            <Text>{phoneNumber}</Text>
          </Col><Col>
            <Text>Address</Text><br />
            <Text>{address}</Text>
          </Col>
        </Space>
      </Row>
      </div>
    </>
  );
};

export default CaseRow;
