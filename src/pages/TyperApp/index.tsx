import { CounterTimer } from './CounterTimer';
import { HiddenInput } from './HiddenInput';
import { Paragraph } from './Paragraph';

export const TyperApp = () => {
  return (
    <main>
      <h1>Test your typing skills</h1>
      <CounterTimer />
      <Paragraph />
      <HiddenInput />
    </main>
  );
};
