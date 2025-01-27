"use client";


import React from "react";
import { Row, Col, Checkbox, Typography, Space } from "antd";
import {useState, useEffect} from 'react';
const { Text } = Typography;

interface RowData {
  direction:string;
  caseNumber: string;
  date: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string | null;
  dob: string;
  sex: string;
  race: string;
  height: string;
  weight: string;
  id: string;
  phoneNumber: string;
  address: string;
}

const CaseRow: React.FC<RowData> = ({
  direction,
  filterData,
  checkremoveHandler,
  checkHandler,
  Fkey,
  caseNumber,
  date,
  firstName,
  middleName,
  lastName,
  suffix,
  dob,
  sex,
  race,
  height,
  weight,
  id,
  phoneNumber,
  address,
}) => {
  const [isClicked,setIsClicked] = useState(false);
  const [localSelectedFilters, setLocalSelectedFilters] = useState(filterData);
  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>,btn) {
    const isChecked = e.target.checked;
    setIsClicked(isChecked);
    console.log('isClicked :>> ', isChecked,direction);
    if (isChecked ){        
      checkHandler(caseNumber,direction);
    }
    else{
      checkremoveHandler(caseNumber,direction);
    }
    console.log('filterData :>> ', localSelectedFilters);
  }


  useEffect(() => {
  
    setLocalSelectedFilters(filterData);
  }, [filterData]); 


  return (
    <>
  <div
    style={{
      overflowX: "auto",
      padding: "5px 24px",
    }}
  >
    <Row
      justify="start"
      align="middle"
      gutter={[0, 16]}
      style={{ marginBottom: "8px" }}
    >
      <Checkbox onChange={handleCheckbox}></Checkbox>
      <Col style={{paddingLeft:'24px'}} >
        <Text style={{ color: "#556d7a", fontWeight: "700" }}>Case:</Text>
        <Text>
          <a href="./CaseView">{" " + caseNumber}</a>
        </Text>
      </Col>
      <Col style={{paddingLeft:'24px'}}>
        <Text style={{ color: "#556d7a", fontWeight: "700" }}>Date:</Text>
        <Text>{" " + date}</Text>
      </Col>
    </Row>
    <Row
      justify="start"
      align="middle"
      gutter={[0, 0]} // Remove all gutter space
      style={{
        marginBottom: "16px",
        whiteSpace: "nowrap",
        width: "max-content",
      }}
    >
      {[
        { label: "First Name", value: firstName, highlight: true },
        { label: "Middle Name", value: middleName, highlight: true },
        { label: "Last Name", value: lastName, highlight: true },
        { label: "Suffix", value: suffix || "---" },
        { label: "DOB", value: dob, highlight: true },
        { label: "Sex", value: sex },
        { label: "Race", value: race },
        { label: "Height", value: height },
        { label: "ID", value: id },
        { label: "Phone No.", value: phoneNumber },
        { label: "Address", value: address },
      ].map(({ label, value, highlight }, index) => (
        <Col
          key={index}
          style={{
            background: highlight ? "#b1ffc6" : "transparent",
            padding: "0 15px", // Ensure no padding
            margin: "0", // Ensure no margin
          }}
        >
          <Text style={{ color: "#556d7a", fontWeight: "600" }}>{label}</Text>
          <br />
          <Text>{value}</Text>
        </Col>
      ))}
    </Row>
  </div>
</>

  
  );
};

export default CaseRow;
