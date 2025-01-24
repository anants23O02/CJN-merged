"use client";
import React, { useEffect, useState } from "react";
import FilterPopup from "@/app/components/Modal2/Modal";
import CaseCard from "../../components/casecard/casecard";
import styles from "./masterviewmerge.module.css";
import MainButton from "../../components/mainButton/button";
import VerticalLineWithDrawer from "@/app/components/Line/Line";
import CaseRow from "../../components/rows/Rows";
import { SearchOutlined } from "@ant-design/icons";
import caseData from "../../components/DummyData/caseData";

import { Row, Col, Button } from "antd";

const NewPage: React.FC = () => {
  const [moverecordDetails, setmoverecordDetails] = useState<any[]>([]);
  const [primaryRecord, setPrimaryRecord] = useState<any[]>([]);
  const [comparableRecord, setComparableRecord] = useState<any[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const record = sessionStorage.getItem("record");
      if (record) {
        const parsedRecord = JSON.parse(record);
        console.log("Parsed Record:", parsedRecord);
        let primaryrecordDetails = [parsedRecord.secondaryRecord];
        const primarycaserecords = caseData.filter(
          (obj1) =>
            String(obj1.Fkey) === String(parsedRecord.secondaryRecord.key)
        );
        primaryrecordDetails = [...primaryrecordDetails, ...primarycaserecords];
        setPrimaryRecord(primaryrecordDetails || null);
        // const primaryrecordDetails = parsedRecord.comparableRecord.map((record) => {

        // })
        const comparablerecordDetails = parsedRecord.comparableRecord.map(
          (obj1) => {
            const matches = caseData.filter(
              (obj2) => String(obj2.Fkey) === String(obj1.key)
            );
            console.log(matches, "here");
            return [obj1, ...matches];
          }
        );
        setComparableRecord(comparablerecordDetails);
      }
    }
  }, []);

  function checkHandler(key) {
    console.log("key :>> ", key);
    setmoverecordDetails((previtems) => [...previtems, key]);
  }
  function checkremoveHandler(key) {
    const updatedmoverecordDetails = moverecordDetails.filter(
      (item) => item !== key
    );
    setmoverecordDetails((previtems) => [...updatedmoverecordDetails]);
  }

  function handleButtonRightToLeft() {
    console.log('moverecordDetails :>> ', moverecordDetails);
    if (moverecordDetails.length > 0) {
      const moveditem = caseData.find(
        (record) =>
          record.caseNumber === moverecordDetails[moverecordDetails.length - 1]
      );
      setPrimaryRecord((previtems) => [...previtems, moveditem]);
    }
  }
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
        <Col
          style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
        >
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
          {primaryRecord.length > 0 ? (
            <CaseCard data={primaryRecord[0]}>
              {primaryRecord.slice(1).map((item) => (
                <CaseRow
                  key={item.id}
                  {...item}
                  checkHandler={checkHandler}
                  checkremoveHandler={checkremoveHandler}
                />
              ))}
            </CaseCard>
          ) : (
            <p>No Primary Record Found</p>
          )}
        </Col>

        <Col flex="none">
          <VerticalLineWithDrawer rightbutton={handleButtonRightToLeft} />
        </Col>
        <Col flex="auto" style={{ maxWidth: "48%" }}>
          <Row>
            <h5 style={{ marginBottom: "5px" }}>Comparable Record</h5>
          </Row>
          {comparableRecord.length > 0 ? (
            comparableRecord.map((record, index) =>
              record ? (
                <CaseCard key={index} data={record[0]}>
                  {record.slice(1).map((item) => (
                    <CaseRow
                      key={item.id}
                      {...item}
                      checkHandler={checkHandler}
                      checkremoveHandler={checkremoveHandler}
                    />
                  ))}
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
