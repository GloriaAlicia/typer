import { useContext, useEffect, useState } from 'react';
import { Context } from '../context';

type letter =
  | {
      id: string;
      letter: string;
      state: string;
    }
  | undefined;

export const useCheckAcurance = (typed: string) => {
  // const [accuracy, setAccuracy] = useState<number>(0);
  const [actual, setActual] = useState<letter>({} as letter);
  const { letters, setLetters } = useContext(Context);

  useEffect(() => {
    const actual = letters.find((letter, index) => index === typed.length - 1);
    actual ?? setActual(actual);

    const typedUser = typed.charAt(typed.length - 1);

    if (actual?.letter === typedUser) {
      setLetters((prev) => {
        return prev.map((el) =>
          el.id === actual?.id ? { ...el, state: 'correct' } : el
        );
      });
    } else {
      setLetters((prev) => {
        return prev.map((el) =>
          el.id === actual?.id ? { ...el, state: 'error' } : el
        );
      });
    }

    // console.log('actual: ', actual, 'user: ', typed.length - 1, typedUser);
  }, [typed]);
};
