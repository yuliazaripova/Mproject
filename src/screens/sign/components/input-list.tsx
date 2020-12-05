import React from 'react';
import Input from './input';

interface inputItem {
  inputPlaceholder: string;
  type: 'email' | 'name' | 'password';
}

interface IInputList {
  data: inputItem[];
}

const InputList: React.FC<IInputList> = ({data}) => {
  const renderItem = (item: inputItem) => (
    <Input
      key={item.inputPlaceholder}
      inputPlaceholder={item.inputPlaceholder}
      type={item.type}
    />
  );
  return <>{data.map(renderItem)}</>;
};

export default InputList;
