import { SearchBar } from "./features/explore/components/SearchBar";

function App() {
  return <>
    <div className="bg-black">
      <SearchBar onSearch={(results) => console.log("Search results:", results)} />
    </div>
  </>;
}

export default App;
