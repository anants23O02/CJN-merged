"use client"
import React, { useState } from 'react';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
  disableCheckbox?: boolean;
}

interface CascaderProps {
  options: Option[];
  multiple: boolean;
  maxTagCount?: number | 'responsive';
  style?: React.CSSProperties;
}

const CustomCascader: React.FC<CascaderProps> = ({ options, multiple, maxTagCount, style }) => {
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>([]);

  const handleSelect = (value: string | number, isChecked: boolean) => {
    setSelectedValues((prevSelectedValues) => {
      if (isChecked) {
        return [...prevSelectedValues, value]; // Add value if checked
      } else {
        return prevSelectedValues.filter((item) => item !== value); // Remove value if unchecked
      }
    });
  };

  const renderOptions = (options: Option[], level: number = 0): React.ReactNode => {
    return options.map((option) => {
      // Render each option using React.createElement instead of JSX
      const childrenElements = option.children && option.children.length > 0 ? renderOptions(option.children, level + 1) : null;

      return React.createElement(
        'div',
        { key: option.value, style: { marginLeft: level * 20 } },
        React.createElement(
          'label',
          null,
          React.createElement('input', {
            type: 'checkbox',
            disabled: option.disableCheckbox,
            checked: selectedValues.includes(option.value),
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              handleSelect(option.value, e.target.checked),
          }),
          option.label
        ),
        childrenElements
      );
    });
  };

  return React.createElement(
    'div',
    { style },
    renderOptions(options),
    multiple &&
      selectedValues.length > 0 &&
      React.createElement(
        'div',
        null,
        React.createElement('strong', null, 'Selected: '),
        selectedValues
          .slice(0, maxTagCount === 'responsive' ? 5 : (maxTagCount || 10))
          .join(', '),
        selectedValues.length > (maxTagCount === 'responsive' ? 5 : (maxTagCount || 10)) &&
          '...'
      )
  );
};

const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20)
      .fill(null)
      .map((_, index) => ({ label: `Number ${index}`, value: index })),
  },
  {
    label: 'Name',
    value: 'Name',
    children: [
      {
        label: 'LastName',
        value: 'LastName',
        children: [
          {
            label: 'Middle Name',
            value: 'Middle Name',
            disableCheckbox: true,
          },
          {
            label: 'DOB',
            value: 'ID',
          },
          {
            label: 'ID',
            value: 'ID',
          },
        ],
      },
    ],
  },
];

const Cascade2: React.FC = () => {
  return React.createElement(CustomCascader, {
    style: { width: '60%' },
    options,
    multiple: true,
    maxTagCount: 'responsive',
  });
};

export default Cascade2;
