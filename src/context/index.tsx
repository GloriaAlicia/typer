import { createContext, useState, ReactNode, FC } from 'react';

export const Context = createContext({});

interface Props {
  children?: ReactNode;
}

export const Provider: FC<Props> = ({ children }) => {
  const [init, setInit] = useState(false);
  const values = {
    init,
    setInit,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
