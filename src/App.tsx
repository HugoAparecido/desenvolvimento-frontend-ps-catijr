import { MiniMusicInformation } from "./features/music/components/MiniMusicInformation";
import { ControlPlay } from "./features/player/components/ControlPlay";
import { ProgressBar } from "./features/player/components/ProgressBar";

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
      <ProgressBar currentTime={90} fullTime={180} />
    </div>
  </>;
}

export default App;
