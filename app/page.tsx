"use client";

import Form1 from "./components/form/form";
import FilterPopup from "./components/Modal/modal";
import "./page.css";
import {useRouter} from "next/navigation";
import VerticalLineWithDrawer from "./components/Line/Line";

export default function Home() {
  const router = useRouter();

  function changePage() {
      router.push('/pages/MasterTablePage');
  }

  return (
    <div className="merge-page">
      <p className="heading">Master Name Index</p>
      <h3 className="sub-heading">Master Name Record Merge</h3>
      <FilterPopup/>
      <p className="form-heading">Primary Master Name Record</p>
      <div className="sub-container">
        
      
      <div className="form">
        <Form1 changePage = {changePage} />
      </div>
      <VerticalLineWithDrawer/>
      </div>
    </div>
  );
}
