
import './page.css'
import MasterTable from "../../components/MasterTable/MasterTable";
import Form1 from '../../components/form2/form2';
export default function Home() {
    
  return (
    
     <div className="main">
          <div className='merge-page'>
     <p className='heading'>Master Name Index</p>
     <h3 className='sub-heading'>Master Name Record Merge</h3>
     <p className="table-heading">Select Name</p>
  
    </div>
     <div className="form">
     <Form1/>
     </div>
     </div>
      
    
  );
}