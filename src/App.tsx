import { MusicInline } from "./features/music/components/MusicInline";

function App() {
  return <>
    <div className="bg-black">
      <MusicInline
        title="Song Title"
        id="1"
        imageUrl="/images/album-cover.jpg"
        totalTime={240}
        totalViews={1000}
        saved={false}
        onClick={() => console.log("Song clicked")}
        onClickSave={() => console.log("Save button clicked")}
      />
    </div>
  </>;
}

export default App;
