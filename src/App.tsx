import { Button } from "./components/ui/buttons/Button";
import { PlayButton } from "./features/player/components/buttons/PlayButton";

function App() {
  return <>
    <Button onClick={() => console.log('Button clicked')} variant="default" />
    <Button onClick={() => console.log('Button clicked')} variant="CTA" />
    <Button onClick={() => console.log('Button clicked')} variant="Danger" />
    <PlayButton onClick={() => console.log('PlayButton clicked')} isPlaying={true} />
  </>;
}

export default App;
