import Board from "./components/Board";
import Player from "./components/Player";

function App() {
  return (
    <section className="App w-screen h-screen">
      <div className="flex items-end justify-center h-1/3">
        <Player />
      </div>
      <Board />
      <div className="flex items-start justify-center h-1/3">
        <Player />
      </div>
    </section>
  );
}

export default App;
