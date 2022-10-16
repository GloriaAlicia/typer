import { createContext, useState, ReactNode, FC } from 'react';
import { convertText } from '../helpers/convertText';

export const Context = createContext<ContextInterface>({} as ContextInterface);

export const Provider: FC<Props> = ({ children }) => {
  const originalText = 'lorem ipsum dolor sit amet';
  const [letters, setLetters] = useState(convertText(originalText));
  const [acurance, setAcurance] = useState<number>(0);

  const values: ContextInterface = {
    acurance,
    setAcurance,
    letters,
    setLetters,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
