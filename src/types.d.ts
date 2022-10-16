interface Props {
  children?: ReactNode;
}
interface ContextInterface {
  acurance: number;
  setAcurance: React.Dispatch<React.SetStateAction<number>>;
  letters: letter[];
  setLetters: React.Dispatch<React.SetStateAction<letter[]>>;
}
type letter = {
  id: string;
  letter: string;
  state: string;
};
