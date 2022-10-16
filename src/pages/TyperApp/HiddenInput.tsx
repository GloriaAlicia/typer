import { useState } from 'react';
import { useAcurance } from '../../hooks/useAcurance';
import { useCheckText } from '../../hooks/useCheckText';

export const HiddenInput = () => {
  const [typed, setText] = useState('');
  useCheckText(typed);
  // useAcurance(typed);

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
