
import React, { useState } from 'react';
import Select from 'react-select';

interface IProps {
  className: string;
  options: any;
  placeholder?: string;
  selectedOption: string;
  setSelectedOption: (value: Option) => void;
}

export type Option = {
  label: string;
  value: string;
}

const CustomSelect = (props: IProps) => {
  const{
    className,
    options = [],
    placeholder = '',
    selectedOption, 
    setSelectedOption
  } = props;
  
  const onChange = (newValue: unknown) => {
    setSelectedOption(newValue as Option);
  }

  return (
    <div className="App">
      <Select
        className={className}
        onChange={onChange}
        options={options}
        defaultValue={selectedOption}
        placeholder={placeholder} 
      />
    </div>
  );
}

export default CustomSelect