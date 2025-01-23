"use client"
import React from 'react';
import { Table, Checkbox } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './MasterTable2.css';

interface DataType {
  key: string;
  lastName: string;
  firstName: string;
  middleName: string | null;
  suffix: string | null;
  dob: string;
  age: number;
  address: string;
  phoneNumber: string;
  sex: string;
  city: string;
  state: string;
  id: number;
}

const data: DataType[] = [
  {
    key: '1',
    lastName: 'Taylor',
    firstName: 'Timothy',
    middleName: 'James',
    suffix: null,
    dob: '12/13/1989',
    age: 35,
    address: '1234 August Ave',
    phoneNumber: '555-1234',
    sex: 'Male',
    city: 'St. Paul',
    state: 'MN',
    id: 1,
  },
  {
    key: '2',
    lastName: 'Taylor',
    firstName: 'Timothy',
    middleName: null,
    suffix: null,
    dob: '12/13/1989',
    age: 35,
    address: '1234 August Ave',
    phoneNumber: '555-5678',
    sex: 'Male',
    city: 'St. Paul',
    state: 'MN',
    id: 2,
  },
  {
    key: '3',
    lastName: 'Taylor',
    firstName: 'Timothy',
    middleName: 'Drew',
    suffix: null,
    dob: '10/05/1987',
    age: 37,
    address: '1234 First Street',
    phoneNumber: '555-8765',
    sex: 'Male',
    city: 'St. Paul',
    state: 'MN',
    id: 3,
  },
  {
    key: '4',
    lastName: 'Taylor',
    firstName: 'Timothy',
    middleName: 'Drew',
    suffix: null,
    dob: '10/05/1987',
    age: 37,
    address: '1234 First Street',
    phoneNumber: '555-4321',
    sex: 'Male',
    city: 'St. Paul',
    state: 'MN',
    id: 4,
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: '',
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: (_, record) => <Checkbox />, // Render a checkbox in the first column
    width: 40, // Adjust width for the checkbox column
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Middle Name',
    dataIndex: 'middleName',
    key: 'middleName',
    render: (middleName) => (middleName ? middleName : '---'),
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Suffix',
    dataIndex: 'suffix',
    key: 'suffix',
    render: (suffix) => (suffix ? suffix : '---'),
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
    key: 'dob',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    className: 'address',
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
];

const MasterTable: React.FC = () => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 4 }}
      bordered
      className="small-table" // Class to apply custom styles
      scroll={{ x: "max-content" }}
    />
  );
};

export default MasterTable;
