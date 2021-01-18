import React from 'react';
import Input from './input';
import {IInputItem} from '../types';

interface IInputList {
  data: IInputItem[];
}

const InputList: React.FC<IInputList> = ({data}) => {
  const renderItem = (item: IInputItem) => (
    <Input
      key={item.inputPlaceholder}
      inputPlaceholder={item.inputPlaceholder}
      type={item.type}
      onChangeText={item.onChangeText}
    />
  );
  return <>{data.map(renderItem)}</>;
};

export default InputList;
