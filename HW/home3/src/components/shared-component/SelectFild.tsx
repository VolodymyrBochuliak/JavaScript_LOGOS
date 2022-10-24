
import React, { useState } from 'react';
import Select, { ActionMeta, Options, SingleValue } from 'react-select';

interface IProps {
    className: string;
    // onChange: (event: any) => void;
    options: any;
    // defaultValue: object;
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
    // onChange,
    options = [],
    // defaultValue,
    placeholder ='',
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
      />
    </div>
  );
}

export default CustomSelect