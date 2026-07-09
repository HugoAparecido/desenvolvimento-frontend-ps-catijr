import { Music } from "./features/music/components/Music";
import { RightClickMusicOptions } from "./features/music/components/RightClickMusicOptions";

function App() {
  return <>
    <div className="bg-black">
      <Music
        title="Shape of You"
        id="1"
        imageUrl="/public/mock-images/image_20.png"
        totalTime={233}
        totalViews={5000000}
        saved={false}
        onClick={() => console.log("Música clicada!")}
      />

      <RightClickMusicOptions />
    </div>
  </>;
}

export default App;
