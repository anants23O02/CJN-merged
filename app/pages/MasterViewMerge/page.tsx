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
import { Modal } from 'antd';

import { Row, Col, Button } from "antd";

const NewPage: React.FC = () => {
  const percentage = ['100 ',"40 ",'20 ']
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
const router=useRouter();

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  const [moverecordDetails, setmoverecordDetails] = useState<any[]>([]);
  const [selectedFilters,setSelectedFilters] = useState<any[]>([]) 
  const [primaryRecord, setPrimaryRecord] = useState<any[]>([]);
  const [comparableRecord, setComparableRecord] = useState<any[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const record = sessionStorage.getItem("record");
        const parsedRecord = JSON.parse(record);
        setPrimaryRecord(parsedRecord.secondaryRecord || []); 
        setComparableRecord(parsedRecord.comparableRecord || []);
      
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

  // console.log("moverecordDetails :>> ", moverecordDetails);
  // for(let i = 1;i<=moverecordDetails.length;i++) { 
  //     if (moverecordDetails.length > 0) {
  //   const moveditem = caseData.find(
  //     (record) =>
  //       record.caseNumber === moverecordDetails[moverecordDetails.length - i]
  //   );
  //   setPrimaryRecord((previtems) => [...previtems, moveditem]);
  // }}
  // let updatedComparableRecords = [...comparableRecord];
  // for (let i = 1; i <= moverecordDetails.length; i++) {
  //   updatedComparableRecords = updatedComparableRecords.filter(
  //     (item) => item.caseNumber !== String(moverecordDetails[moverecordDetails.length - i])
  //   );
  // }
  // console.log(updatedComparableRecords,comparableRecord);
  // setComparableRecord(updatedComparableRecords);
  // setmoverecordDetails([])
  function handleButtonRightToLeft() {
    
      // Step 1: Update primaryRecord by appending the moved items
      setPrimaryRecord((prevPrimary) => {
        const movedItems = comparableRecord
          .flat() // Flatten the array of arrays to make filtering easier
          .filter((record) => moverecordDetails.includes(record.caseNumber));
    
        return [...prevPrimary, ...movedItems];
      });
    
      // Step 2: Remove the moved items from comparableRecord
      setComparableRecord((prevComparable) =>
        prevComparable.map((comparableArray) =>
          comparableArray.filter(
            (record) => !moverecordDetails.includes(record.caseNumber)
          )
        )
      );
    
      // Step 3: Clear moverecordDetails (if needed elsewhere in the code)
      setmoverecordDetails([]);
      if (typeof window !== "undefined") {
        const updatedRecord = {
          secondaryRecord: primaryRecord,
          comparableRecord: comparableRecord,
        };
        sessionStorage.setItem("record", JSON.stringify(updatedRecord));
      }
    };
    
    // useEffect to sync session storage whenever state changes
    
  

  function handlefilters(selectedFilters: any) {
    console.log('selectedFilters :>> ', selectedFilters);
    setSelectedFilters(selectedFilters);
  }

  function newSearchHandler() {
    console.log("New search pressed");
  }
  

  function handlePopup(){

router.push("/pages/ManualSearch")
  }
  function handleCancel(){
    setIsModalOpen(false);
    console.log("clicked")
  }
  return (
    <div>
      <h3>Master Name Index</h3>
      <Row gutter={8} style={{ display: "flex", justifyContent: "end" }}>
        <Col
          style={{ display: "flex", justifyContent: "end", alignItems: "end" }}
        > <a  onClick={showModal}>Manual Search</a>
            <Modal title="Manual Search" open={isModalOpen} onOk={handlePopup} onCancel={handleCancel}>
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
            <CaseCard data={primaryRecord[0]} value={''}>
              {primaryRecord.slice(1).map((item) => (
                <CaseRow
                  key={item.id}
                  {...item}
                  checkHandler={checkHandler}
                  checkremoveHandler={checkremoveHandler}
                  filterData = {selectedFilters}
                  value ={''}
                />
              ))}
            </CaseCard>
          ) : (
            <p>No Primary Record Found</p>
          )}
        </Col>

        <Col flex="none">
          <VerticalLineWithDrawer rightbutton={handleButtonRightToLeft}/>
        </Col>
        <Col flex="auto" style={{ maxWidth: "48%" }}>
          <Row>
            <h5 style={{ marginBottom: "5px" }}>Comparable Record</h5>
          </Row>
          {comparableRecord.length > 0 ? (
            comparableRecord.map((record, index) =>
              record ? (
                <CaseCard key={index} data={record[0]} value = {percentage[index]} >
                  {record.slice(1).map((item) => (
                    <CaseRow
                      key={item.id}
                      {...item}
                      checkHandler={checkHandler}
                      checkremoveHandler={checkremoveHandler}
                      filterData={selectedFilters}
                      value = {percentage[index]}
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
