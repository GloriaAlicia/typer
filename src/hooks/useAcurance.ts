import { useContext, useEffect } from 'react';
import { Context } from '../context';

export const useAcurance = (typed: string) => {
  const { acurance, setAcurance, letters } = useContext(Context);

  useEffect(() => {
    letters?.forEach((el) => {
      if (el?.state === 'error') {
        setAcurance(acurance + 1);
      }
    });
  }, [typed]);
  console.log('acurance: ', acurance);
};
