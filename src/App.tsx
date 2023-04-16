import ActionButton from "./components/ActionButton";
import BetSlider from "./components/BetSlider";
import Board from "./components/Board";
import Player from "./components/Player";

function App() {
  return (
    <section className="App w-screen h-screen relative">
      <div className="flex items-end justify-center h-1/3">
        <Player name={"Player 1"} balance={40.23} />
      </div>
      <Board />
      <div className="flex items-start justify-center h-1/3">
        <Player name={"Player 2"} balance={100.0} />
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="mb-5">
          <BetSlider minValue={10} maxValue={100} value={10} />
        </div>
        <div className="flex gap-5 justify-around">
          <ActionButton action={"fold"} />
          <ActionButton action={"call"} />
          <ActionButton action={"raise"} />
        </div>
      </div>
    </section>
  );
}

export default App;
