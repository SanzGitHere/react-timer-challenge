import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime }, ref) {
  const dialog = useRef();
  const [didWin, setDidWin] = useState(null);

  useImperativeHandle(ref, () => ({
    open(result) {
      setDidWin(result);
      dialog.current?.showModal();
    }
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>{didWin ? 'You Won!' : 'You Lost 😢'}</h2>
      <p>
        {didWin
          ? 'Congratulations! You stopped the timer in time.'
          : 'Better luck next time! Try again.'}
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
