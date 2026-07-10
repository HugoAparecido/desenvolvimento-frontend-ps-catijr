import { PlayButton } from "../../features/player/components/buttons/PlayButton";
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
    return (
        <div className="w-auto h-auto rounded-sm flex flex-col gap-2 p-1">
            <div className="relative">
                <ImageItemLargeCard
                    imageDescription={imageDescription}
                    imagePath={imagePath}
                    className={typeCard === 'Artist' || typeCard === 'Person' ? 'rounded-full' : ''}
                />
                <PlayButton isPlaying={false} onClick={playAction} className="absolute" />
            </div>
            <div>
                <span className="text-text-base fonst-sm font-medium font-poppins">
                    {text}
                </span>
                <div className="flex gap-1 text-text-subdued text-xs font-medium font-poppins">
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

                    {typeCard === 'Album' || typeCard === 'Playlist' && (<div className="w-0.75 h-0.75 bg-text-subdued" />)}

                    {typeCard === 'Album' && (<span>Album</span>)}
                    {typeCard === 'Playlist' && (<span>{playlistOwner}</span>)}
                </div>
            </div>
        </div>
    )
}