import { SearchResultItem } from "./features/explore/components/search/result/components/SearchResultItem";
import { mockResultItems } from "./features/explore/hooks/useSearchResultItem";
import { Navbar } from "./features/explore/NavBar";
import { Player } from "./features/player/Player";

function App() {
  return <>
    <div className="bg-black">
      <Navbar />
      {mockResultItems.map((item) => (
        <SearchResultItem item={item} key={item.itemID} />
      ))}
      <Player />
    </div>
  </>;
}

export default App;
