"use client";
import React, { useState, useEffect,useRef } from "react";
import { Table, Checkbox } from "antd";
import "./MasterTable2.css";
import Card from "antd/es/card/Card";
import initialData from "../DummyData/searchResult";
import caseData from "../DummyData/caseData";

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
  recordValue?: string;
}

interface MasterTableProps {
  filters?: { key: keyof DataType; value: string }[];
  type?: string;
}

const MasterTable: React.FC<MasterTableProps> = ({ filters, type }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]); 
  const [selectedRows, setSelectedRows] = useState<DataType[]>([]); 
  const [primaryRecord,setprimaryRecord] = useState<any[]>([]);
  const [comparableRecord,setcomparableRecord] = useState<any[]>([]);
  const isMounted = useRef(false);
  

  useEffect(() => {
    if (!isMounted.current) {
      
      isMounted.current = true;
      return;
    }
    if(type === 'primary'){
      console.log('object :>> ', );
      const currentData = JSON.parse(sessionStorage.getItem("record") || "{}");
      const data = {
        ...currentData,
        secondaryRecord: primaryRecord,
      };
      sessionStorage.setItem("record", JSON.stringify(data));
    }
    else{
      return;
    }
  },[primaryRecord]);

  useEffect(() => {
    if (!isMounted.current) {
     
      isMounted.current = true;
      return;
    }
    if(type === 'comparable'){
      console.log('called :>> ');
      const currentData = JSON.parse(sessionStorage.getItem("record") || "{}");
      const data = {
        ...currentData,
        comparableRecord: comparableRecord,
      };
      sessionStorage.setItem("record", JSON.stringify(data));
    }
    else{
      return;
    }
},[comparableRecord]);


  const handleCheckboxChange = (checked: boolean, record: DataType) => {
    console.log(type);

    if (type === "primary") {
      
      if (checked) {
        setSelectedKeys([record.key]);
        setSelectedRows([record]);
        let primaryRecordDetails: any = [record];
        const primaryCaseRecords = caseData.filter(
          (obj1) => String(obj1.Fkey) === String(record.key)
        );
        primaryRecordDetails = [...primaryRecordDetails, ...primaryCaseRecords];
        setprimaryRecord(primaryRecordDetails);
      } else {
        setSelectedKeys([]);
        setSelectedRows([]);
      }
    } 
    
    else if (type === "comparable") {
     
      if (checked) {
        const recordRows = [...selectedRows,record];
        setSelectedKeys((prevKeys) => [...prevKeys, record.key]);
        setSelectedRows((prevRows) => [...prevRows, record]);
        const comparablecaserecords = caseData.filter(
          (obj1) =>
            String(obj1.Fkey) === String(record.key)
        );
        const comparablerecordDetails = [record, ...comparablecaserecords];
        setcomparableRecord((prevrecords) => [...prevrecords,comparablerecordDetails]);
      } else {
        setSelectedKeys((prevKeys) =>
          prevKeys.filter((key) => key !== record.key)
        );
        setSelectedRows((prevRows) =>
          prevRows.filter((row) => row.key !== record.key)
        );
      }
    }
  };

  const filteredData = initialData;

  const columns: any = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: (_: any, record: any) => (
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
      render: (middleName: any) => (middleName ? middleName : "---"),
    },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    {
      title: "Suffix",
      dataIndex: "suffix",
      key: "suffix",
      render: (suffix: any) => (suffix ? suffix : "---"),
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
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "6px",
        overflow: "hidden",
      }}
      bodyStyle={{
        padding: "0px", 
      }}
    >
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
