"use client";
import FilterPopup from "../../components/modal/modal";
import CaseCard from "../../components/casecard/casecard";
import styles from "./masterviewmerge.module.css";
import MainButton from "../../components/mainButton/button";
import VerticalLineWithDrawer from "../../components/Line/Line.tsx";
import CaseRow from "../../components/rows/Rows";
import caseData from "../../components/DummyData/caseData";
import { Row, Col, Button } from "antd";



const NewPage: React.FC = () => {
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
          <MainButton handleClick={newSearchHandler}>New Search</MainButton>
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
          <FilterPopup />
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
