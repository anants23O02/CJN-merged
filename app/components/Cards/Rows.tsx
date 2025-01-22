'use client';

import React from 'react';
import { Row, Col, Checkbox, Typography } from 'antd';

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
    <Row
      gutter={[16, 16]}
      align="middle"
      style={{
        padding: '16px',
        border: '1px solid #e8e8e8',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        marginBottom: '16px',
      }}
    >
      {/* Checkbox */}
      <Col xs={24} sm={1}>
        <Checkbox />
      </Col>

      {/* Case Number and Date */}
      <Col xs={24} sm={3}>
        <Text strong>
          Case: <a href="#">{caseNumber}</a>
        </Text>
        <br />
        <Text>Date: {date}</Text>
      </Col>

      {/* Name Information */}
      <Col xs={24} sm={3}>
        <Text strong>First Name:</Text> <br />
        <Text>{firstName}</Text>
      </Col>
      <Col xs={24} sm={3}>
        <Text strong>Middle Name:</Text> <br />
        <Text>{middleName}</Text>
      </Col>
      <Col xs={24} sm={3}>
        <Text strong>Last Name:</Text> <br />
        <Text>{lastName}</Text>
      </Col>
      <Col xs={24} sm={2}>
        <Text strong>Suffix:</Text> <br />
        <Text>{suffix || '---'}</Text>
      </Col>

      {/* Highlighted DOB */}
      <Col xs={24} sm={2}>
        <Text
          strong
          style={{
            backgroundColor: '#d9f7be',
            padding: '2px 4px',
            borderRadius: '4px',
            display: 'inline-block',
          }}
        >
          DOB:
        </Text>
        <br />
        <Text>{dob}</Text>
      </Col>

      {/* Additional Details */}
      <Col xs={24} sm={1}>
        <Text strong>Sex:</Text> <br />
        <Text>{sex}</Text>
      </Col>
      <Col xs={24} sm={1}>
        <Text strong>Race:</Text> <br />
        <Text>{race}</Text>
      </Col>
      <Col xs={24} sm={2}>
        <Text strong>Height:</Text> <br />
        <Text>{height}</Text>
      </Col>
      <Col xs={24} sm={2}>
        <Text strong>Weight:</Text> <br />
        <Text>{weight}</Text>
      </Col>

      {/* Highlighted ID */}
      <Col xs={24} sm={3}>
        <Text
          strong
          style={{
            backgroundColor: '#d9f7be',
            padding: '2px 4px',
            borderRadius: '4px',
            display: 'inline-block',
          }}
        >
          ID:
        </Text>
        <br />
        <Text>{id}</Text>
      </Col>

      {/* Contact Details */}
      <Col xs={24} sm={3}>
        <Text strong>Phone Number:</Text> <br />
        <Text>{phoneNumber}</Text>
      </Col>
      <Col xs={24} sm={4}>
        <Text strong>Address:</Text> <br />
        <Text>{address}</Text>
      </Col>
    </Row>
  );
};

export default CaseRow;
