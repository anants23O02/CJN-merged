"use client"
import FilterPopup from "@/app/components/Modal2/Modal";
import "./page.css";
import Button1 from "../../components/buttonSelect/buttonSelect";
import MasterTable from "../../components/MasterTable2/MasterTable2";
import VerticalLineWithDrawer from "@/app/components/Line/Line";
import { useState } from "react";
export default function Home() {
    const [selectedFilters,setSelectedFilters] = useState<any[]>([]) 
  function handlefilters(selectedFilters: any) {
    console.log('selectedFilters :>> ', selectedFilters);
    setSelectedFilters(selectedFilters);
  }
  return (
    <div className="merge-page">
      <p className="heading">Master Name Index</p>
      <h3 className="sub-heading">Master Name Record Merge</h3>
      
      <div className="part">
      <div className="left-part">
      <FilterPopup handlefilters={handlefilters} />
      <p className="form-heading">Primary Master Name Record</p>
      <p className="table-heading">Select Name</p>
      <div className="table">
    
      <MasterTable filters={selectedFilters} />

      </div>
      <div className="button-container">
        <Button1 />
      </div>
      </div>
      <div className="right-part">
          <VerticalLineWithDrawer/>
      </div>
      </div>
    </div>
  );
}
