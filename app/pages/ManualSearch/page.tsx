"use client";
import { useState, useEffect } from "react";
import CaseRow from "@/app/components/rows/Rows";
import './page.css';
import MasterTable from '../../components/MasterTable2/MasterTable2';
import Form1 from '../../components/form/form';
import CaseCard from '../../components/casecard/casecard';
import { useRouter } from "next/navigation";
import VerticalLineWithDrawer from '@/app/components/Line/Line';
// import Button1 from "@/app/components/buttonSelect/buttonSelect";
import MainButton from "@/app/components/mainButton/button";
import { CheckCircleOutlined, SearchOutlined } from '@ant-design/icons';


export default function Home() {
  const [primaryRecord, setPrimaryRecord] = useState<any[]>([]);
  const [comparableRecord, setComparableRecord] = useState<any[]>([]);
  const [showMasterTable, setShowMasterTable] = useState(false); // State to toggle between Form1 and MasterTable
  const [isShown, setIsShown] = useState(false);
  const [selectedFilters,setSelectedFilters] = useState<any[]>([]) 
  function handlefilters(selectedFilters: any) {
    console.log('selectedFilters :>> ', selectedFilters);
    setSelectedFilters(selectedFilters);
  }

  const handleSearchClick = () => {
    setIsShown(!isShown); // Toggle visibility state
    console.log(isShown)
  }

  const router=useRouter();

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

  function  handlePage(){
    router.push('/pages/Automated')
  }

 

  return (
    <div className="merge-page">
      <p className="heading">Master Name Index</p>
      <h3 className="sub-heading">Master Name Record Merge</h3>

      <div className="part">
        <div className="left-part">
          <p className="table-heading">Primary Master Name</p>
          {primaryRecord.length > 0 ? (
            <CaseCard data={primaryRecord[0]} value={''}>
              {primaryRecord.slice(1).map((item) => (
                <CaseRow
                  key={item.id}
                  {...item}
                />
              ))}
            </CaseCard>
          ) : (
            <p>No Primary Record Found</p>
          )}
        </div>
        <div className="line">
          <VerticalLineWithDrawer />
        </div>


        {!isShown ? (
              <div className="table-head">
              <p className="table-heading">Comparable Record</p>
              <div className="form">
                {/* Conditionally render Form1 or MasterTable based on showMasterTable */}
                <Form1 isShown={isShown} setIsShown={setIsShown} handleSearchClick={handleSearchClick} />
              </div>
            </div>
            ) : (
              <div className="table-head">
          <p className="table-heading">Comparable Record</p>
          <div className="table">
            {/* Conditionally render Form1 or MasterTable based on showMasterTable */}
            <MasterTable filters={selectedFilters} />
          </div>
          <div className="button-container">
          <MainButton handleClick={handlePage} icon={<CheckCircleOutlined />}>
          Select
        </MainButton>
      </div>
        </div>
            )}
        
      </div>
    </div>
  );
}
