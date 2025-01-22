"use client";

import React, { useState } from "react";
import { Table, Button, Select } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./Button.module.css";
import { useRouter } from "next/navigation";

const { Option } = Select;

interface DataType {
  key: string;
  lastName: string;
  firstName: string;
  middleName: string | null;
  suffix: string | null;
  dob: string;
  age: number;
  address: string;
  city: string;
  state: string;
  rowColor?: string;
}

const initialData: DataType[] = [
  {
    key: "1",
    lastName: "Taylor",
    firstName: "Timothy",
    middleName: "James",
    suffix: null,
    dob: "12/13/1989",
    age: 35,
    address: "1234 August Ave",
    city: "St. Paul",
    state: "MN",
    rowColor: "",
  },
  {
    key: "2",
    lastName: "Taylor 1",
    firstName: "Timothy 1",
    middleName: null,
    suffix: null,
    dob: "12/13/1990",
    age: 35,
    address: "1234 August Ave",
    city: "St. Paul",
    state: "MN",
    rowColor: "",
  },
  {
    key: "3",
    lastName: "Taylor 2",
    firstName: "Timothy 2",
    middleName: "Drew",
    suffix: null,
    dob: "10/05/1987",
    age: 37,
    address: "1234 First Street",
    city: "St. Paul",
    state: "MN",
    rowColor: "",
  },
  {
    key: "4",
    lastName: "Taylor 3",
    firstName: "Timothy 3",
    middleName: "Drew",
    suffix: null,
    dob: "10/05/1987",
    age: 37,
    address: "1234 First Street",
    city: "St. Paul",
    state: "MN",
    rowColor: "",
  },
];

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
  const [ComparableRecord,setComparableRecord] = useState();
  const router = useRouter();

  const handleSelectChange = (value: string, record: DataType) => {
    const updatedData = dataSource.map((row) =>
      row.key === record.key
        ? {
            ...row,
            rowColor:
              value === "Secondary"
                ? "secondaryRow"
                : value === "Comparable"
                ? "comparableRow "
                : "",
          }
        : row
    );
    setDataSource(updatedData);
    setButtons(!buttons);
    value === 'Secondary' ? setSecondaryRecord(record) : setComparableRecord(record);
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
    router.push("/pages/MasterViewMerge");
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
        rowClassName={(record) => record.rowColor}
      />
    </div>
  );
};

export default CustomTable;
