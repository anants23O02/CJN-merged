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
import { Modal, Row, Col, Button } from "antd";

const NewPage: React.FC = () => {
  const percentage = ["100", "40", "20"];
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
  

  const checkHandler = (key: string) => {
    setmoverecordDetails((prev) => [...prev, key]);
  };

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
    
  

  const handlefilters = (selectedFilters: any) => {
    setSelectedFilters(selectedFilters);
  };
  const checkremoveHandler = (key: string) => {
    setmoverecordDetails((prev) => prev.filter((item) => item !== key));
  };
  const handlePopup = () => {
    router.push("/pages/ManualSearch");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h3>Master Name Index</h3>
      <Row gutter={8} style={{ display: "flex", justifyContent: "end" }}>
        <Col style={{ display: "flex", justifyContent: "end" }}>
          <a onClick={showModal}>Manual Search</a>
          <Modal
            title="Manual Search"
            open={isModalOpen}
            onOk={handlePopup}
            onCancel={handleCancel}
          >
            <p>Are you sure you want to create a manual search?</p>
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
                  key={item.id}
                  {...item}
                  checkHandler={checkHandler}
                  checkremoveHandler={checkremoveHandler}
                  filterData={selectedFilters}
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
          <h5>Comparable Record</h5>
          {comparableRecord.length > 0 ? (
            comparableRecord.map((group, index) =>
              group.length > 0 ? (
                <CaseCard key={index} data={group[0]} value={percentage[index]}>
                  {group.slice(1).map((item) => (
                    <CaseRow
                      key={item.id}
                      {...item}
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
