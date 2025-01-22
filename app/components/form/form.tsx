'use client'; // Add this to mark the component as a client-side component
import './form.css';
import React, { useState } from 'react';
import MainButton from "../mainButton/button"
import {useRouter} from "next/navigation"
// Define the form values types
interface FormValues {
  email: string;
  password: string;
  confirm: string;
  nickname: string;
  phone: string;
  donation: number;
  website: string;
  intro: string;
  gender: string;
  agreement: boolean;
}

// Define the component
const Form1: React.FC = () => {


  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    confirm: '',
    nickname: '',
    phone: '',
    donation: 0,
    website: '',
    intro: '',
    gender: '',
    agreement: false,
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

    // Form validation
    const newErrors: Partial<FormValues> = {};
    if (!formValues.email) newErrors.email = 'Please input your email.';
    if (!formValues.password) newErrors.password = 'Please input your password.';
    if (formValues.password !== formValues.confirm) newErrors.confirm = 'Passwords do not match.';
    if (!formValues.nickname) newErrors.nickname = 'Please input your nickname.';
    if (!formValues.phone) newErrors.phone = 'Please input your phone number.';
    // if (formValues.donation <= 0) newErrors.donation = 'Please input a valid donation amount.';
    if (!formValues.website) newErrors.website = 'Please input your website.';
    if (!formValues.intro) newErrors.intro = 'Please provide an intro.';
    if (!formValues.gender) newErrors.gender = 'Please select a gender.';
    // if (!formValues.agreement) newErrors.agreement = 'You must agree to the terms.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted', formValues);
    }
  };

  const router = useRouter();

  function changePage() {
      router.push('/pages/MasterTablePage');
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
          value={formValues.password}
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
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">First Name</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">Middle Name</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">Suffix</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="form wildcard">
          <label className="label">DOB(mm/dd/yyyy)</label>
          <input
            className="input"
            type="text"
            name="Id"
            value={formValues.password}
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
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="form phone flex-1">
          <label className="label">Phone</label>
          <input
            className="input"
            type="text"
            name="Phone"
            value={formValues.password}
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
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="form weight flex-1">
            <label className="label">Weight</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.password}
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
              value={formValues.password}
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
              value={formValues.password}
              onChange={handleChange}
            />

        </div>
        <div className='form street'>
        <label className="label">Street Suffix</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.password}
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
              value={formValues.password}
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
              value={formValues.password}
              onChange={handleChange}
            />

        </div>
        <div className='form street'>
        <label className="label">Country</label>
            <input
              className="input2"
              type="text"
              name="Id"
              value={formValues.password}
              onChange={handleChange}
            />

        </div>

      </div>

      <div className='button-container'>


      <MainButton handleClick = {changePage}>
        <span className="button-icon"></span> Search
      </MainButton>

      
      </div>
    </form>
  );
};

export default Form1;