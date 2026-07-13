interface PlayButtonPlayerProps {
    isPlaying: boolean;
    onClick: () => void;
}

export function PlayButtonPlayer({ isPlaying, onClick }: PlayButtonPlayerProps) {
    return (
        <button
            className={`w-6 h-6 flex p-1.5 bg-text-base items-center cursor-pointer justify-center rounded-full ease-out duration-300`}
            onClick={onClick}
        >
            <img className="h-full invert" src={isPlaying ? "/player/pause.svg" : "/player/play.svg"} alt={isPlaying ? "Pause" : "Play"} />
        </button>
    );
}