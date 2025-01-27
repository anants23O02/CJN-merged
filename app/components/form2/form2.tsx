'use client'; // Add this to mark the component as a client-side component
import './form2.css';
import React, { useState,useEffect } from 'react';
import {useRouter} from 'next/navigation';
import Button1 from '../button/button';
import MainButton from '../mainButton/button'
import { SearchOutlined } from '@ant-design/icons';
import caseData from '../DummyData/caseData2';
// Define the form values types
interface FormValues {
  Fkey:number, 
  caseNumber: string,
  date: string,
  firstName: string,
  middleName: string,
  lastName: string,
  suffix: null,
  dob: string,
  cases: number,
  sex: string,
  race: string,
  height: string,
  weight: string,
  id: string,
  phoneNumber: string,
  address: string,
}
interface Form1Props {
  handleSearchClick: () => void; // Define the prop for handling search button click
}

// Define the component
const Form1: React.FC<Form1Props> = ({ handleSearchClick }) => {
   const router=useRouter();
    function changePage() {
      router.push('/pages/Merge');
  }
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   handleSearchClick();
  //   router.push('/pages/MasterTablePage'); // Trigger the toggle to MasterTable
  // }
  const [primaryRecord, setPrimaryRecord] = useState<any[]>([]);
  const [comparableRecord, setComparableRecord] = useState<any[]>([]);
// useEffect(() => {
//   if (typeof window !== "undefined") {
//     const record = sessionStorage.getItem("record");
    
//       const parsedRecord = JSON.parse(record);
//       console.log(parsedRecord);
//       setPrimaryRecord(parsedRecord.secondaryRecord || []); 
//       setComparableRecord(parsedRecord.comparableRecord || []);
    
//   }
// }, []);
  const [formValues, setFormValues] = useState<FormValues>({
    Fkey:1, 
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
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormValues({
      ...formValues,
      
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     {handleSearchClick}
    // Form validation
  };

  function handlePage() {
    
   
    router.push('/pages/MasterTablePage');
    {handleSearchClick}
  }
 
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form form-search">
        <p className='search'>Search</p>
      </div>

      <div className="form wildcard">
        <label className="label">Wildcard</label>
        <input
          className="input"
          type="text"
          name="Id"
          value={formValues.Fkey}
          onChange={handleChange}
        />
      </div>

      <div className="personal space-y-4">
        <div className="form wildcard">
          <label className="label">Last Name</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">First Name</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">Middle Name</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">Suffix</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.suffix}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">DOB(mm/dd/yyyy)</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.dob}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="phone-id">
        <div className="form id flex-1">
          <label className="label">ID</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.id}
            onChange={handleChange}
          />
        </div>
        <div className="form phone flex-1">
          <label className="label">Phone</label>
          <input
            className="input"
            type="text"
            name="Phone"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="physical space-y-4">
        <div className="sex-race flex space-x-6">
          <div className="form sex flex-1">
            <label className="label">Sex</label>
            <select className='select'>
                <option>

                </option>
            </select>
          </div>
          <div className="form race flex-1">
            <label className="label">Race</label>
            <select className='select'>
                <option>

                </option>
            </select>
          </div>
        </div>
        <div className="height-weight flex space-x-6">
          <div className="form height flex-1">
            <label className="label">Height</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.height}
              onChange={handleChange}
            />
          </div>
          <div className="form weight flex-1">
            <label className="label">Weight</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.weight}
              onChange={handleChange}
            />
          </div>
        </div>
        
      </div>
      <p className='search'>Address</p>

      <div className='address'>
        <div className='form street'>
        <label className="label">Street Number</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.address}
              onChange={handleChange}
            />

        </div>
        <div className='form street'>
        <label className="label">Street Prefix</label>
            <select className='select'> 
              <option>

              </option>
            </select>

        </div>
        <div className='form street'>
        <label className="label">Street</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.address}
              onChange={handleChange}
            />

        </div>
        <div className='form street'>
        <label className="label">Street Suffix</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.address}
              onChange={handleChange}
            />

        </div>

      </div>
      <div className='address'>
        <div className='form street'>
        <label className="label">City</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.address}
              onChange={handleChange}
            />

        </div>
        <div className='form street'>
        <label className="label">State</label>
            <select className='select'> 
              <option>

              </option>
            </select>

        </div>
        <div className='form street'>
        <label className="label">Zip Code</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.address}
              onChange={handleChange}
            />

        </div>
        <div className='form street'>
        <label className="label">Country</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.address}
              onChange={handleChange}
            />

        </div>

      </div>

      <div className='button-container'>
      <MainButton handleClick={handlePage} icon={<SearchOutlined/>}>
        search
      </MainButton>
      </div>
    </form>

  );
};

export default Form1;