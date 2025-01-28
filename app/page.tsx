"use client";

import { Breadcrumb } from "antd";
import Link from "next/link";
import Form1 from "./components/form2/form2";
import FilterPopup from "./components/Modal2/Modal";
import "./page.css";
import { useRouter } from "next/navigation";
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
      <FilterPopup  />
      <p className="form-heading">Primary Master Name Record</p>
      <div className="sub-container">
        <div className="form">
          <Form1  />
        </div>
        <VerticalLineWithDrawer />
      </div>
    </div>
  );
}
