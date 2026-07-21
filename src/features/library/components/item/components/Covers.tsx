import type React from "react";
import { FaHeart } from "react-icons/fa";

interface CoversProps {
    imagePath: string,
    isArtist?: boolean,
    isLiked?: boolean,
    isHovered: boolean,
    onClickPlay: () => void,
    isPlaying?: boolean
}

export function Covers({ imagePath, isArtist = false, isLiked = false, isHovered, onClickPlay, isPlaying = false }: CoversProps) {
    const handleClickPlay = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onClickPlay();
    }

    return (
        <div
            className={`w-9 h-9 relative ${isArtist ? 'rounded-full' : 'rounded-xs'} overflow-hidden`}
        >
            {isLiked ? (
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#422CED] via-[#7B75DC] to-[#BDD6CF]">
                    <FaHeart className="w-3 text-white" />
                </div>
            ) : (
                <img src={imagePath} alt="Imagem de identidade"
                    className={`w-9 h-9 relative ${isArtist ? 'rounded-full' : 'rounded-xs'}`}
                />
            )
            }
            <div
                className={`absolute z-50 top-0 left-0 w-9 h-9 ${isHovered ? 'flex' : 'hidden'} items-center justify-center bg-black/45`}
                onClick={handleClickPlay}
            >
                <img
                    src={isPlaying ? "/player/pause.svg" : "/player/play.svg"}
                    alt="Play"
                    className="h-4"
                />
            </div>
        </div>
    )
}