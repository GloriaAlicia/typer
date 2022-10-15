import { useContext } from 'react';
import { Context } from '../context';

interface ContextInterface {
  letters: letter[];
  setLetters: React.Dispatch<React.SetStateAction<letter[]>>;
}
type letter = {
  id: string;
  letter: string;
  state: string;
};
export const Paragraph = () => {
  const { letters } = useContext<ContextInterface>(Context);

  const classCSS = (state: string) => {
    if (state === 'normal') return 'text-gray-900';
    if (state === 'correct') return 'text-green-600';
    if (state === 'error') return 'text-pink-800';
  };
  // console.log('parrafo rerenderizado');
  console.log(letters);

  return (
    <>
      <label htmlFor="typedUser">
        {letters.map((obj) => (
          <span key={obj.id} className={classCSS(obj.state)}>
            {obj.letter}
          </span>
        ))}
      </label>
    </>
  );
};
