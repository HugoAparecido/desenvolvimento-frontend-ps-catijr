import { useState } from "react"
import { Covers } from "./components/Covers"
import { LibraryItemText, type TypeLibraryItem } from "./components/LibraryItemText"

export interface LibraryItemProps {
    cover: {
        imagePath: string,
        isArtist?: boolean,
        isLiked?: boolean,
        onClickPlay: () => void,
    }
    text: {
        itemName: string,
        type: TypeLibraryItem,
        owner?: string,
        fixed: boolean,
    }
    isPlaying: boolean,
    onClick: () => void,
    isSelected: boolean,
    query: string,
}

export function LibraryItem({ cover, text, isPlaying, onClick, query, isSelected }: LibraryItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`flex w-72 h-max items-center justify-between ease-out duration-500 hover:bg-divider hover:rounded-sm hover:ring-4 hover:ring-divider cursor-pointer
                ${isSelected ? 'bg-divider rounded-sm ring-4 ring-divider' : 'bg-transparent'}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex w-max h-max justify-start items-center gap-2">
                <Covers
                    imagePath={cover.imagePath}
                    isHovered={isHovered}
                    onClickPlay={cover.onClickPlay}
                    isArtist={cover.isArtist}
                    isLiked={cover.isLiked}
                    isPlaying={isPlaying}
                />
                <LibraryItemText
                    fixed={text.fixed}
                    isPlaying={isPlaying}
                    itemName={text.itemName}
                    type={text.type}
                    owner={text.owner}
                    query={query}
                />
            </div>
            {isPlaying && (
                <div>
                    <img src="/audio/audio_green.svg" alt="Song"
                        className="w-2.5"
                    />
                </div>
            )}
        </div>
    )
}