import { MenuProps } from 'antd';
import { ReactNode } from 'react';

export interface CaseCardProps {
  value?: number | string; // Numeric or string value to determine background color
  data?: {
    firstName: string;
    middleName?: string; // Optional
    lastName: string;
    suffix?: string; // Optional
    dob: string;
    cases:number
  };
  children?: ReactNode; 
  actions?: MenuProps['items']; 
  type:string;
}

