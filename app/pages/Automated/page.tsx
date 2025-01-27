"use client";
import React, { useEffect, useState } from "react";
import FilterPopup from "@/app/components/Modal2/Modal";
import CaseCard from "../../components/casecard/casecard";
import styles from "./automated.module.css";
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
  const [moverecordDetails, setmoverecordDetails] = useState<any[]>([]);
  const [primaryRecord, setPrimaryRecord] = useState<any[]>([]);
  const [comparableRecord, setComparableRecord] = useState<any[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  const router = useRouter();

  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const record = sessionStorage.getItem("record");
      
        const parsedRecord = JSON.parse(record);
        console.log(parsedRecord);
        setPrimaryRecord(parsedRecord.secondaryRecord || []); 
        setComparableRecord(parsedRecord.comparableRecord || []);
      
    }
  }, []);

  function checkHandler(key,btn) {
    console.log("key :>> ", key);
    if(btn==='Right'){
      setmoverecordDetails((previtems) => [...previtems, key]);
    }
    else if(btn =='Left'){
      setmoverecordDetails((previtems) => [...previtems, key])
    }
  }
  function checkremoveHandler(key,btn) {
    if(btn==='Right'){
    const updatedmoverecordDetails = moverecordDetails.filter(
      (item) => item !== key
    );
    setmoverecordDetails((previtems) => [...updatedmoverecordDetails]);
  }
  else if(btn =='Left'){
    const updatedmoverecordDetails = moverecordDetails.filter(
      (item) => item !== key
    );
    setmoverecordDetails((previtems) => [...updatedmoverecordDetails]);
  }
  }

  function handleButtonRightToLeft() {
    setPrimaryRecord((prevPrimary) => {
      const movedItems = comparableRecord
        .flat()
        .filter((record) => moverecordDetails.includes(record.caseNumber));
      return [...prevPrimary, ...movedItems];
    });

    setComparableRecord((prevComparable) =>
      prevComparable.map((comparableArray) =>
        comparableArray.filter(
          (record) => !moverecordDetails.includes(record.caseNumber)
        )
      )
    );

    setmoverecordDetails([]);

    if (typeof window !== "undefined") {
      const updatedRecord = {
        secondaryRecord: primaryRecord,
        comparableRecord: comparableRecord,
      };
      sessionStorage.setItem("record", JSON.stringify(updatedRecord));
    }
  }


  function handleButtonLeftToRight() {
    setPrimaryRecord((prevPrimary) => 
      prevPrimary.filter(
          (record) => !moverecordDetails.includes(record.caseNumber)
        )
  );

    setComparableRecord((prevComparable) =>{
      const movedItems = comparableRecord
      .flat()
      .filter((record) => moverecordDetails.includes(record.caseNumber));
    }

    );

    setmoverecordDetails([]);

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
  };
 
  function newSearchHandler() {
    console.log("New search pressed");
  }

  function handlePopup() {
    router.push("/pages/MasterNameIndex");
  }

  function handleCancel() {
    setIsModalOpen(false);
    console.log("clicked");
  }

  return (
    <div>
      <h3>Master Name Index</h3>
      <Row gutter={8} style={{ display: "flex", justifyContent: "end" }}>
        <Col
          style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
        >
          {" "}
          <a onClick={showModal}>Automated Search</a>
          <Modal
            title="Manual Search"
            open={isModalOpen}
            onOk={handlePopup}
            onCancel={handleCancel}
          >
            <p>Are you sure you should like to create a Automated search? </p>
          </Modal>
        </Col>
        <Col span={3}>
          <MainButton icon={<SearchOutlined />}>New Search</MainButton>
        </Col>
      </Row>

      <Row style={{ marginTop: "5px", marginRight: "5px" }}>
        <Col flex="auto">
          <FilterPopup handlefilters={handlefilters} />
        </Col>
        <Col span={3} style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button className={styles.mergeButton} type="default">
            Merge Together
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: "10px" }}>
        <Col flex="auto" style={{ maxWidth: "48%" }}>
          <h5>Primary Master Name Record</h5>
          {primaryRecord.length > 0 ? (
            <CaseCard data={primaryRecord[0]} value={""}>
              {primaryRecord.slice(1).map((item) => (
                <CaseRow
                  direction = 'Left'
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

        <Col flex="none">
          <VerticalLineWithDrawer rightbutton={handleButtonRightToLeft} leftbutton={handleButtonLeftToRight} style={{paddingTop:"25px"}} />
        </Col>

        <Col flex="auto" style={{ maxWidth: "48%" }}>
          <h5>Comparable Record</h5>
          {comparableRecord.length > 0 ? (
            comparableRecord.map((record, index) =>
              record ? (
                <CaseCard
                  key={index}
                  data={record[0]}
                  value={percentage[index]}
                >
                  {record.slice(1).map((item) => (
                    <CaseRow
                    key={item.id}
                    {...item}
                    direction = 'Right'
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
