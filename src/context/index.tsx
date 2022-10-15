import { createContext, useState, ReactNode, FC } from 'react';
import { convertText } from '../helpers/convertText';

interface Props {
  children?: ReactNode;
}
interface ContextInterface {
  letters: letter[];
  setLetters: React.Dispatch<React.SetStateAction<letter[]>>;
}
type letter = {
  id: string;
  letter: string;
  state: string;
};

export const Context = createContext<ContextInterface>({} as ContextInterface);

export const Provider: FC<Props> = ({ children }) => {
  const originalText = 'lorem ipsum dolor sit amet';
  const [letters, setLetters] = useState(convertText(originalText));

  // const [init, setInit] = useState(false);
  const values: ContextInterface = {
    letters,
    setLetters,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
