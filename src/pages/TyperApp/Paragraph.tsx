import { useContext } from 'react';
import { Context } from '../../context';

export const Paragraph = () => {
  const { letters } = useContext<ContextInterface>(Context);

  const classCSS = (state: string) => {
    if (state === 'normal') return 'text-gray-900';
    if (state === 'correct') return 'text-green-600';
    if (state === 'error') return 'text-pink-800';
  };

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
