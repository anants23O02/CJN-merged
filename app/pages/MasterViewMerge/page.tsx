import FilterPopup from "../../components/modal/modal";
import CaseCard from "../../components/casecard/casecard";

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

const NewPage: React.FC = () => {
  return (
    <div>
      <h3>
        Master Name Index
      </h3>
      <FilterPopup />
      <CaseCard
        firstName="Timothy"
        middleName="James"
        lastName="Taylor"
        suffix={null}
        dob="12/13/1989"
        cases={2}
      />
      <CaseCard
        firstName="Timothy"
        middleName="James"
        lastName="Taylor"
        suffix={null}
        dob="12/13/1989"
        cases={2}
      />
    </div>
  );
};

export default NewPage;
