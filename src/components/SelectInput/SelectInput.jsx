import React from 'react';
import { SelectInputStyled } from 'stylesheet/Input/Input.styled';
import { Select } from 'antd';

const SelectStyle = {
  border: '1px solid #1c1d1f',
  width: '100%',
  height: '44px',
  //   padding: "10px 12px",
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#1c1d1f',
  '&:hover,&:focus,&:active': {
    borderColor: '#12c88a !important'
  }
};

const { Option } = Select;

export default function SelectInput({
  defaultValue,
  options,
  disabled,
  onBlur,
  onChange,
  placeholder,
  value
}) {
  const renderOptions = options.map((child, index) => (
    <Option key={index} value={child.id}>
      {child.value}
    </Option>
  ));

  return (
    <SelectInputStyled>
      <Select
        showSearch
        placeholder={placeholder}
        style={SelectStyle}
        optionFilterProp="children"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}>
        {renderOptions}
      </Select>
    </SelectInputStyled>
  );
}
