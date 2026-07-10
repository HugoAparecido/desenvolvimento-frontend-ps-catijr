import { FollowingButton } from "./components/ui/buttons/FollowingButton";
import { ArtistPopularSongs } from "./features/artist/components/ArtistPopularSongs";
import { SearchBar } from "./features/explore/components/search/SearchBar";
import { RightClickMusicOptions } from "./features/music/components/action/RightClickMusicOptions";

function App() {

  return <>
    <div className="bg-black">
      <RightClickMusicOptions />
      <ArtistPopularSongs artistId={1} />
      <FollowingButton isFollowing={true} onClick={() => console.log("Click")} unfollow={false} />
      <SearchBar onSearch={(test) => console.log(test)} />
    </div>
  </>;
}

export default App;
