interface PlayButtonProps {
    isPlaying: boolean,
    onClick: () => void,
    className?: string,
}

export function PlayButton({ isPlaying, onClick, className }: PlayButtonProps) {
    return (
        <button
            className={`w-9 h-9 flex p-2.5 items-center cursor-pointer justify-center rounded-full play-button shadow-[0_4px_9.4px_0_rgba(0,0,0,0.28)] ${isPlaying ? 'playing' : ''} bg-green hover:bg-green-hover ease-out duration-300 ${className}`}
            onClick={onClick}
        >
            <img className="h-full invert" src={isPlaying ? "/player/pause.svg" : "/player/play.svg"} alt={isPlaying ? "Pause" : "Play"} />
        </button>
    );
}