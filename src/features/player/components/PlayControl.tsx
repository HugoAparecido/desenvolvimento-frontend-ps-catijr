import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { PlayButtonPlayer } from "./buttons/PlayButtonPlayer";

interface PlayControlProps {
    isPlaying: boolean,
    onTogglePlay: () => void;
    nextMusicClick: () => void,
    previousMusicClick: () => void,
}

export function PlayControl({ isPlaying, onTogglePlay, nextMusicClick, previousMusicClick }: PlayControlProps) {


    return (
        <div className="w-max flex gap-2.5 justify-between items-center transition-colors duration-300">
            <button onClick={previousMusicClick} aria-label="Música anterior"
                className="cursor-pointer text-text-subdued hover:text-white"
            >
                <MdSkipPrevious size={20} />
            </button>
            <PlayButtonPlayer isPlaying={isPlaying} onClick={onTogglePlay} />
            <button onClick={nextMusicClick}
                className="cursor-pointer text-text-subdued hover:text-white" aria-label="Próxima música"
            >
                <MdSkipNext size={20} />
            </button>
        </div>)
}