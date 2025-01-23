"use client";

import mainButton from "../mainButton/button"
import React, { useState } from "react";
import { Table, Button, Select } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./Button.module.css";
import { useRouter } from "next/navigation";
import initialData from '../DummyData/searchResult';
const { Option } = Select;

const initialColumns: ColumnsType<DataType> = [
  {
    title: "Last Name / Business",
    dataIndex: "lastName",
    key: "lastName",
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
  },
  {
    title: "Middle Name",
    dataIndex: "middleName",
    key: "middleName",
    render: (middleName) => (middleName ? middleName : "---"),
  },
  {
    title: "Suffix",
    dataIndex: "suffix",
    key: "suffix",
    render: (suffix) => (suffix ? suffix : "---"),
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "dob",
    sorter: (a, b) => new Date(a.dob).getTime() - new Date(b.dob).getTime(),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
];

const CustomTable: React.FC = () => {
  const [dataSource, setDataSource] = useState(initialData);
  const [buttons, setButtons] = useState(false);
  const [columns, setColumns] = useState(initialColumns);
  const [secondaryRecord,setSecondaryRecord] = useState();
  const [ComparableRecord,setComparableRecord] = useState([]);
  const router = useRouter();

  const handleSelectChange = (value: string, record: DataType) => {
    console.log('handleselectcalled :>> ');
    const updatedData = dataSource.map((row) =>
      row.key === record.key
        ? {
          ...row, 
          recordValue:
            value === "Secondary"
              ? "secondaryRow"
              : value === "Comparable"
              ? "comparableRow"
              : ""
          }
        : row
    );
    console.log('dataSource :>> ', updatedData);
    value === 'Secondary' ? setSecondaryRecord(record.key) : setComparableRecord((prevrecord) => [...prevrecord,record.key]);
    setDataSource(updatedData);
    setButtons(!buttons);
  };

  const handleCancelTableEdit = () => {
    setColumns(initialColumns);
    setButtons(!buttons);
  };

  const handleTableEdit = () => {
    const columnExists = columns.some((col) => col.key === "select"); //check if dropdown exist or not
    if (!columnExists) {
      setColumns([
        {
          title: "Select",
          key: "select",
          render: (_, record) => (
            <Select
              style={{ width: 120 }}
              placeholder="Select"
              onChange={(value) => handleSelectChange(value, record)}
            >
              <Option value="Secondary">Secondary</Option>
              <Option value="Comparable">Comparable</Option>
              <Option value="None">---</Option>
            </Select>
          ),
        },
        ...columns,
      ]);
    }
  };

  const handleViewMerge = () => {
    
    router.push({pathname:"/MasterViewMerge",query:{secondary:secondaryRecord,comparable:ComparableRecord}});
  };

  return (
    <div>
      <div className={styles.alignRight}>
        {buttons ? (
          <>
            <Button
              className={styles.mergeButton}
              type="default"
              style={{
                border: "2px solid rgb(226, 50, 50)",
                backgroundColor: "transparent",
                color: "rgb(226, 50, 50)",
                marginRight: "10px",
              }}
              onClick={handleCancelTableEdit}
            >
              Cancel Merge
            </Button>
            <Button
              className={styles.mergeButton}
              type="default"
              style={{
                border: "2px solid #678594",
                backgroundColor: "transparent",
                color: "#678594",
              }}
              onClick={handleViewMerge}
            >
              View Merge
            </Button>
          </>
        ) : (
          <Button
            className={styles.mergeButton}
            type="default"
            style={{
              border: "2px solid #678594",
              backgroundColor: "transparent",
              color: "#678594",
            }}
            onClick={handleTableEdit}
          >
            Merge Names
          </Button>
        )}
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 4 }}
        bordered
        rowClassName={(record) => {
          if(record.recordValue === "secondaryRow") 
            { return "lightblue"};
          if(record.recordValue === "comparableRow") return "lightcyan"
        }}
      />
    </div>
  );
};

export default CustomTable;
