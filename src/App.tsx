import { HomePageRecentItem } from "./features/music/components/HomePageRecentItem";

function App() {
  return <>
    <div className="bg-black">
      <HomePageRecentItem musicName="teste hhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhhhhhhhhh" musicImagePath="music/music.png" initialIsPlaying={false} redirectTo="https://github.com/" />
    </div>
  </>;
}

export default App;
