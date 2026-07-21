import { useState } from "react"
import { Covers } from "./components/Covers"
import { LibraryItemText, type TypeLibraryItem } from "./components/LibraryItemText"
import { useLibraryItemAction } from "../../hooks/useLibraryItemAction"

export interface LibraryItemProps {
    id: number | string
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
    activeMenuId: string | number | null,
    rightClickMenu?: React.ReactNode,
    onContextMenuOpen: (id: string | number) => void,
}

export function LibraryItem({ id, cover, text, isPlaying, onClick, query, isSelected, rightClickMenu, activeMenuId, onContextMenuOpen }: LibraryItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    const actions = useLibraryItemAction();

    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        actions.handleContextMenu(e)
        onContextMenuOpen(id)
    }

    const isMenuOpen = activeMenuId === id && actions.menuState.isOpen;

    return (<>
        <div
            className={`flex w-72 h-max items-center justify-between ease-out duration-500 hover:bg-divider hover:rounded-sm hover:ring-4 hover:ring-divider cursor-pointer
                ${isSelected ? 'bg-divider rounded-sm ring-4 ring-divider' : 'bg-transparent'}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onContextMenu={handleContextMenu}
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
        {isMenuOpen && (
            <div
                className="fixed z-50"
                style={{
                    top: actions.menuState.y,
                    left: actions.menuState.x,
                }}

                onClick={(e) => e.stopPropagation()}
            >
                {rightClickMenu}
            </div>
        )}</>
    )
}