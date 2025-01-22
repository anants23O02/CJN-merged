import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    First:string,
    Middle:string,
    Last:string,
    Suffix:string,
    DOB:number,
    Cases:number,
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'First',
    dataIndex: 'First',
    key: 'First',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Middle',
    dataIndex: 'Middle',
    key: 'Middle'
  },
  {
    title: 'Last',
    dataIndex: 'Last',
    key: 'Last',
  },
  {
    title: 'Suffix',
    key: 'Suffix',
    dataIndex: 'Suffix',
  },
  {
    title: 'DOB',
    key: 'DOB',
   
  },
  {
    title: 'Cases',
    key: 'Cases',
   
  },
];

const data: DataType[] = [
  {
    First:'Tilothy',
    Middle:'James',
    Last:'Taylor',
    Suffix:'---',
    DOB:1232,
    Cases:2


  },
]

const Table3: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default Table3;