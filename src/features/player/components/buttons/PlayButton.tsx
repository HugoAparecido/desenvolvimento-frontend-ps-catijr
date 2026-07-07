interface PlayButtonProps {
    isPlaying: boolean;
    onClick: () => void;
}

function PlayButton({ isPlaying, onClick }: PlayButtonProps) {
    return (
        <button
            className={`play-button ${isPlaying ? 'playing' : ''} text-green hover:text-green-hover`}
            onClick={onClick}
        >
            <img className="w-6 h-6" src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"} alt={isPlaying ? "Pause" : "Play"} />
        </button>
    );
}