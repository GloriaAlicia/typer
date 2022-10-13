import { Timer } from '../hooks/timer';

export const CounterTimer = () => {
  const { time, setTime } = Timer(0);

  return (
    <section>
      <span> {time} </span>
      <button onClick={() => setTime(30)} disabled={time > 0}>
        Init timer
      </button>
    </section>
  );
};
