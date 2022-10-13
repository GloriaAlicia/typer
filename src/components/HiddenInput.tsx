import { useState } from 'react';
import { checkText } from '../hooks/check';

export const HiddenInput = () => {
  const [typed, setText] = useState('');

  const handleInputChange = ({
    currentTarget,
  }: {
    currentTarget: HTMLInputElement;
  }) => {
    setText(currentTarget.value);
  };

  return (
    <input
      name="task"
      placeholder="type"
      autoComplete="off"
      maxLength={150}
      value={typed}
      id={'12'}
      autoFocus={true}
      onChange={handleInputChange}
    />
  );
};
