import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Pros Only" targetTime={.5}/>
        <TimerChallenge title="Getting Tough" targetTime={1}/>
        <TimerChallenge title="Easy" targetTime={2}/>
        <TimerChallenge title="Very Easy" targetTime={5}/>
      </div>
    </>
  );
}

export default App;
