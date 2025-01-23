'use client';

import React from 'react';
import { Card, Row, Col, Space, Typography, Checkbox, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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

const CaseCard: React.FC = ({children}) => {
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
        margin: 0, 
        padding: 0, 
        width: '100%', 
        display: 'flex', 
      }}
    >
      {/* CaseCard Column taking 50% width */}
      <Col
        style={{
          flex: 1, 
          width: '50%', 
          padding: 0, 
          margin: 0, 
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
          <Row justify="end" align="middle" style={{ marginBottom: '16px', }}>
            <Space size="large">
              <Col>
                <Text style={{color:"#556d7a"}} strong>First:</Text> <br />
                <Text>{data.firstName}</Text>
              </Col>
              <Col>
                <Text style={{color:"#556d7a"}} strong>Middle:</Text> <br />
                <Text>{data.middleName}</Text>
              </Col>
              <Col>
                <Text style={{color:"#556d7a"}} strong>Last:</Text> <br />
                <Text>{data.lastName}</Text>
              </Col>
              <Col>
                <Text style={{color:"#556d7a"}} strong>Suffix:</Text> <br />
                <Text>{data.suffix || '---'}</Text>
              </Col>
              <Col>
                <Text style={{color:"#556d7a"}} strong>DOB:</Text> <br />
                <Text>{data.dob}</Text>
              </Col>
              <Col>
                <Text style={{color:"#556d7a"}} strong>Cases:</Text> <br />
                <Text>2</Text>
              </Col>

              <UserOutlined style={{ fontSize: '16px', cursor: 'pointer' }} />
              <Checkbox />
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <a onClick={(e) => e.preventDefault()}>⋮</a>
              </Dropdown>
            </Space>
          </Row>
      {children}

        </Card>
      </Col>
    </Row>
  );
};

export default CaseCard;