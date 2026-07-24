import { useEffect, useState } from "react";
import type { PlaylistInfo } from "../types/playlist";
import { useSearchParams } from "react-router-dom";
import { useRecentAlbums } from "../hooks/useAlbum";
import { useRecentArtistsQuery } from "../hooks/useArtist";
import { useMostPlayedMusics } from "../hooks/useMusic";
import { useUserPlaylists } from "../hooks/usePlaylist";
import type { ResultItem } from "../features/explore/hooks/useSearchResultItem";
import { RightClickPlaylistOptions } from "../features/playlist/components/action/RightClickPlaylistOptions";
import { RightClickAlbumOptions } from "../features/album/action/RightClickAlbumOptions";
import { RightClickArtistOptions } from "../features/artist/components/action/RightClickArtistOptions";
import { FilterButton } from "../components/ui/buttons/FilterButton";
import { SearchResultItem } from "../features/explore/components/search/result/components/SearchResultItem";
import { RightClickMusicOptions } from "../features/music/components/action/RightClickMusicOptions";
import { mockUser } from "../mockData/mockUserInfos";


type ItemDomainData =
    | { type: 'playlist'; data: PlaylistInfo }
    | { type: 'album'; data: null }
    | { type: 'artist'; data: null }
    | { type: 'music'; data: { id: string } };

export function SearchResult() {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    const [activeMenuId, setActiveMenuId] = useState<string | number | null>(null);

    // Consumindo os dados reais incluindo as playlists do usuário
    const { data: recentAlbums, isLoading: isLoadingAlbums } = useRecentAlbums();
    const { data: recentArtists, isLoading: isLoadingArtists } = useRecentArtistsQuery();
    const { data: mostPlayedMusics, isLoading: isLoadingMusics } = useMostPlayedMusics();
    const { data: userPlaylists = [] } = useUserPlaylists();

    const isLoading = isLoadingAlbums || isLoadingArtists || isLoadingMusics;

    useEffect(() => {
        const handleClickOutside = () => setActiveMenuId(null);
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        }
    }, []);

    const filterOptions = [
        { value: 'all', text: 'Tudo' },
        { value: 'music', text: 'Música' },
        { value: 'album', text: 'Álbum' },
        { value: 'artist', text: 'Artista' },
        { value: 'playlist', text: 'Playlist' },
    ];

    // Mapeando e unificando os dados para o formato de ResultItem
    const formattedResults: ResultItem[] = [
        ...(recentArtists?.map((artist): ResultItem => ({
            itemID: artist.id,
            itemName: artist.name,
            type: 'artist',
            imagePath: '/card/artist.png',
            itemToPath: `/artist/${artist.id}`
        })) || []),

        ...(recentAlbums?.map((album): ResultItem => ({
            itemID: album.id,
            itemName: album.title,
            type: 'album',
            imagePath: '/card/album.png',
            itemToPath: `/album/${album.id}`
        })) || []),

        ...(mostPlayedMusics?.map((music): ResultItem => ({
            itemID: music.id,
            itemName: music.title,
            type: 'music',
            imagePath: '/music/music.png',
            itemToPath: `/album/${music.albumId}`
        })) || []),

        ...(userPlaylists?.map((playlist): ResultItem => ({
            itemID: playlist.id,
            itemName: playlist.name,
            type: 'playlist',
            imagePath: "/card/playlist1.png",
            itemToPath: `/playlist/${playlist.id}`,
            ownerName: mockUser.name
        })) || [])
    ];

    const filteredResults = formattedResults.filter((item) => {
        const matchQuery = item.itemName.toLowerCase().includes(query.toLowerCase());
        const matchCategory = currentFilter === 'all' || item.type === currentFilter;
        return matchQuery && matchCategory;
    });

    function renderRightClickMenu(domain: ItemDomainData, item: ResultItem) {
        switch (domain.type) {
            case 'playlist':
                return (
                    <RightClickPlaylistOptions
                        playlist={domain.data}
                        actions={{
                            onToggleFixed: () => console.log('Toggle fix:', item.itemID)
                        }}
                    />
                );
            case 'album':
                return <RightClickAlbumOptions actions={{
                    onToggleFixed: () => { }
                }} />;
            case 'artist':
                return <RightClickArtistOptions actions={{
                    onToggleFixed: () => { }
                }} />;
            case 'music':
                return <RightClickMusicOptions
                    music={domain.data}
                    playlists={userPlaylists}
                />;
            default:
                return null;
        }
    }

    function getDomainData(item: ResultItem): ItemDomainData {
        if (item.type === 'playlist') {
            return {
                type: 'playlist',
                data: {
                    id: item.itemID,
                    name: item.itemName,
                    description: "Descrição da playlist",
                    imagePath: [item.imagePath || "/card/album.png"],
                    isPublic: true,
                    isFixed: false
                }
            };
        } else if (item.type === 'music') {
            return { type: 'music', data: { id: String(item.itemID) } };
        } else if (item.type === 'album') {
            return { type: 'album', data: null };
        } else {
            return { type: 'artist', data: null };
        }
    }

    if (isLoading) {
        return <div className="text-text-subdued mt-4">Carregando resultados...</div>;
    }

    return (
        <div className="flex flex-col w-full max-w-237 gap-3">
            <div className="flex gap-3">
                {filterOptions.map((filter) => (
                    <FilterButton
                        key={filter.value}
                        text={filter.text}
                        selected={currentFilter === filter.value}
                        onClick={() => setCurrentFilter(filter.value)}
                    />
                ))}
            </div>
            <div className="w-full">
                {filteredResults.length > 0 ? (
                    filteredResults.map((item) => {
                        const domainData = getDomainData(item);

                        return (
                            <SearchResultItem
                                key={item.itemID}
                                item={item}
                                activeMenuId={activeMenuId}
                                onContextMenuOpen={(id) => setActiveMenuId(id)}
                                rightClickMenu={renderRightClickMenu(domainData, item)}
                            />
                        )
                    })
                ) : (
                    <span className="text-text-subdued mt-4">
                        Nenhum resultado encontrado para "{query}".
                    </span>
                )}
            </div>
        </div>
    )
}