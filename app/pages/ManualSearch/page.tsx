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

  return (

    

      <div className='merge-page'>
        <p className='heading'>Master Name Index</p>
        <h3 className='sub-heading'>Master Name Record Merge</h3>
       
      <div className='part'>
      <div className='left-part'>
       <p className="table-heading">Primary Master Name</p>
       {primaryRecord.length > 0 ? (
            <CaseCard data={primaryRecord[0]} value ={''}>
              {primaryRecord.slice(1).map((item) => (
                <CaseRow
                  key={item.id}
                  {...item}
                  // checkHandler={checkHandler}
                  // checkremoveHandler={checkremoveHandler}
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