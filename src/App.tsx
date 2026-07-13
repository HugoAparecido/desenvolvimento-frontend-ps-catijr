import { MiniMusicInformation } from "./features/music/components/MiniMusicInformation";

function App() {
  return <>
    <div className="bg-black">
      <MiniMusicInformation artistName="Hugo" imagePath="mock-images/image_20.png"
        musicName="Gol" toAlbum="https://github.com/"
        toArtist="https://github.com/"
        parentIsFull={false}
      />
    </div>
  </>;
}

export default App;
