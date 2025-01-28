'use client';

import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './MasterTable.css'; // Assuming you will create an external CSS file

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
  sex: string; // Added sex field
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
    sex: 'Male', // Added sex value
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
    sex: 'Male', // Added sex value
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
    sex: 'Male', // Added sex value
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
    sex: 'Male', // Added sex value
    city: 'St. Paul',
    state: 'MN',
    id: 4,
  },
];

const columns: ColumnsType<DataType> = [
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
  { className:"address",
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Sex', // Added column for Sex
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
    />
  );
};

export default MasterTable;
