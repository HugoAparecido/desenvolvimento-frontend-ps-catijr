import { useState } from "react";
import { PlayButton } from "../../player/components/buttons/PlayButton";

interface HomePageRecentItemProps {
    musicAudionPath?: string,
    musicImagePath: string,
    musicName: string,
    initialIsPlaying: boolean,
    onClick?: () => void,
}

export function HomePageRecentItem({ musicName, musicAudionPath, musicImagePath, initialIsPlaying, onClick }: HomePageRecentItemProps) {
    console.log(musicAudionPath);

    const [isPlaying, setIsPlaying] = useState(initialIsPlaying);
    const [isHovered, setIsHovered] = useState(false);

    return (<div
        className="w-43.5 sm:w-73.75 flex justify-between items-center pr-1 rounded-sm ease-out duration-300 bg-bg-recent-item"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onClick}
    >
        <div className="flex gap-2.5 justify-between items-center">
            <img src={musicImagePath} alt="Capa da música"
                className="w-8 h-8 sm:w-15 sm:h-15 object-cover" />
            <span className="text-sm font-poppins font-bold text-white text-wrap">{musicName}</span>
        </div>

        {isHovered ?
            <PlayButton isPlaying={isPlaying} onClick={() => setIsPlaying(!isPlaying)} /> :
            isPlaying ?
                <img src="playing/sound_init.svg"
                    alt="Sound bars level"
                    className="h-2.5" /> :
                ""}
    </div>)
}