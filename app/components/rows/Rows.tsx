"use client";

import React from "react";
import { Row, Col, Checkbox, Typography, Space } from "antd";
import {useState} from 'react';
const { Text } = Typography;

interface RowData {
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
  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = e.target.checked;
    setIsClicked(isChecked);
    console.log('isClicked :>> ', isChecked);
    if (isChecked ){
      checkHandler(caseNumber);
    }
    else{
      checkremoveHandler(caseNumber);
    }
  }
  return (
    <>
      <div
        style={{
          overflowX: "auto", // Enable horizontal scrolling
          padding: "8px",
        }}
      >
        <Row justify="start" align="middle" style={{ marginBottom: "8px" }}>
          <Space size="large">
            <Checkbox onChange={handleCheckbox}></Checkbox>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "700" }}>Case:</Text>
              <Text>
                <a href="">{" " + caseNumber}</a>
              </Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "700" }}>Date:</Text>
              <Text>{" " + date} </Text>
            </Col>
          </Space>
        </Row>
        <Row
          justify="start"
          align="middle"
          style={{
            marginBottom: "16px",
            whiteSpace: "nowrap", // Prevent wrapping
            width: "max-content",
          }}
        >
          <Space size="large">
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>
                First Name
              </Text>
              <br />
              <Text>{firstName}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>
                Middle Name
              </Text>
              <br />
              <Text>{middleName}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>
                Last Name
              </Text>
              <br />
              <Text>{lastName}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>
                suffix
              </Text>
              <br />
              <Text>{suffix ? suffix : "---"}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>DOB</Text>
              <br />
              <Text>{dob}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>
                Last Name
              </Text>
              <br />
              <Text>{lastName}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>Sex</Text>
              <br />
              <Text>{sex}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>Race</Text>
              <br />
              <Text>{race}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>
                Height
              </Text>
              <br />
              <Text>{height}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>ID</Text>
              <br />
              <Text>{id}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>
                Phone No.
              </Text>
              <br />
              <Text>{phoneNumber}</Text>
            </Col>
            <Col>
              <Text style={{ color: "#556d7a", fontWeight: "600" }}>
                Address
              </Text>
              <br />
              <Text>{address}</Text>
            </Col>
          </Space>
        </Row>
      </div>
    </>
  );
};

export default CaseRow;
