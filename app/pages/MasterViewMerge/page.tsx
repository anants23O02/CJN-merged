"use client";

import React, { useEffect, useState } from "react";
import FilterPopup from "@/app/components/Modal2/Modal";
import CaseCard from "../../components/casecard/casecard";
import styles from "./masterviewmerge.module.css";
import MainButton from "../../components/mainButton/button";
import VerticalLineWithDrawer from "@/app/components/Line/Line";
import CaseRow from "../../components/rows/Rows";
import { SearchOutlined } from "@ant-design/icons";
import initialData from "../../components/DummyData/searchResult";

import { Row, Col, Button } from "antd";

const NewPage: React.FC = () => {
  const [primaryRecord, setPrimaryRecord] = useState<any>(null);
  const [comparableRecord, setComparableRecord] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const record = sessionStorage.getItem("record");
      if (record) {
        const parsedRecord = JSON.parse(record);
        console.log("Parsed Record:", parsedRecord);

        // Find Primary Record
        const primary = initialData.find(
          (item) => item.key === parsedRecord.secondaryRecord
        );
        setPrimaryRecord(primary || null);

        // Find Comparable Records
        const comparable = parsedRecord.comparableRecord?.map((compRecord: any) =>
          initialData.find((item) => item.key === compRecord)
        );
        setComparableRecord(comparable || []);
      }
    }
  }, []);

  // Log state changes for debugging
  useEffect(() => {
    console.log("Primary Record Updated:", primaryRecord);
  }, [primaryRecord]);

  useEffect(() => {
    console.log("Comparable Records Updated:", comparableRecord);
  }, [comparableRecord]);

  function handlefilters(selectedFilters: any) {
    console.log("Selected Filters: ", selectedFilters);
  }

  function newSearchHandler() {
    console.log("New search pressed");
  }

  return (
    <div>
      <h3>Master Name Index</h3>
      <Row gutter={8} style={{ display: "flex", justifyContent: "end" }}>
        <Col style={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
          <a href="/pages/ManualSearch">Manual Search</a>
        </Col>
        <Col span={3}>
          <MainButton handleClick={newSearchHandler} icon={<SearchOutlined />}>
            New Search
          </MainButton>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          alignItems: "middle",
          justifyContent: "space-between",
          marginTop: "5px",
          marginRight: "5px",
        }}
      >
        <Col flex="auto">
          <FilterPopup handlefilters={handlefilters} />
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
          {primaryRecord ? (
            <CaseCard data={primaryRecord}>
              <CaseRow {...primaryRecord} />
            </CaseCard>
          ) : (
            <p>No Primary Record Found</p>
          )}
        </Col>

        <Col flex="none">
          <VerticalLineWithDrawer />
        </Col>
        <Col flex="auto" style={{ maxWidth: "48%" }}>
          <Row>
            <h5 style={{ marginBottom: "5px" }}>Comparable Record</h5>
          </Row>
          {comparableRecord.length > 0 ? (
            comparableRecord.map((record, index) =>
              record ? (
                <CaseCard key={index} data={record}>
                  <CaseRow {...record} />
                </CaseCard>
              ) : null
            )
          ) : (
            <p>No Comparable Records Found</p>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default NewPage;
