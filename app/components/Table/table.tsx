"use client";

import React, { useState } from "react";
import { Table, Button, Select } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./Button.module.css";
import { useRouter } from "next/navigation";
import initialData from "../DummyData/searchResult";
import { DataType } from "./table.types";
import caseData from "../DummyData/caseData";
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
    sorter: (a, b) => (a.middleName || "").localeCompare(b.middleName || ""),
    render: (middleName) => (middleName ? middleName : "---"),
  },
  {
    title: "Suffix",
    dataIndex: "suffix",
    key: "suffix",
    sorter: (a, b) => (a.suffix || "").localeCompare(b.suffix || ""),
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
    sorter: (a, b) => (a.address || "").localeCompare(b.address || ""),
    render: (address) => address || "---",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    sorter: (a, b) => (a.city || "").localeCompare(b.city || ""),
    render: (city) => city || "---",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    sorter: (a, b) => (a.state || "").localeCompare(b.state || ""),
    render: (state) => state || "---",
  },
];

const CustomTable: React.FC = () => {
  const [dataSource, setDataSource] = useState(initialData);
  const [buttons, setButtons] = useState(false);
  const [columns, setColumns] = useState(initialColumns);
  const [secondaryRecord, setSecondaryRecord] = useState<any[]>([]);
  const [comparableRecord, setComparableRecord] = useState<any[]>([]);
  const router = useRouter();

  const handleSelectChange = (value: string, record: DataType) => {
    const updatedData = dataSource.map((row) =>
      row.key === record.key
        ? {
            ...row,
            recordValue:
              value === "Secondary"
                ? "secondaryRow"
                : value === "Comparable"
                ? "comparableRow"
                : "",
          }
        : row
    );

    if (value === "Secondary") {
      let primaryrecordDetails = [record]
      const primarycaserecords = caseData.filter(
        (obj1) =>
          String(obj1.Fkey) === String(record.key)
      );
      primaryrecordDetails = [...primaryrecordDetails, ...primarycaserecords];
      setSecondaryRecord(primaryrecordDetails);
    }

    if (value === "Comparable") {
      const primarycaserecords = caseData.filter(
        (obj1) =>
          String(obj1.Fkey) === String(record.key)
      );
      const primaryrecordDetails = [record, ...primarycaserecords];
      setComparableRecord((prevrecords) => [...prevrecords,primaryrecordDetails]);
    }

    setDataSource(updatedData);
    setButtons(true);
  };

  const handleCancelTableEdit = () => {
    setColumns(initialColumns);
    setButtons(false);
  };

  const handleTableEdit = () => {
    const columnExists = columns.some((col) => col.key === "select");
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
    if (typeof window !== "undefined") {
      const data = {
        secondaryRecord: secondaryRecord,
        comparableRecord: comparableRecord,
      };
      sessionStorage.setItem("record", JSON.stringify(data));
    }
    console.log(secondaryRecord,comparableRecord);
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
        rowClassName={(record) => {
          if (record.recordValue === "secondaryRow") return "lightblue";
          if (record.recordValue === "comparableRow") return "lightcyan";
          return "";
        }}
      />
    </div>
  );
};

export default CustomTable;
