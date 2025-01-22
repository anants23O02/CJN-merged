'use client';

import React, { useState } from 'react';
import { Modal, Button, Checkbox, Row, Col } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const FilterPopup: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    'Last Name',
    'First Name',
    'Middle Name',
    'DOB',
    'ID',
  ]);

  const filterOptions = [
    'Last Name',
    'First Name',
    'Middle Name',
    'Suffix',
    'DOB',
    'Sex',
    'Race',
    'Height',
    'Weight',
    'ID',
    'Phone Number',
    'Address',
  ];

  const handleOk = () => {
    setIsModalVisible(false);
    console.log('Selected Filters:', selectedFilters);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCheckboxChange = (filter: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters((prev) => [...prev, filter]);
    } else {
      setSelectedFilters((prev) => prev.filter((item) => item !== filter));
    }
  };

  return (
    <div style={{background:"white"}}>
      <Button
        type="default"
        onClick={() => setIsModalVisible(true)}>
        #
      </Button>
        {selectedFilters.map((filter) => (
          <span
            key={filter}
            style={{
              display: 'inline-block',
              padding: '5px 10px',
              margin: '5px',
              background: 'rgb(221, 220, 220)',
              cursor: 'pointer',
              fontSize:'12px'
            }}
            onClick={() =>
              setSelectedFilters((prev) => prev.filter((item) => item !== filter))
            }
          >
            {filter} ✖
          </span>
        ))}
      
      <Modal
        title="Manage Filters"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <Row gutter={[16, 16]}>
          {filterOptions.map((filter) => (
            <Col span={8} key={filter}>
              <Checkbox
                checked={selectedFilters.includes(filter)}
                onChange={(e) =>
                  handleCheckboxChange(filter, e.target.checked)
                }
              >
                {filter}
              </Checkbox>
            </Col>
          ))}
        </Row>
        <div style={{ marginTop: '20px' }}>
          <Checkbox>Sounds like Search</Checkbox>
        </div>
      </Modal>
    </div>
  );
};

export default FilterPopup;
