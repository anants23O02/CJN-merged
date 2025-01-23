"use client";
import FilterPopup from "@/app/components/Modal2/Modal";
import CaseCard from "../../components/casecard/casecard";
import styles from "./masterviewmerge.module.css";
import MainButton from "../../components/mainButton/button";
import VerticalLineWithDrawer from "@/app/components/Line/Line";
import CaseRow from "../../components/rows/Rows";
import { SearchOutlined } from '@ant-design/icons';

import { Row, Col, Button } from "antd";

const caseData = {
  caseNumber: "25-000123",
  date: "01/07/2025",
  firstName: "Timothy",
  middleName: "James",
  lastName: "Taylor",
  suffix: null,
  dob: "12/13/1989",
  cases: 2,
  sex: "M",
  race: "W",
  height: "5'11\"",
  weight: "160",
  id: "DL12345678910",
  phoneNumber: "123-456-7890",
  address: "1234 August Ave St. Paul, MN 55104",
};

const NewPage: React.FC = () => {
  const data = {
    caseNumber: "25-000123",
    date: "01/07/2025",
    firstName: "Timothy",
    middleName: "James",
    lastName: "Taylor",
    suffix: null,
    dob: "12/13/1989",
    sex: "M",
    race: "W",
    height: "5'11\"",
    weight: "160",
    id: "DL12345678910",
    phoneNumber: "123-456-7890",
    address: "1234 August Ave St. Paul MN 55104",
  };
  function handlefilters(selectedfilters) {
    console.log('selectedfilters :>> ', selectedfilters);

  }
  function newSearchHandler() {
    console.log("new search pressed");
  }
  return (
    <div>
      <h3>Master Name Index</h3>
      <Row gutter={8} style={{ display: "flex", justifyContent: "end" }}>
        <Col
          style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
        >
          <a href="/pages/ManualSearch">Manual Search</a>
        </Col>
        <Col span={3}>
          <MainButton handleClick={newSearchHandler} icon={<SearchOutlined/>}>New Search</MainButton>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          alignItems: "middle",
          justifyContent: "space-between",
          "margin-top": "5px",
          "margin-right": "5px",
        }}
      >
        <Col flex="auto">
          <FilterPopup handlefilters = {handlefilters} />
        </Col>
        <Col
          span={3}
          style={{
            display: "flex",
            alignItems: "middle",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            className={styles.mergeButton}
            type="default"
            style={{
              border: "2px solid #678594",
              backgroundColor: "transparent",
              color: "#678594",
            }}
          >
            Merge Together
          </Button>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          alignItems: "top",
          justifyContent: "space-between",
        }}
      >
        <Col flex="auto" style={{ maxWidth: "48%" }}>
          <Row>
            <h5 style={{ marginBottom: "5px" }}>Primary Master Name Record</h5>
          </Row>
          <CaseCard
            firstName="Timothy"
            middleName="James"
            lastName="Taylor"
            suffix={null}
            dob="12/13/1989"
            cases={2}
          >
            <CaseRow {...caseData}> </CaseRow>
          </CaseCard>
        </Col>
        <Col flex="none">
          <VerticalLineWithDrawer />
        </Col>
        <Col flex="auto" style={{ maxWidth: "48%" }}>
          <Row>
            <h5 style={{ marginBottom: "5px" }}>Comparable Record</h5>
          </Row>
          <CaseCard
            firstName="Timothy"
            middleName="James"
            lastName="Taylor"
            suffix={null}
            dob="12/13/1989"
            cases={2}
          >
            <CaseRow {...caseData}> </CaseRow>
            <CaseRow {...caseData}> </CaseRow>
          </CaseCard>
        </Col>
      </Row>
    </div>
  );
};

export default NewPage;
