'use client'; // Add this to mark the component as a client-side component
import './form.css';
import React, { useState } from 'react';
import MainButton from "../mainButton/button"
import {useRouter} from "next/navigation"
import { CheckCircleOutlined } from "@ant-design/icons";
import { SearchOutlined } from '@ant-design/icons';
import caseData from '../DummyData/caseData';
// Define the form values types

const caseDataArray = Object.entries(caseData);
console.log(caseDataArray)
interface FormValues {
  caseNumber: string;
  date: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string ;
  dob: string;
  cases: number;
  sex: string;
  race: string;
  height: string;
  weight: string;
  id: string;
  phoneNumber: string;
  address: string;
  zip:string;
  country:string;
}

// Define the component
const Form1: React.FC = () => {


  const [formValues, setFormValues] = useState<FormValues>({
    caseNumber: '',
    date: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    dob: '',
    cases: 0,
    sex: '',
    race: '',
    height: '',
    weight: '',
    id:'',
    phoneNumber: '',
    address: '',
    zip:'',
    country:''
  });

  //const [errors, setErrors] = useState<Partial<FormValues>>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormValues({
      ...formValues,       // Spread the existing state
      [name]: value,       // Update the specific field with the new value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    // const newErrors: Partial<FormValues> = {};
    // if (!formValues.email) newErrors.email = 'Please input your email.';
    // if (!formValues.password) newErrors.password = 'Please input your password.';
    // if (formValues.password !== formValues.confirm) newErrors.confirm = 'Passwords do not match.';
    // if (!formValues.nickname) newErrors.nickname = 'Please input your nickname.';
    // if (!formValues.phone) newErrors.phone = 'Please input your phone number.';
    // // if (formValues.donation <= 0) newErrors.donation = 'Please input a valid donation amount.';
    // if (!formValues.website) newErrors.website = 'Please input your website.';
    // if (!formValues.intro) newErrors.intro = 'Please provide an intro.';
    // if (!formValues.gender) newErrors.gender = 'Please select a gender.';
    // if (!formValues.agreement) newErrors.agreement = 'You must agree to the terms.';

    // setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     console.log('Form Submitted', formValues);
  //   }
  };
  console.log('Form Submitted', formValues);

  const router = useRouter();

  function changePage() {
      router.push('/pages/MasterTablePage');
      console.log(formValues);
  }
  const handleSearch = () => {
    let matches = []; // Initialize an empty array to store the matched entries
  
    // Iterate over each form value and find the corresponding match in caseDataArray
    Object.entries(formValues).forEach(([key, formValue]) => {
      if (formValue) {
        // Filter matches based on the current key and value from the form
        const filteredMatches = caseDataArray.filter(([dataKey, dataValue]) => {
          return dataKey === key && dataValue.toString().toLowerCase() === formValue.toString().toLowerCase();
        });
  
        // Add unique matches to the matches array
        filteredMatches.forEach((match) => {
          if (!matches.some((m) => m[0] === match[0])) { // Compare based on the key
            matches.push(match);
          }
        });
      }
    });
  
    // Now, extract the IDs from the filtered matches
    let idArr = []; // This will hold the unique ids
  
    // Loop through the matches to extract the ID
    matches.forEach(([matchKey, matchValue]) => {
      // Find the id key-value pair in the caseDataArray
      const caseIdEntry = caseDataArray.find(([key, value]) => key === 'id');
      
      // If the ID is found and it's not already in idArr, add it
      if (caseIdEntry && !idArr.includes(caseIdEntry[1])) {
        idArr.push(caseIdEntry[1]); // caseIdEntry[1] is the value of 'id'
      }
    });
    router.push('/pages/MasterTablePage');
    console.log(formValues);
    sessionStorage.setItem('idArr', JSON.stringify(idArr));
    console.log(idArr); // Log the array of IDs
  
    // Add further logic after extracting the ids, if needed
  };
  
  
 
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
          //value={}
          onChange={handleChange}
        />
      </div>

      <div className="personal space-y-4">
        <div className="form wildcard">
          <label className="label">Last Name</label>
          <input
            className="input"
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">First Name</label>
          <input
            className="input"
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">Middle Name</label>
          <input
            className="input"
            type="text"
            name="middleName"
            value={formValues.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">Suffix</label>
          <input
            className="input"
            type="text"
            name="suffix"
            value={formValues.suffix}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">DOB(mm/dd/yyyy)</label>
          <input
            className="input"
            type="text"
            name="dob"
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
            name="id"
            value={formValues.id}
            onChange={handleChange}
          />
        </div>
        <div className="form phone flex-1">
          <label className="label">Phone</label>
          <input
            className="input"
            type="text"
            name="PhoneNumber"
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
              name="height"
              value={formValues.height}
              onChange={handleChange}
            />
          </div>
          <div className="form weight flex-1">
            <label className="label">Weight</label>
            <input
              className="input2"
              type="text"
              name="weight"
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
              name="address"
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
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />

        </div>
        <div className='form street'>
        <label className="label">Street Suffix</label>
            <input
              className="input2"
              type="text"
              name="address"
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
              name="address"
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
              name="zip"
              value={formValues.zip}
              onChange={handleChange}
            />

        </div>
        <div className='form street'>
        <label className="label">Country</label>
            <input
              className="input2"
              type="text"
              name="country"
              value={formValues.country}
              onChange={handleChange}
            />

        </div>

      </div>

      <div className='button-container'>


      <MainButton handleClick = {handleSearch} icon={<SearchOutlined/>}>
        <span className="button-icon"></span> Search
      </MainButton>

      
      </div>
    </form>
  );
};
export default Form1;