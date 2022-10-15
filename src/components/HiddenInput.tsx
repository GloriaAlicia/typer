import { useState } from 'react';
import { useCheckAcurance } from '../hooks/useCheckAcurance';
import { Paragraph } from './Paragraph';

// interface InputBoxProps {
//   value: string | undefined;
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// }

export const HiddenInput = () => {
  const [typed, setText] = useState('');
  useCheckAcurance(typed);

  const handleInputChange = ({
    currentTarget,
  }: {
    currentTarget: HTMLInputElement;
  }) => setText(currentTarget.value);

  return (
    <>
      <input
        autoComplete="off"
        value={typed}
        id="typedUser"
        autoFocus={true}
        onChange={handleInputChange}
      />
    </>
  );
};
