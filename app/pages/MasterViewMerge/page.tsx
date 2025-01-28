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
import Popup from "@/app/components/popUp/popUp";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import { Row, Col, Button } from "antd";

const NewPage: React.FC = () => {
  const percentage = ["100 ", "40 ", "20 "];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const router = useRouter();

  const [moverecordR2LDetails, setmoverecordR2LDetails] = useState<any[]>([]);
  const [moverecordL2RDetails, setmoverecordL2RDetails] = useState<any[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  const [primaryRecord, setPrimaryRecord] = useState<any[]>([]);
  const [comparableRecord, setComparableRecord] = useState<any[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const record = sessionStorage.getItem("record");
      if (record) {
        const parsedRecord = JSON.parse(record);
        setPrimaryRecord(parsedRecord.secondaryRecord || []);
        setComparableRecord(parsedRecord.comparableRecord || []);
      }
    }
  }, []);

  function checkHandler(key: any, btn: any) {
    console.log("key :>> ", key);
    if (btn === "Right") {
      setmoverecordR2LDetails((previtems) => [...previtems, key]);
    } else if (btn == "Left") {
      setmoverecordL2RDetails((previtems) => [...previtems, key]);
    }
  }

  function checkremoveHandler(key: any, btn: any) {
    if (btn === "Right") {
      const updatedmoverecordDetails = moverecordR2LDetails.filter(
        (item) => item !== key
      );
      setmoverecordR2LDetails((previtems) => [...updatedmoverecordDetails]);
    } else if (btn == "Left") {
      const updatedmoverecordDetails = moverecordL2RDetails.filter(
        (item) => item !== key
      );
      setmoverecordL2RDetails((previtems) => [...updatedmoverecordDetails]);
    }
  }

  function handleButtonRightToLeft() {
    console.log("skdfhksjdfhkjsd");
    const record = sessionStorage.getItem("record");
    if (record) {
      const parsedRecord = JSON.parse(record);
      console.log(
        parsedRecord.comparableRecord.map((comparableArray:any) =>
          comparableArray.filter(
            (record: any) => !moverecordR2LDetails.includes(record?.caseNumber)
          )
        )
      );
    } 
    setComparableRecord((prevComparable) =>
      prevComparable.map((comparableArray) =>
        comparableArray.filter(
          (record: any) => !moverecordR2LDetails.includes(record?.caseNumber)
        )
      )
    );
    setmoverecordR2LDetails([]);

    if (typeof window !== "undefined") {
      const updatedRecord = {
        secondaryRecord: primaryRecord,
        comparableRecord: comparableRecord,
      };
      sessionStorage.setItem("record", JSON.stringify(updatedRecord));
    }
  }

  function handleButtonLeftToRight() {
    console.log("setuuuuuuu");
    setPrimaryRecord((prevPrimary) =>
      prevPrimary.filter(
        (record) => !moverecordL2RDetails.includes(record.caseNumber)
      )
    );

    setComparableRecord((prevComparable) => {
      const movedItems = primaryRecord.filter((item) =>
        moverecordL2RDetails.includes(item.caseNumber)
      );
      const uniqueItems = movedItems.filter(
        (item) =>
          !prevComparable[0].some(
            (existing: any) => existing.caseNumber === item.caseNumber
          )
      );
      prevComparable[0].push(...uniqueItems);
      return prevComparable;
    });

    setmoverecordL2RDetails([]);

    if (typeof window !== "undefined") {
      const updatedRecord = {
        secondaryRecord: primaryRecord,
        comparableRecord: comparableRecord,
      };
      sessionStorage.setItem("record", JSON.stringify(updatedRecord));
    }
  }

  function handlefilters(selectedFilters: any) {
    console.log("selectedFilters :>> ", selectedFilters);
    setSelectedFilters(selectedFilters);
  }

  function newSearchHandler() {
    console.log("New search pressed");
  }

  function handlePopup() {
    router.push("/pages/ManualSearch");
  }

  function handleCancel() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <h3>Master Name Index</h3>
      <Row gutter={8} style={{ display: "flex", justifyContent: "end" }}>
        <Col
          style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
        >
          <a onClick={showModal}>Manual Search</a>
          <Modal
            title="Manual Search"
            open={isModalOpen}
            onOk={handlePopup}
            onCancel={handleCancel}
          >
            <p>Are you sure you should like to create a manual search? </p>
          </Modal>
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
            <CaseCard data={primaryRecord[0]} value={""}>
              {primaryRecord.slice(1).map((item) => (
                <CaseRow
                  direction="Left"
                  key={item.id}
                  {...item}
                  checkHandler={checkHandler}
                  checkremoveHandler={checkremoveHandler}
                  filterData={selectedFilters}
                  value={""}
                />
              ))}
            </CaseCard>
          ) : (
            <p>No Primary Record Found</p>
          )}
        </Col>

        <Col style={{ paddingTop: "25px" }} flex="none">
          <VerticalLineWithDrawer
            rightbutton={handleButtonRightToLeft}
            leftbutton={handleButtonLeftToRight}
          />
        </Col>
        <Col flex="auto" style={{ maxWidth: "48%" }}>
          <Row>
            <h5 style={{ marginBottom: "5px" }}>Comparable Record</h5>
          </Row>
          {comparableRecord.length > 0 ? (
            comparableRecord.map((record, index) =>
              record ? (
                <CaseCard
                  key={index}
                  data={record[0]}
                  value={percentage[index]}
                >
                  {record.slice(1).map((item: any) => (
                    <CaseRow
                      key={item.id}
                      {...item}
                      direction="Right"
                      checkHandler={checkHandler}
                      checkremoveHandler={checkremoveHandler}
                      filterData={selectedFilters}
                      value={percentage[index]}
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
