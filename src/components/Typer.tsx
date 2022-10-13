import { useState } from 'react';
import { convertText } from '../helpers/convertText';
import { checkText } from '../hooks/check';
import { getText } from '../hooks/getText';
import { HiddenInput } from './HiddenInput';
import { Paragraph } from './Paragraph';

export const Typer = () => {
  const [typed, setText] = useState('');
  // checkText(originalText, typed);
  // comparar index, valor 'p' -> typed 'k'

  const originalText = 'lorem ipsum dolor sit amet';
  const letters = convertText(originalText);

  return (
    <section>
      <Paragraph render={letters} />
      <HiddenInput />
    </section>
  );
};
