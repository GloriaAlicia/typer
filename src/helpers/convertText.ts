import { v4 as uuid } from 'uuid';

export const convertText = (originalText: string) => {
  const convertText = Array.from(originalText);

  return convertText.map((letter) => ({
    letter: letter,
    id: uuid(),
    state: 'normal',
  }));
};
