import { MiniMusicInformation } from "./features/music/components/MiniMusicInformation";
import { PlayButtonPlayer } from "./features/player/components/buttons/PlayButtonPlayer";

function App() {
  return <>
    <div className="bg-black">
      <MiniMusicInformation artistName="Hugo" imagePath="mock-images/image_20.png"
        musicName="Gol" toAlbum="https://github.com/"
        toArtist="https://github.com/"
        parentIsFull={false}
      />
      <PlayButtonPlayer isPlaying={true} onClick={() => { }} />
    </div>
  </>;
}

export default App;
