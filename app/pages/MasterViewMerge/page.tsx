"use client";
import FilterPopup from "../../components/modal/modal";
import CaseCard from "../../components/casecard/casecard";
import styles from "./masterviewmerge.module.css";
import MainButton from "../../components/mainButton/button";
import VerticalLineWithDrawer from "../../components/Line/Line.tsx";

import { Row, Col } from "antd";

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
  function newSearchHandler() {
    console.log("new search pressed");
  }
  return (
    <div>
      <h3>Master Name Index</h3>
      <Row gutter={8} style={{ display: "flex", justifyContent: "end" }}>
        <Col
          span={4}
          style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
        >
          <a href="">Manual Search</a>
        </Col>
        <Col span={3}>
          <MainButton handleClick={newSearchHandler}>New Search</MainButton>
        </Col>
      </Row>
      <FilterPopup />
      <CaseCard
        firstName="Timothy"
        middleName="James"
        lastName="Taylor"
        suffix={null}
        dob="12/13/1989"
        cases={2}
      />
      <VerticalLineWithDrawer>
        
      </VerticalLineWithDrawer>
    </div>
  );
};

export default NewPage;
