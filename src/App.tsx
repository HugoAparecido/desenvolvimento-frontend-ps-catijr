import { Navbar } from "./features/explore/NavBar";
import { Player } from "./features/player/Player";

function App() {
  return <>
    <div className="bg-black">
      <Navbar />
      <Player />
    </div>
  </>;
}

export default App;
