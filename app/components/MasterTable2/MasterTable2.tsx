"use client";
import React, { useState, useEffect } from "react";
import { Table, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./MasterTable2.css";
import caseData from "../DummyData/caseData2";
import Card from "antd/es/card/Card";

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
  filters?: { key: keyof DataType; value: string }[];
}

const MasterTable: React.FC<MasterTableProps> = ({ filters }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [selectedRows, setSelectedRows] = useState<DataType[]>([]);

  useEffect(() => {
    const data = {
      secondaryRecord: selectedRows, 
      comparableRecord: selectedRows.length ? [selectedRows] : [], 
    };
    sessionStorage.setItem("record", JSON.stringify(data));
  }, [selectedRows]);

  const handleCheckboxChange = (checked: boolean, record: DataType) => {
    if (checked) {
      
      setSelectedKeys((prevKeys) => [...prevKeys, record.key]);
      setSelectedRows((prevRows) => [...prevRows, record]);
    } else {
      
      setSelectedKeys((prevKeys) => prevKeys.filter((key) => key !== record.key));
      setSelectedRows((prevRows) =>
        prevRows.filter((row) => row.key !== record.key)
      );
    }
  };

  const filteredData = caseData.filter((record:any) => {
    return filters?.every((filter) => {
      const { key, value } = filter;
      return record[key]?.toString().toLowerCase().includes(value.toLowerCase());
    });
  });

  const columns: any = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: (_:any, record:any) => (
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
      render: (middleName:any) => (middleName ? middleName : "---"),
    },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    {
      title: "Suffix",
      dataIndex: "suffix",
      key: "suffix",
      render: (suffix:any) => (suffix ? suffix : "---"),
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
    <Card
    bordered
    style={{
      borderColor: "#727677",
      borderWidth: "1px", // Explicitly set border width
      borderStyle: "solid", // Ensure the border style is solid
      borderRadius: "20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      marginBottom: "6px",
      overflow: "hidden",
    }}
    bodyStyle={{
      padding: "0px", // Ensure no padding inside the Card
    }}>
      <Table
      dataSource={filteredData}
      columns={columns}
      rowClassName={(record) =>
        selectedKeys.includes(record.key) ? "selected-row" : ""
      }
      pagination={{ pageSize: 6 }}
      bordered
      className="small-table"
      scroll={{ x: "max-content" }}
      rowKey="key"
    />
    </Card>
    
  );
};

export default MasterTable;
