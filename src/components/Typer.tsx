import { useState } from 'react';
import { checkText } from '../hooks/check';
import { getText } from '../hooks/getText';

export const Typer = () => {
  const originalText = 'lorem ipsum dolor sit amet';
  const [typed, setText] = useState('');
  checkText(originalText, typed);

  const handleInputChange = ({
    currentTarget,
  }: {
    currentTarget: HTMLInputElement;
  }) => {
    setText(currentTarget.value);
  };

  return (
    <div>
      <p> {originalText} </p>

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
    </div>
  );
};
