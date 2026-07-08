import { SearchBar } from "./features/explore/components/SearchBar";

function App() {
  return <>
    <div className="bg-black p-4 min-h-screen">
      <SearchBar onSearch={(results) => console.log("Search results:", results)} />
    </div>
  </>;
}

export default App;
