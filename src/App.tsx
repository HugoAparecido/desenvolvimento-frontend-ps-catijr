import { FollowingButton } from "./components/ui/buttons/FollowingButton";
import { LinkButton } from "./components/ui/buttons/LinkButton";

function App() {
  return <>
    <div className="bg-black">
      <FollowingButton isFollowing={true} unfollow={false} onClick={() => console.log("Clicked")} />
      <FollowingButton isFollowing={true} unfollow={true} onClick={() => console.log("Clicked")} />
      <FollowingButton isFollowing={false} unfollow={false} onClick={() => console.log("Clicked")} />
      <FollowingButton isFollowing={false} unfollow={true} onClick={() => console.log("Clicked")} />
      <LinkButton text="Link Button" route_link="/home" variant="default_subdued_10" />
    </div>
  </>;
}

export default App;
