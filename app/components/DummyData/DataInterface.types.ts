export interface DataType {
    key: string;
    lastName: string;
    firstName: string;
    middleName: string | null;
    suffix: string | null;
    dob: string;
    age: number;
    address: string;
    city: string;
    state: string;
    rowColor?: string;
    recordValue?:string;
  }