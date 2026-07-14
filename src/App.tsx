import { SearchResultItemTag } from "./features/explore/components/search_result/SearchResultItemTag";
import { Navbar } from "./features/explore/NavBar";
import { Player } from "./features/player/Player";

function App() {
  return <>
    <div className="bg-black">
      <Navbar />
      <SearchResultItemTag tagValue="album" />
      <SearchResultItemTag tagValue="artist" />
      <SearchResultItemTag tagValue="musica" />
      <SearchResultItemTag tagValue="playlist" />
      <Player />
    </div>
  </>;
}

export default App;
