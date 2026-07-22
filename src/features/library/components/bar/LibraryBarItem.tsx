import { useState } from "react";
import type { TypeLibraryItem } from "../item/components/LibraryItemText";
import { LibraryItem } from "../item/LibraryItem";
import type { PlaylistInfo } from "../../../playlist/types/playlist";
import { RightClickPlaylistOptions } from "../../../playlist/components/action/RightClickPlaylistOptions";
import { RightClickAlbumOptions } from "../../../album/action/RightClickAlbumOptions";
import { RightClickArtistOptions } from "../../../artist/components/action/RightClickArtistOptions";

interface LibraryBarItemProps {
    query: string,
    filter: string,
}

type ItemDomainData =
    | { type: 'playlist'; data: PlaylistInfo }
    | { type: 'album'; data: null }
    | { type: 'artist'; data: null };

function renderRightClickMenu(domain: ItemDomainData) {
    switch (domain.type) {
        case 'playlist':
            return <RightClickPlaylistOptions playlist={domain.data} />;
        case 'album':
            return <RightClickAlbumOptions />;
        case 'artist':
            return <RightClickArtistOptions />;
        default:
            return null;
    }
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

    const [activeMenuId, setActiveMenuId] = useState<string | number | null>(null);

    const [selectedId, setSelectedId] = useState<number | string | null>(1);
    const [playingId, setPlayingId] = useState<number | string | null>(5);
    const [isPlaying, setIsPlaying] = useState(true);

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

    const renderLibraryItem = (item: LibraryItem) => {
        let domainData: ItemDomainData;

        if (item.type === 'playlist') {
            domainData = {
                type: 'playlist',
                data: {
                    id: item.id,
                    name: item.itemName,
                    description: "Descrição da playlist",
                    imagePath: ["/card/album.png"],
                    isPublic: true,
                }
            };
        } else if (item.type === 'album') {
            domainData = { type: 'album', data: null };
        } else {
            domainData = { type: 'artist', data: null };
        }

        return (
            <LibraryItem
                id={item.id}
                toPath={`${item.type}/${item.id}`}
                key={item.id}
                query={query}
                isPlaying={item.id === playingId && isPlaying}
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
                        if (playingId === item.id)
                            setIsPlaying(!isPlaying)
                        else {
                            setPlayingId(item.id);
                            setIsPlaying(true)
                        }
                    },
                }}
                text={{
                    itemName: item.itemName,
                    type: item.type,
                    owner: item.owner,
                    fixed: item.fixed,
                }}
                rightClickMenu={renderRightClickMenu(domainData)}
                activeMenuId={activeMenuId}
                onContextMenuOpen={(id) => setActiveMenuId(id)}
            />
        );
    };

    return (
        <div className="hidden md:flex flex-col w-max h-full gap-3 p-3">
            {fixedItemWithFilter.map(renderLibraryItem)}
            {nonFixedItemWithFilter.map(renderLibraryItem)}
        </div>
    );
}