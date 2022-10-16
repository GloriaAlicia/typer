import { useContext, useEffect } from 'react';
import { Context } from '../context';

export const useCheckText = (typed: string) => {
  const { letters, setLetters } = useContext(Context);

  const modifyState = (actual: letter | undefined, typedUser: string) => {
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
  };

  useEffect(() => {
    const actual: letter | undefined = letters.find(
      (l, index) => index === typed.length - 1
    );
    const typedUser = typed.charAt(typed.length - 1);
    modifyState(actual, typedUser);

    console.log('actual: ', actual?.letter, 'user: ', typedUser);
  }, [typed]);
};
