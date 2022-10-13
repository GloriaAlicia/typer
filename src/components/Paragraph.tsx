type props = {
  render: letter[];
};

type letter = {
  id: string;
  letter: string;
};

export const Paragraph = ({ render }: props) => {
  return (
    <p>
      {render.map((obj) => (
        <span key={obj.id}> {obj.letter} </span>
      ))}
    </p>
  );
};
