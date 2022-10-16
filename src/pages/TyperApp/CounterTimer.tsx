import { useTimer } from '../../hooks/useTimer';

export const CounterTimer = () => {
  const { time, setTime } = useTimer(0);

  return (
    <section>
      <span> {time} </span>
      <button onClick={() => setTime(30)} disabled={time > 0}>
        Init timer
      </button>
    </section>
  );
};
