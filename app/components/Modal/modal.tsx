'use client';

import React, { useState } from 'react';
import { Modal, Button, Checkbox, Row, Col } from 'antd';
import { SettingOutlined ,SlidersOutlined} from '@ant-design/icons';

const FilterPopup: React.FC = ({handlefilters}) => {
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
    handlefilters(selectedFilters);
  };

  return (
    <div className='popup' style={{backgroundColor:"#fff",width:"50%",}}>
      <SlidersOutlined  onClick={() => setIsModalVisible(true)} style={{margin:"5px"}}/>
        {selectedFilters.map((filter) => (
          <span
            key={filter}
            style={{
              display: 'inline-block',
              padding: '5px 10px',
              margin: '5px',
              background: '#f0f0f0',
              borderRadius: '15px',
              cursor: 'pointer',
              fontSize:'12px'
            }}
            onClick={() =>
            {
              // create a new function for onclick then call setselectedfilters after that handlefilters
              handlefilters(selectedFilters);
              setSelectedFilters((prev) => prev.filter((item) => item !== filter));
            }
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
