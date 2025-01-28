"use client"; // Add this to mark the component as a client-side component
import "./form2.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MainButton from "../mainButton/button";
import { SearchOutlined } from "@ant-design/icons";

interface FormValues {
  Fkey: number;
  caseNumber: string;
  date: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: null;
  dob: string;
  cases: number;
  sex: string;
  race: string;
  height: string;
  weight: string;
  id: string;
  phoneNumber: string;
  address: string;
}

interface Form1Props {
  // isShown: boolean;
  // setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  handleSearchClick?: () => void;
}

const Form1: React.FC<Form1Props> = ({ handleSearchClick }) => {
  const router = useRouter();
  const [primaryRecord, setPrimaryRecord] = useState<any[]>([]);
  const [formValues, setFormValues] = useState<FormValues>({
    Fkey: 1,
    caseNumber: "",
    date: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: null,
    dob: "",
    cases: 2,
    sex: "",
    race: "",
    height: "",
    weight: "",
    id: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const record = sessionStorage.getItem("record");
      if (record) {
        const parsedRecord = JSON.parse(record);
        setPrimaryRecord(parsedRecord.secondaryRecord || []);
      }
    }
  }, []);

  useEffect(() => {
    if (primaryRecord && primaryRecord.length > 0) {
      const record = primaryRecord[0]; // Assuming you want to fill the form with the first record
      setFormValues({
        Fkey: record.Fkey,
        caseNumber: record.caseNumber,
        date: record.date,
        firstName: record.firstName,
        middleName: record.middleName,
        lastName: record.lastName,
        suffix: record.suffix,
        dob: record.dob,
        cases: record.cases,
        sex: record.sex,
        race: record.race,
        height: record.height,
        weight: record.weight,
        id: record.id,
        phoneNumber: record.phoneNumber,
        address: record.address,
      });
    }
  }, [primaryRecord]); // This will run whenever primaryRecord changes

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  function handlePage() {
    router.push("/pages/MasterTablePage");
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted"); // Placeholder logic
    if (handleSearchClick) {
      handleSearchClick(); // Execute search click logic
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form form-search">
        <p className="search">Search</p>
      </div>

      <div className="form wildcard">
        <label className="label">Wildcard</label>
        <input
          className="input"
          type="text"
          name="Fkey"
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
            value={formValues.suffix || ""}
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
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="physical space-y-4">
        <div className="sex-race flex space-x-6">
          <div className="form sex flex-1">
            <label className="label">Sex</label>
            <select
              className="select"
              name="sex"
              value={formValues.sex}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="form race flex-1">
            <label className="label">Race</label>
            <select
              className="select"
              name="race"
              value={formValues.race}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="W">White</option>
              <option value="B">Black</option>
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
      <p className="search">Address</p>

      <div className="address">
        <div className="form street">
          <label className="label">City</label>
          <input
            className="input2"
            type="text"
            name="Id"
            value=""
            onChange={handleChange}
          />
        </div>
        <div className="form street">
          <label className="label">State</label>
          <select className="select">
            <option></option>
          </select>
        </div>
        <div className="form street">
          <label className="label">Zip Code</label>
          <input
            className="input2"
            type="text"
            name="Id"
            value=""
            onChange={handleChange}
          />
        </div>
        <div className="form street">
          <label className="label">Country</label>
          <input
            className="input2"
            type="text"
            name="Id"
            value=""
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="address">
        <div className="form street">
          <label className="label">City</label>
          <input
            className="input2"
            type="text"
            name="Id"
            value=""
            onChange={handleChange}
          />
        </div>
        <div className="form street">
          <label className="label">State</label>
          <select className="select">
            <option></option>
          </select>
        </div>
        <div className="form street">
          <label className="label">Zip Code</label>
          <input
            className="input2"
            type="text"
            name="Id"
            value=""
            onChange={handleChange}
          />
        </div>
        <div className="form street">
          <label className="label">Country</label>
          <input
            className="input2"
            type="text"
            name="Id"
            value=""
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="button-container">
        <MainButton handleClick={handlePage} icon={<SearchOutlined />}>
          search
        </MainButton>
      </div>
    </form>
  );
};

export default Form1;
