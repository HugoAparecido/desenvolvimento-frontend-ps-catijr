import { RightClickArtistOptions } from "./features/artist/components/action/RightClickArtistOptions";
import { RightClickMusicOptions } from "./features/music/components/action/RightClickMusicOptions";
import { RightClickPlaylistOptions } from "./features/playlist/components/action/RightClickPlaylistOptions";

function App() {
  return <>
    <RightClickArtistOptions />
    <RightClickPlaylistOptions />
    <RightClickMusicOptions />
  </>;
}

export default App;
