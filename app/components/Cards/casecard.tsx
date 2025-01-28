'use client';

import React from 'react';
import { Card, Row, Col, Space, Typography, Checkbox, Dropdown, Menu } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

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
    <Row gutter={[12, 12]} justify="space-between" align="top">
      {/* Card 1 */}
      <Col xs={16} sm={12}>
        <Card
          bordered
          style={{
            borderColor: '#d9d9d9',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '16px',
          }}
        >
          {/* Header Row for Card 1 */}
          <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
            <Space size="large">
              <Col>
                <Text strong style={{color: 'rgb(122, 145, 161)'}}>First</Text> <br />
                <Text strong>{data.firstName}</Text>
              </Col>
              <Col>
                <Text strong style={{color: 'rgb(122, 145, 161)'}}>Middle</Text> <br />
                <Text strong>{data.middleName}</Text>
              </Col>
              <Col>
                <Text strong style={{color: 'rgb(122, 145, 161)'}}>Last</Text> <br />
                <Text strong>{data.lastName}</Text>
              </Col>
              <Col>
                <Text strong style={{color: 'rgb(122, 145, 161)'}}>Suffix</Text> <br />
                <Text strong>{data.suffix || '---'}</Text>
              </Col>
              <Col>
                <Text strong style={{color: 'rgb(122, 145, 161)'}}>DOB</Text> <br />
                <Text strong>{data.dob}</Text>
              </Col>
              <Col>
                <Text strong style={{color: 'rgb(122, 145, 161)'}}>Cases</Text> <br />
                <Text strong>2</Text>
              </Col>
            </Space>
            <Space size="middle">
              <UserAddOutlined style={{ fontSize: '16px', cursor: 'pointer' }} />
              <Checkbox />
              <Dropdown overlay={menu} placement="bottomRight" arrow>
              <a
  onClick={(e) => e.preventDefault()}
  style={{
    display: 'inline-block',
    color: 'black',
    textDecoration: 'none',
  }}
>
  <i
    className="arrow-down"
    style={{
      display: 'inline-block',
      transform: 'rotate(45deg)',
      border: 'solid black',
      borderWidth: '0 2px 2px 0',
      padding: '4px',
      marginLeft: '4px',
    }}
  ></i>
</a>

              </Dropdown>
            </Space>
          </Row>

          {/* Content Section for Card 1 */}
          <div
            style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '6px',
              padding: '12px',
            }}
          >
            {/* Add content here */}
          </div>
        </Card>
      </Col>

      {/* Card 2 */}
      
    </Row>
  );
};

export default CaseCard;
