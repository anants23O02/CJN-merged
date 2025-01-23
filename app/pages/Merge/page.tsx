"use client"
import './page.css'
import MasterTable from '../../components/MasterTable2/MasterTable2';
import Form1 from '../../components/form2/form2';
import Button1 from '../../components/buttonSelect/buttonSelect';
import CaseCard from '../../components/casecard/casecard';
import { useRouter } from "next/navigation";
import VerticalLineWithDrawer from '@/app/components/Line/Line';
export default function Home() {

  return (

   
      <div className='merge-page'>
        <p className='heading'>Master Name Index</p>
        <h3 className='sub-heading'>Master Name Record Merge</h3>
       
      <div className='part'>
      <div className='left-part'>
       <p className="table-heading">Primary Master Name</p>
       <CaseCard />
       </div>
       <div className='line'>
        <VerticalLineWithDrawer/>
       </div>

      <div className="table-head">

        <p className="table-heading">Comparable Record</p>
        <p className='select'>Select Name </p>
        <div className="table">
          <MasterTable />
        </div>
        <div className='button-container'>
          <Button1/>
        </div>
      </div>
      </div>
      </div>

  


  );
}