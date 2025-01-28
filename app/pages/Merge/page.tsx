"use client";
import "./page.css";
import MasterTable from "../../components/MasterTable2/MasterTable2";
import { CheckCircleOutlined } from "@ant-design/icons";
import CaseRow from "@/app/components/rows/Rows";
import CaseCard from "../../components/casecard/casecard";
import { useRouter } from "next/navigation";
import MainButton from "@/app/components/mainButton/button";
import VerticalLineWithDrawer from "@/app/components/Line/Line";
export default function Home() {
  const router = useRouter();
  function changePage() {
    router.push("/pages/MasterTablePage");
  }
  const caseData = {
    caseNumber: "25-000123",
    date: "01/07/2025",
    firstName: "Timothy",
    middleName: "James",
    lastName: "Taylor",
    suffix: null,
    dob: "12/13/1989",
    cases: 2,
    sex: "M",
    race: "W",
    height: "5'11\"",
    weight: "160",
    id: "DL12345678910",
    phoneNumber: "123-456-7890",
    address: "1234 August Ave St. Paul, MN 55104",
  };

  return (
    <div className="merge-page">
      <p className="heading">Master Name Index</p>
      <h3 className="sub-heading">Master Name Record Merge</h3>

      <div className="part">
        <div className="left-part">
          <p className="table-heading">Primary Master Name</p>
          <CaseCard
            data={{
              firstName: "Timothy",
              middleName: "James",
              lastName: "Taylor",
              suffix: "",
              dob: "12/13/1989",
              cases: 2,
            }}
            type = {'primary'}
          >
            <CaseRow {...caseData}/> 
          </CaseCard>
        </div>
        <div className="line">
          <VerticalLineWithDrawer />
        </div>

        <div className="table-head">
          <p className="table-heading">Comparable Record</p>
          <p className="select">Select Name </p>
          <div className="table">
            <MasterTable />
          </div>
          <div className="button-container">
            <MainButton handleClick={changePage} icon={<CheckCircleOutlined />}>
              <span className="button-icon"></span> Search
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
