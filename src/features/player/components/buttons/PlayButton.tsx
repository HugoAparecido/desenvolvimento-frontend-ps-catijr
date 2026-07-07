import { useState } from "react";

interface PlayButtonProps {
    isPlaying: boolean;
    onClick: () => void;
}

export function PlayButton({ isPlaying, onClick }: PlayButtonProps) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        onClick();
        setIsActive(!isActive);
    }

    return (
        <button
            className={`w-9 h-9 flex justify-center align-middle rounded-full play-button shadow-[0_4px_9.4px_0_rgba(0,0,0,0.28)] ${isPlaying ? 'playing' : ''} text-green hover:text-green-hover`}
            onClick={toggleActive}
        >
            <img className="w-auto h-auto" src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"} alt={isPlaying ? "Pause" : "Play"} />
        </button>
    );
}