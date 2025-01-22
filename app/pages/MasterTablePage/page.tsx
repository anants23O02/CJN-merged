import FilterPopup from "../../components/Modal/modal";
import "./page.css";
import Button1 from "../../components/buttonSelect/buttonSelect";
import MasterTable from "../../components/MasterTable2/MasterTable2";
export default function Home() {
  return (
    <div className="merge-page">
      <p className="heading">Master Name Index</p>
      <h3 className="sub-heading">Master Name Record Merge</h3>
      <FilterPopup />
      <p className="form-heading">Primary Master Name Record</p>
      <p className="table-heading">Select Name</p>
      <div className="table">
        <MasterTable />
      </div>
      <div className="button-container">
        <Button1 />
      </div>
    </div>
  );
}
