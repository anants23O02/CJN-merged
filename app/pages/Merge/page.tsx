
import './page.css'
import MasterTable from '../../components/MasterTable2/MasterTable2';
import Form1 from '../../components/form2/form2';
import Button1 from '../../components/buttonSelect/buttonSelect';
import CaseCard from '../../components/casecard/casecard';
export default function Home() {

  return (

    <div className="main">
      <div className='merge-page'>
        <p className='heading'>Master Name Index</p>
        <h3 className='sub-heading'>Master Name Record Merge</h3>
        <p className="table-heading">Select Name</p>
        <CaseCard />

      <div className="table-head">

        <p className="table-heading">Comparable Record</p>
        <p className='select'>Select Name </p>
        <div className="table">
          <MasterTable />
        </div>
        <div className='button-container'>
          <Button1 />
        </div>
      </div>
      </div>

    </div>


  );
}