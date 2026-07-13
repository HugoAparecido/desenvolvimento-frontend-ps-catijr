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
        <div className="w-max flex gap-2.5 justify-between items-center transition-colors duration-300">
            <button onClick={previousPathMusicClick} aria-label="Música anterior"
                className="cursor-pointer text-text-subdued hover:text-white"
            >
                <MdSkipPrevious size={20} />
            </button>
            <PlayButtonPlayer isPlaying={isPlaying} onClick={onTogglePlay} />
            <button onClick={nextPathMusicClick}
                className="cursor-pointer text-text-subdued hover:text-white" aria-label="Próxima música"
            >
                <MdSkipNext size={20} />
            </button>
        </div>)
}