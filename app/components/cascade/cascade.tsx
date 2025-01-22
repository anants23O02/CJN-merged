"use client"
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
import { SearchOutlined, CoffeeOutlined, AppleOutlined } from '@ant-design/icons';

// Define the Option type
interface Option {
  value: string | number;
  label: string;
  children?: Option[];
  disableCheckbox?: boolean;
  icon?: React.ReactNode; // Icon property for each option
}

// Sample options with icons
const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    icon: <SearchOutlined style={{ color: 'red', fontSize: '20px' }}/>, // Custom icon for this option
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    icon: <CoffeeOutlined />, // Custom icon for this option
    children: [
      {
        label: 'Little',
        value: 'little',
        icon: <AppleOutlined />, // Custom icon for the child option
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
            icon: <SearchOutlined />, // Icon for this option
          },
          {
            label: 'Toy Cards',
            value: 'cards',
            icon: <AppleOutlined />, // Icon for this option
          },
          {
            label: 'Toy Bird',
            value: 'bird',
            icon: <CoffeeOutlined />, // Icon for this option
          },
        ],
      },
    ],
  },
];

// Custom Cascader Component
const Cascade: React.FC = () => (
  <Cascader
    style={{ width: '60%' }}
    options={options}
    expandIcon={<SearchOutlined />} // Custom expand icon
    multiple
    maxTagCount="responsive"
    fieldNames={{ label: 'label', value: 'value', children: 'children' }}
    // Using render prop to customize how options are displayed
    displayRender={(labels) => labels.join(' > ')}
    // Optionally, you can display icons next to the options here
    onChange={(value) => console.log(value)}
  />
);

export default Cascade;
