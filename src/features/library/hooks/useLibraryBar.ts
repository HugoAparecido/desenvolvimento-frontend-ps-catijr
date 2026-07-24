import { useCallback, useMemo, useState } from "react";
import { useUserPlaylists } from "../../../hooks/usePlaylist";
import { useRecentAlbums } from "../../../hooks/useAlbum";
import { useRecentArtistsQuery } from "../../../hooks/useArtist";
import { mockUser } from "../../../mockData/mockUserInfos";
import type { LibraryItemDisplay } from "../../../types/library";


export function useLibraryBar(query: string, filter: string) {
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

            localStorage.setItem('@app:fixedLibraryItems', JSON.stringify(newIds));
            return newIds;
        });
    }, []);

    const handleItemClick = useCallback((id: number | string) => {
        setSelectedId(id);
    }, []);

    const handlePlayClick = useCallback((id: number | string, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setPlayingId(prevId => {
            if (prevId === id) {
                setIsPlaying(prev => !prev);
                return prevId;
            }
            setIsPlaying(true);
            return id;
        });
    }, []);

    const { fixedItems, nonFixedItems } = useMemo(() => {
        const rawItems = [...userPlaylists, ...recentAlbums, ...recentArtists];

        const mappedItems: LibraryItemDisplay[] = rawItems.map(item => {
            let displayName: string;
            let type: 'playlist' | 'album' | 'artist';
            let owner: string | undefined;
            let imagePath: string;

            if ('description' in item) {
                displayName = item.name;
                type = 'playlist';
                owner = mockUser.name;
                imagePath = '/card/playlist1.png';
            } else if ('title' in item) {
                displayName = item.title;
                type = 'album';
                owner = item.artistName;
                imagePath = '/card/album.png'
            } else {
                displayName = item.name;
                type = 'artist';
                imagePath = '/card/artist.png'
            }

            return {
                ...item,
                displayName,
                type,
                owner,
                fixed: fixedIds.includes(String(item.id)),
                imagePath,
                routeData: item as unknown as Record<string, unknown>,
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

    return {
        fixedItems,
        nonFixedItems,
        activeMenuId,
        setActiveMenuId,
        selectedId,
        playingId,
        isPlaying,
        handleItemClick,
        handlePlayClick,
        handleToggleFixed
    };
}