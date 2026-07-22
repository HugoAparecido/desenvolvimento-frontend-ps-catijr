import { useState, useMemo, useCallback } from "react";
import { LibraryItem } from "../item/LibraryItem";
import { RightClickPlaylistOptions } from "../../../playlist/components/action/RightClickPlaylistOptions";
import { RightClickAlbumOptions } from "../../../album/action/RightClickAlbumOptions";
import { RightClickArtistOptions } from "../../../artist/components/action/RightClickArtistOptions";
import { useUserPlaylists } from "../../../../hooks/usePlaylist";
import { useRecentAlbums } from "../../../../hooks/useAlbum";
import { useRecentArtistsQuery } from "../../../../hooks/useArtist";
import type { PlaylistInfo, UserPlaylist } from "../../../../types/playlist";
import type { RecentAlbums } from "../../../../types/album";
import type { RecentArtist } from "../../../../types/artist";
import { mockUser } from "../../../../mockData/mockUserInfos";
import type { TypeLibraryItem } from "../item/components/LibraryItemText";

interface LibraryBarItemProps {
    query: string;
    filter: string;
}

type ItemDomainData =
    | { type: 'playlist'; data: PlaylistInfo & { isFixed: boolean }; onToggleFixed: () => void }
    | { type: 'album'; data: { isFixed: boolean }; onToggleFixed: () => void }
    | { type: 'artist'; data: { isFixed: boolean }; onToggleFixed: () => void };

function renderRightClickMenu(domain: ItemDomainData) {
    switch (domain.type) {
        case 'playlist':
            return <RightClickPlaylistOptions
                playlist={domain.data}
                actions={{
                    onToggleFixed: domain.onToggleFixed,
                }}
            />;
        case 'album':
            return <RightClickAlbumOptions actions={{ onToggleFixed: domain.onToggleFixed }} />;
        case 'artist':
            return <RightClickArtistOptions actions={{ onToggleFixed: domain.onToggleFixed }} />;
        default:
            return null;
    }
}

type LibraryItemDisplay = (UserPlaylist | RecentAlbums | RecentArtist) & {
    displayName: string;
    type: TypeLibraryItem;
    owner?: string;
    fixed?: boolean;
    imagePath: string;
};

export function LibraryBarItem({ query, filter }: LibraryBarItemProps) {
    const [activeMenuId, setActiveMenuId] = useState<string | number | null>(null);
    const [selectedId, setSelectedId] = useState<number | string | null>(1);
    const [playingId, setPlayingId] = useState<number | string | null>(5);
    const [isPlaying, setIsPlaying] = useState(true);

    const { data: userPlaylists = [] } = useUserPlaylists();
    const { data: recentAlbums = [] } = useRecentAlbums();
    const { data: recentArtists = [] } = useRecentArtistsQuery();

    const [fixedIds, setFixedIds] = useState<string[]>(() => {
        const saved = localStorage.getItem('@app:fixedLibraryItems');
        return saved ? JSON.parse(saved) : [];
    });

    const handleToggleFixed = useCallback((id: string | number) => {
        setFixedIds(prevIds => {
            const stringId = String(id);
            const isCurrentlyFixed = prevIds.includes(stringId);

            const newIds = isCurrentlyFixed
                ? prevIds.filter(fixedId => fixedId !== stringId)
                : [...prevIds, stringId];

            localStorage.setItem('@app:fixedLibraryItems', JSON.stringify(newIds))
            return newIds;
        });
    }, []);

    const { fixedItems, nonFixedItems } = useMemo(() => {
        const rawItems = [...userPlaylists, ...recentAlbums, ...recentArtists];

        const mappedItems: LibraryItemDisplay[] = rawItems.map(item => {
            let displayName: string;
            let type: 'playlist' | 'album' | 'artist';
            let owner: string | undefined = undefined;

            if ('description' in item) {
                displayName = item.name;
                type = 'playlist';
                owner = mockUser.name;
            } else if ('title' in item) {
                displayName = item.title;
                type = 'album';
                owner = item.artistName;
            } else {
                displayName = item.name;
                type = 'artist';
            }

            const isFixedLocally = fixedIds.includes(String(item.id));

            return {
                ...item,
                displayName,
                type,
                owner,
                fixed: isFixedLocally,
                imagePath: '',
            };
        });

        const lowerQuery = query.toLowerCase();

        const filtered = mappedItems.filter((item) => {
            const matchName = query ? item.displayName.toLowerCase().includes(lowerQuery) : true;
            const matchOwner = (query && item.owner) ? item.owner.toLowerCase().includes(lowerQuery) : true;
            const matchType = filter !== 'all' ? item.type === filter : true;

            return (matchName || matchOwner) && matchType;
        }).sort((a, b) => {

            const timeA = new Date(a.updatedAt || a.createdAt).getTime();
            const timeB = new Date(b.updatedAt || b.createdAt).getTime();

            return (timeB || 0) - (timeA || 0);
        });

        return {
            fixedItems: filtered.filter(item => item.fixed),
            nonFixedItems: filtered.filter(item => !item.fixed)
        };
    }, [userPlaylists, recentAlbums, recentArtists, query, filter, fixedIds]);

    const handleItemClick = useCallback((id: number | string) => {
        setSelectedId(id);
    }, []);

    const handlePlayClick = useCallback((id: number | string, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setPlayingId(prevId => {
            if (prevId === id) {
                setIsPlaying(prevIsPlaying => !prevIsPlaying);
                return prevId;
            }
            setIsPlaying(true);
            return id;
        });
    }, []);

    const renderLibraryItem = (item: LibraryItemDisplay) => {
        let domainData: ItemDomainData;

        if (item.type === 'playlist') {
            domainData = {
                type: 'playlist',
                data: {
                    id: item.id,
                    name: item.displayName,
                    description: 'description' in item ? item.description : "",
                    imagePath: ["/card/album.png"],
                    isPublic: true,
                    isFixed: false,
                },
                onToggleFixed: () => handleToggleFixed(item.id)
            };
        } else if (item.type === 'album') {
            domainData = { type: 'album', data: { isFixed: false }, onToggleFixed: () => handleToggleFixed(item.id) };
        } else {
            domainData = { type: 'artist', data: { isFixed: false }, onToggleFixed: () => handleToggleFixed(item.id) };
        }

        return (
            <LibraryItem
                key={`${item.type}-${item.id}`}
                id={item.id}
                toPath={`${item.type}/${item.id}`}
                query={query}
                isPlaying={item.id === playingId && isPlaying}
                isSelected={item.id === selectedId}
                onClick={() => handleItemClick(item.id)}
                cover={{
                    imagePath: "/card/album.png",
                    isArtist: item.type === "artist",
                    isLiked: item.displayName === "Músicas Curtidas",
                    onClickPlay: () => handlePlayClick(item.id),
                }}
                text={{
                    itemName: item.displayName,
                    type: item.type,
                    owner: item.owner,
                    fixed: item.fixed ?? false,
                }}
                rightClickMenu={renderRightClickMenu(domainData)}
                activeMenuId={activeMenuId}
                onContextMenuOpen={setActiveMenuId}
            />
        );
    };

    return (
        <div className="hidden md:flex flex-col w-max h-full gap-3 p-3">
            {fixedItems.map(renderLibraryItem)}
            {nonFixedItems.map(renderLibraryItem)}
        </div>
    );
}