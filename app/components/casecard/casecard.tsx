'use client';

import React from 'react';
import { Card, Row, Col, Space, Typography, Checkbox, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CaseRow from '../rows/Rows';

const { Text } = Typography;

const data = {
  caseNumber: '25-000123',
  date: '01/07/2025',
  firstName: 'Timothy',
  middleName: 'James',
  lastName: 'Taylor',
  suffix: null,
  dob: '12/13/1989',
  sex: 'M',
  race: 'W',
  height: "5'11\"",
  weight: '160',
  id: 'DL12345678910',
  phoneNumber: '123-456-7890',
  address: '1234 August Ave St. Paul MN 55104',
};

const CaseCard: React.FC = () => {
  const menu = (
    <Menu
      items={[
        { label: 'Option 1', key: '1' },
        { label: 'Option 2', key: '2' },
      ]}
    />
  );

  return (
    <Row
      align="top"
      style={{
        margin: 0, // No extra margins on the Row
        padding: 0, // No extra padding on the Row
        width: '100%', // Full width of parent container
        display: 'flex', // Flex layout for flexibility
      }}
    >
      {/* CaseCard Column taking 50% width */}
      <Col
        style={{
          flex: 1, // Flexbox behavior to occupy 50% space
          width: '50%', // Explicitly set width to 50%
          padding: 0, // Remove padding
          margin: 0, // Remove margin
        }}
      >
        <Card
          bordered
          style={{
            borderColor: '#d9d9d9',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
          }}
        >
          {/* Header Row for Card */}
          <Row justify="end" align="middle" style={{ marginBottom: '16px' }}>
            <Space size="large">
              <Col>
                <Text strong>First:</Text> <br />
                <Text>{data.firstName}</Text>
              </Col>
              <Col>
                <Text strong>Middle:</Text> <br />
                <Text>{data.middleName}</Text>
              </Col>
              <Col>
                <Text strong>Last:</Text> <br />
                <Text>{data.lastName}</Text>
              </Col>
              <Col>
                <Text strong>Suffix:</Text> <br />
                <Text>{data.suffix || '---'}</Text>
              </Col>
              <Col>
                <Text strong>DOB:</Text> <br />
                <Text>{data.dob}</Text>
              </Col>
              <Col>
                <Text strong>Cases:</Text> <br />
                <Text>2</Text>
              </Col>

              <UserOutlined style={{ fontSize: '16px', cursor: 'pointer' }} />
              <Checkbox />
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <a onClick={(e) => e.preventDefault()}>⋮</a>
              </Dropdown>
            </Space>
          </Row>
          {/* Add content here */}
          <CaseRow {...data}></CaseRow>
        </Card>
      </Col>
    </Row>
  );
};

export default CaseCard;
