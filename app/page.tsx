"use client";

import Form1 from "./components/form/form";
import Cascade from "./components/cascade/cascade";
import FilterPopup from './components/Modal/modal.tsx';
import "./page.css";
import {useRouter} from "next/navigation";

export default function Home() {
 

  return (
    <div className="merge-page">
      <p className="heading">Master Name Index</p>
      <h3 className="sub-heading">Master Name Record Merge</h3>
      <FilterPopup/>
      <p className="form-heading">Primary Master Name Record</p>
      <div className="form">
        <Form1  />
      </div>
    </div>
  );
}
