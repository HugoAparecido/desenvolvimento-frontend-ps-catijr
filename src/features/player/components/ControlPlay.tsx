import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { PlayButtonPlayer } from "./buttons/PlayButtonPlayer";

interface ControlPlayProps {
    isPlaying: boolean,
    onTogglePlay: () => void;
    nextPathMusicClick: () => void,
    previousPathMusicClick: () => void,
}

export function ControlPlay({ isPlaying, onTogglePlay, nextPathMusicClick, previousPathMusicClick }: ControlPlayProps) {


    return (
        <div className="w-max flex gap-2.5 justify-between items-center">
            <button onClick={previousPathMusicClick}
                className="cursor-pointer text-text-subdued"
            >
                <MdSkipPrevious size={20} />
            </button>
            <PlayButtonPlayer isPlaying={isPlaying} onClick={onTogglePlay} />
            <button onClick={nextPathMusicClick}
                className="cursor-pointer text-text-subdued"
            >
                <MdSkipNext size={20} />
            </button>
        </div>)
}