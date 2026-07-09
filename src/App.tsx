import { Music } from "./features/music/components/Music";

function App() {
  return <>
    <div className="bg-black">
      <Music
        title="Song Title"
        id="1"
        imageUrl="/public/mock-images/image_20.png"
        totalTime={240}
        totalViews={1000}
        saved={true}
        explicit={true}
        onClick={() => console.log("Song clicked")}
        onClickSave={() => console.log("Save button clicked")}
      />
    </div>
    <div className="bg-black">
      <Music
        title="Song Title"
        id="1"
        imageUrl="/public/mock-images/image_20.png"
        totalTime={240}
        totalViews={1000}
        saved={false}
        explicit={false}
        onClick={() => console.log("Song clicked")}
        onClickSave={() => console.log("Save button clicked")}
      />
    </div>
  </>;
}

export default App;
