"use client";

import { Breadcrumb } from "antd";
import Link from "next/link";
import Form1 from "./components/form/form";
import FilterPopup from "./components/Modal/modal";
import "./page.css";
import { useRouter } from "next/navigation";
import VerticalLineWithDrawer from "./components/Line/Line";

export default function Home() {
  const router = useRouter();

  function changePage() {
    router.push('/pages/MasterTablePage');
  }

  // Function to generate breadcrumb items
  // const generateBreadcrumbs = () => {
  //  // const path = router.App.split("/").filter(Boolean); // Split path into segments
  //   return (
  //     <>
  //       <Breadcrumb.Item>
  //         <Link href="/">
  //           <a>Home</a>
  //         </Link>
  //       </Breadcrumb.Item>
  //       {path.map((segment, index) => {
  //         const href = "/" + path.slice(0, index + 1).join("/");
  //         return (
  //           <Breadcrumb.Item key={href}>
  //             <Link href={href}>
  //               <a>{segment.charAt(0).toUpperCase() + segment.slice(1)}</a>
  //             </Link>
  //           </Breadcrumb.Item>
  //         );
  //       })}
  //     </>
  //   );
  // };

  return (
    
    <div className="merge-page">
      {/* Breadcrumb Component */}


      <p className="heading">Master Name Index</p>
      <h3 className="sub-heading">Master Name Record Merge</h3>
      <FilterPopup />
      <p className="form-heading">Primary Master Name Record</p>
      <div className="sub-container">
        <div className="form">
          <Form1 changePage={changePage} />
        </div>
        <VerticalLineWithDrawer />
      </div>
    </div>
  );
}
