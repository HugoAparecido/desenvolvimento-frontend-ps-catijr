import { useState } from "react";
import { NumberToTimeString } from "../../../utils/formatters";

interface MusicSongProps {
    title: string;
    id: string | number;
    index: number;
    albumUrl?: string;
    imageUrl: string;
    explicit?: boolean;
    totalTime: number;
    totalViews: number;
    saved: boolean;
    onClick: () => void;
    onClickSave?: () => void;
}

export function MusicSong({
    title,
    id,
    albumUrl,
    imageUrl,
    explicit = false,
    totalTime,
    totalViews,
    saved,
    onClick,
    onClickSave,
    index,
}: MusicSongProps) {
    const [musicSaved, setMusicSaved] = useState(saved);
    const [musicHovered, setMusicHovered] = useState(false);

    return (
        <div className="flex items-center justify-between font-poppins bg-transparent py-1 px-2 gap-2.5 rounded-sm hover:bg-divider" onClick={onClick} onMouseEnter={() => setMusicHovered(true)} onMouseLeave={() => setMusicHovered(false)}>
            <div className="h-3 w-3 flex items-center justify-center ">{(!musicHovered ? <span className="font-medium text-xs text-text-subdued">{index}</span> : <img src="/player/play.svg" alt="Play" className="h-3" />)}</div>
            <div className="flex flex-1 flex-row items-center gap-2">
                <img src={imageUrl} alt="foto do álbum" />
                <div className="flex flex-col items-start justify-center gap-1">
                    <a href={albumUrl} className="p-0 m-0 h-auto w-auto text-xs">
                        <span className="font-arial font-bold text-text-base">{title}</span>
                    </a>
                    {explicit && <img src="/tag/explicit.svg" alt="explicit" className="w-3" />}
                </div>
            </div>
            <span className="flex items-center gap-2 font-poppins text-xs font-medium text-text-subdued">{NumberToTimeString(totalTime)}</span>
            <button type="button" onClick={() => {
                setMusicSaved(!musicSaved);
                if (onClickSave) {
                    onClickSave();
                }
            }} className="w-3.5 cursor-pointer" disabled={!musicHovered}>
                {musicSaved && (<img src="/tag/saved.svg" alt="Saved" className="w-full" />)}
                {!musicSaved && musicHovered && (<img src="/action/add_fill.svg" alt="Save" className="w-full" />)}
            </button>
            <span className="flex items-center gap-2 font-poppins text-xs font-medium text-text-subdued">{totalViews}</span>
            <button type="button" className="w-3 h-3 cursor-pointer" onClick={onClick} disabled={!musicHovered}>
                {musicHovered && <img src="/action/3dots.svg" alt="Mais ações" className="w-full" />}
            </button>
        </div>
    );
}
