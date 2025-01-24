"use client"
import {useState,useEffect} from "react";
import CaseRow from "@/app/components/rows/Rows";
import './page.css'
import caseData from "@/app/components/DummyData/caseData";
import MasterTable from '../../components/MasterTable2/MasterTable2';
import Form1 from '../../components/form2/form2';
import Button1 from '../../components/buttonSelect/buttonSelect';
import CaseCard from '../../components/casecard/casecard';
import { useRouter } from "next/navigation";
import VerticalLineWithDrawer from '@/app/components/Line/Line';
export default function Home() {
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

const initialData = {
  key: "1",
    lastName: "Taylor",
    firstName: "Timothy",
    middleName: "James",
    suffix: null,
    dob: "12/13/1989",
    age: 35,
    address: "1234 August Ave",
    city: "St. Paul",
    state: "MN",
    recordValue: "",
}
  return (

    

      <div className='merge-page'>
        <p className='heading'>Master Name Index</p>
        <h3 className='sub-heading'>Master Name Record Merge</h3>
       
      <div className='part'>
      <div className='left-part'>
       <p className="table-heading">Primary Master Name</p>
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
       </div>
       <div className='line'>
        <VerticalLineWithDrawer/>
       </div>

      <div className="table-head">

        <p className="table-heading">Comparable Record</p>
        <div className="form">
          <Form1/>
        </div>
    
      </div>
      </div>
      </div>

  )
}