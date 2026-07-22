import { useState } from "react";
import type { TypeLibraryItem } from "../item/components/LibraryItemText";
import { Covers } from "../item/components/Covers";

export function LibraryBarItemMobile() {
    interface LibraryItem {
        id: number;
        itemName: string;
        type: TypeLibraryItem;
        owner?: string;
        fixed: boolean;
        isPlaying: boolean;
    }

    const [playingId, setPlayingId] = useState<number | string | null>(5);
    const [isPlaying, setIsPlaying] = useState(true);

    const libraryItems: LibraryItem[] = [
        { id: 1, itemName: 'LEMONADE - The 2nd Album', type: 'album' as const, owner: 'aespa', fixed: true, isPlaying: false },
        { id: 2, itemName: 'Kendrick Lamar', type: 'artist' as const, fixed: true, isPlaying: false },
        { id: 3, itemName: 'Músicas curtidas', type: 'playlist' as const, owner: 'Vitoria Tenorio', fixed: true, isPlaying: false },
        { id: 4, itemName: 'follow the beat (or die trying)', type: 'playlist' as const, owner: 'Vitoria Tenorio', fixed: true, isPlaying: false },
        { id: 5, itemName: 'LEMONADE - The 2nd Album', type: 'album' as const, owner: 'aespa', fixed: false, isPlaying: true }, // Item tocando
    ];

    const fixedItemWithFilter = libraryItems.filter(item => item.fixed);
    const nonFixedItemWithFilter = libraryItems.filter(item => !item.fixed);

    const renderLibraryItem = (item: LibraryItem) => (

        <Covers
            key={item.id}
            imagePath="card/album.png"
            isHovered={false}
            onClickPlay={(e?: React.MouseEvent) => {
                if (e) e.stopPropagation();
                if (playingId === item.id)
                    setIsPlaying(!isPlaying)
                else {
                    setPlayingId(item.id);
                    setIsPlaying(true)
                }
            }}
            isArtist={item.type === 'artist'}
            isLiked={item.id === 1}
            isPlaying={item.id === playingId && isPlaying}
        />
    );


    return (
        <div className="flex flex-col w-max h-full gap-3 p-3">
            {fixedItemWithFilter.map(renderLibraryItem)}
            {nonFixedItemWithFilter.map(renderLibraryItem)}
        </div>
    );
}