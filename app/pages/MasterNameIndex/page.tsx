import CustomTable from '../../components/Table/table.tsx';
import SearchForm from '../../components/SearchForm/SearchForm.tsx'
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />




const HomePage: React.FC = () => (
  <div>
    <h3>
    {/* this is to be taken from breadcrumbs */}
        Master Name Index 
    </h3>
    <SearchForm>
      
    </SearchForm>
    <CustomTable />
  </div>
);

export default HomePage;
