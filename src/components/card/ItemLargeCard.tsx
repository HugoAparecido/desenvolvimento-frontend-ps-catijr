import { useState } from "react";
import { PlayButton } from "../../features/player/components/buttons/PlayButton";
import { truncate } from "../../utils/delimiters";
import { ImageItemLargeCard } from "./ImageItemLargeCard";

interface ItemLargeCardProps {
    imagePath: string | string[],
    imageDescription: string,
    typeCard: 'Album' | 'Playlist' | 'Artist' | 'Person',
    text: string,
    albumYear?: string,
    playlistOwner?: string,
    playAction: () => void,
}

export function ItemLargeCard({ imagePath, imageDescription, typeCard, text, albumYear, playlistOwner, playAction }: ItemLargeCardProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="max-w-35 h-max rounded-sm flex flex-col gap-2 p-1 overflow-hidden shrink-0"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className="relative">
                <ImageItemLargeCard
                    imageDescription={imageDescription}
                    imagePath={imagePath}
                    className={typeCard === 'Artist' || typeCard === 'Person' ? 'rounded-full' : 'rounded-xs'}
                />
                {hovered && (<PlayButton isPlaying={false} onClick={playAction} className="absolute bottom-1 right-1" />)}
            </div>
            <div>
                <span className="text-text-base text-sm font-medium font-poppins wrap-break-word">
                    {truncate(text, 10)}
                </span>
                <div className="items-center gap-1 text-text-subdued text-xs font-medium font-poppins hidden sm:flex">
                    {typeCard === 'Album' && (
                        <span>{albumYear}</span>
                    )}
                    {typeCard === 'Playlist' && (
                        <span>Playlist</span>
                    )}
                    {typeCard === 'Artist' && (
                        <span>Artista</span>
                    )}
                    {typeCard === 'Person' && (
                        <span>Perfil</span>
                    )}

                    {typeCard === 'Album' || typeCard === 'Playlist' && (<div className="w-0.75 h-0.75 bg-text-subdued rounded-full" />)}

                    {typeCard === 'Album' && (<span>Album</span>)}
                    {typeCard === 'Playlist' && (<span className="text-nowrap overflow-hidden">{playlistOwner}</span>)}
                </div>
            </div>
        </div>
    )
}