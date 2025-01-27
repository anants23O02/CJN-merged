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
      if (record) {
        const parsedRecord = JSON.parse(record);
        console.log("Parsed Record:", parsedRecord);

        // Primary Record Initialization
        let primaryrecordDetails = [parsedRecord.secondaryRecord];
        const primarycaserecords = caseData.filter(
          (obj) => String(obj.Fkey) === String(parsedRecord.secondaryRecord.key)
        );
        primaryrecordDetails = [...primaryrecordDetails, ...primarycaserecords];
        setPrimaryRecord(primaryrecordDetails);

        // Comparable Record Initialization
        const comparablerecordDetails = parsedRecord.comparableRecord.map(
          (obj) => {
            const matches = caseData.filter(
              (caseObj) => String(caseObj.Fkey) === String(obj.key)
            );
            return [obj, ...matches];
          }
        );
        setComparableRecord(comparablerecordDetails);
      }
    }
  }, []);

  const checkHandler = (key: string) => {
    setmoverecordDetails((prev) => [...prev, key]);
  };

  const checkremoveHandler = (key: string) => {
    setmoverecordDetails((prev) => prev.filter((item) => item !== key));
  };

  const handleButtonRightToLeft = () => {
    if (moverecordDetails.length > 0) {
      const movedItems = moverecordDetails.map((key) =>
        caseData.find((record) => record.caseNumber === key)
      );

      setPrimaryRecord((prev) => [...prev, ...movedItems]);

      const updatedComparableRecords = comparableRecord.map((group) =>
        group.filter(
          (record) =>
            !moverecordDetails.includes(record.caseNumber)
        )
      );
      setComparableRecord(updatedComparableRecords.filter((group) => group.length > 0));

      setmoverecordDetails([]);
    }
  };

  const handlefilters = (selectedFilters: any) => {
    setSelectedFilters(selectedFilters);
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
