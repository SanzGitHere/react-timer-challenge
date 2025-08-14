import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timerRef = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000); // milliseconds
  const intervalIdRef = useRef(null);

  function startTimer() {
    if (intervalIdRef.current) return; // prevent multiple intervals
    setTimeRemaining(targetTime * 1000);

    const startTime = Date.now();
    intervalIdRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const remaining = Math.max(targetTime * 1000 - elapsedTime, 0);
      setTimeRemaining(remaining);

      if (remaining === 0) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        timerRef.current?.open(false); // lost because time ran out
      }
    }, 100);
  }

  function stopTimer() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    timerRef.current?.open(timeRemaining > 0); // win if still time left
  }

  const seconds = (timeRemaining / 1000).toFixed(2);

  return (
    <div className="challenge">
      <ResultModal ref={timerRef} targetTime={targetTime} />
      <h2>{title}</h2>
      <p className="challenge-time">
        <span className="time">{seconds}</span> seconds
      </p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
