import { useState } from "react";
import type { TypeLibraryItem } from "../item/components/LibraryItemText";
import { LibraryItem } from "../item/LibraryItem";

interface LibraryBarItemProps {
    query: string,
    filter: string,
}

export function LibraryBarItem({ query, filter }: LibraryBarItemProps) {
    interface LibraryItem {
        id: number;
        itemName: string;
        type: TypeLibraryItem;
        owner?: string;
        fixed: boolean;
        isPlaying: boolean;
    }

    const [selectedId, setSelectedId] = useState<number | string | null>(1);
    const [playingId, setPlayingId] = useState<number | string | null>(5);

    const libraryItems: LibraryItem[] = [
        { id: 1, itemName: 'LEMONADE - The 2nd Album', type: 'album' as const, owner: 'aespa', fixed: true, isPlaying: false },
        { id: 2, itemName: 'Kendrick Lamar', type: 'artist' as const, fixed: true, isPlaying: false },
        { id: 3, itemName: 'Músicas curtidas', type: 'playlist' as const, owner: 'Vitoria Tenorio', fixed: true, isPlaying: false },
        { id: 4, itemName: 'follow the beat (or die trying)', type: 'playlist' as const, owner: 'Vitoria Tenorio', fixed: true, isPlaying: false },
        { id: 5, itemName: 'LEMONADE - The 2nd Album', type: 'album' as const, owner: 'aespa', fixed: false, isPlaying: true }, // Item tocando
    ];

    const filteredItems = libraryItems.filter((item) => {
        const matchName = query ? item.itemName.toLowerCase().includes(query.toLowerCase()) : true;
        const matchOwner = query ? item.owner?.toLowerCase().includes(query.toLowerCase()) : true;
        const matchType = filter !== 'all' ? item.type.includes(filter) : true;
        return (matchName || matchOwner) && matchType;
    });

    const fixedItemWithFilter = filteredItems.filter(item => item.fixed);
    const nonFixedItemWithFilter = filteredItems.filter(item => !item.fixed);

    const renderLibraryItem = (item: LibraryItem) => (
        <LibraryItem
            key={item.id}
            isPlaying={item.id === playingId}
            isSelected={item.id === selectedId}
            onClick={() => {
                setSelectedId(item.id);
            }}
            cover={{
                imagePath: "/card/album.png",
                isArtist: item.type === "artist",
                isLiked: item.id === 3,
                onClickPlay: (e?: React.MouseEvent) => {
                    if (e) e.stopPropagation();

                    setPlayingId(item.id);
                },
            }}
            text={{
                itemName: item.itemName,
                type: item.type,
                owner: item.owner,
                fixed: item.fixed,
            }}
        />
    );

    return (
        <div className="flex flex-col w-max h-full gap-3">
            {fixedItemWithFilter.map(renderLibraryItem)}
            {nonFixedItemWithFilter.map(renderLibraryItem)}
        </div>
    );
}