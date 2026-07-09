import { ArtistPopularSongs } from "./features/artist/components/ArtistPopularSongs";

function App() {
  return <>
    <div className="bg-black">
      <ArtistPopularSongs artistId={2} />
    </div>
  </>;
}

export default App;
