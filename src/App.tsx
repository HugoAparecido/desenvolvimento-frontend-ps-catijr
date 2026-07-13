import { MiniMusicInformation } from "./features/music/components/MiniMusicInformation";
import { ControlPlay } from "./features/player/components/ControlPlay";

function App() {

  return <>
    <div className="bg-black">
      <MiniMusicInformation artistName="Hugo" imagePath="mock-images/image_20.png"
        musicName="Gol" toAlbum="https://github.com/"
        toArtist="https://github.com/"
        parentIsFull={false}
      />
      <ControlPlay isPlaying={false} nextPathMusicClick={() => { }}
        onTogglePlay={() => { }} previousPathMusicClick={() => { }} />
    </div>
  </>;
}

export default App;
