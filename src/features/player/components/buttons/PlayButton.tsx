import type React from "react";

interface PlayButtonProps {
    isPlaying: boolean,
    onClick: () => void,
    className?: string,
}

export function PlayButton({ isPlaying, onClick, className }: PlayButtonProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
    };

    return (
        <button
            className={`w-9 h-9 flex shrink-0 p-2.5 items-center cursor-pointer justify-center rounded-full play-button shadow-[0_4px_9.4px_0_rgba(0,0,0,0.28)] ${isPlaying ? 'playing' : ''} bg-green hover:bg-green-hover ease-out duration-300 ${className}`}
            onClick={handleClick}
        >
            <img className="h-full invert" src={isPlaying ? "/player/pause.svg" : "/player/play.svg"} alt={isPlaying ? "Pause" : "Play"} />
        </button>
    );
}