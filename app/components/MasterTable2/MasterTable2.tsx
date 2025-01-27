"use client";
import React, { useState, useEffect } from "react";
import { Table, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./MasterTable2.css";
import caseData from "../DummyData/caseData2";

interface DataType {
  key: string;
  Fkey: number;
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

interface MasterTableProps {
  filters: { key: keyof DataType; value: string }[];
}

const MasterTable: React.FC<MasterTableProps> = ({ filters }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<DataType[]>([]);

  useEffect(() => {
    const data = {
      secondaryRecord: selectedRows, // Store selected rows as an array
      comparableRecord: selectedRows.length ? [selectedRows] : [], // Group selected rows into a nested array
    };
    sessionStorage.setItem("record", JSON.stringify(data));
  }, [selectedRows]);

  const handleCheckboxChange = (checked: boolean, record: DataType) => {
    if (checked) {
      // Add the record to the selected arrays
      setSelectedKeys((prevKeys) => [...prevKeys, record.key]);
      setSelectedRows((prevRows) => [...prevRows, record]);
    } else {
      // Remove the record from the selected arrays
      setSelectedKeys((prevKeys) => prevKeys.filter((key) => key !== record.key));
      setSelectedRows((prevRows) =>
        prevRows.filter((row) => row.key !== record.key)
      );
    }
  };

  const filteredData = caseData.filter((record) => {
    return filters.every((filter) => {
      const { key, value } = filter;
      return record[key]?.toString().toLowerCase().includes(value.toLowerCase());
    });
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: (_, record) => (
        <Checkbox
          checked={selectedKeys.includes(record.key)}
          onChange={(e) => handleCheckboxChange(e.target.checked, record)}
        />
      ),
      width: 40,
      className: "checkbox-column",
    },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    {
      title: "Middle Name",
      dataIndex: "middleName",
      key: "middleName",
      render: (middleName) => (middleName ? middleName : "---"),
    },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    {
      title: "Suffix",
      dataIndex: "suffix",
      key: "suffix",
      render: (suffix) => (suffix ? suffix : "---"),
    },
    { title: "DOB", dataIndex: "dob", key: "dob" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      className: "address",
    },
    { title: "Sex", dataIndex: "sex", key: "sex" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "State", dataIndex: "state", key: "state" },
    { title: "ID", dataIndex: "id", key: "id" },
  ];

  return (
    <Table
      dataSource={filteredData}
      columns={columns}
      rowClassName={(record) =>
        selectedKeys.includes(record.key) ? "selected-row" : ""
      }
      pagination={{ pageSize: 4 }}
      bordered
      className="small-table"
      scroll={{ x: "max-content" }}
      rowKey="key"
    />
  );
};

export default MasterTable;
