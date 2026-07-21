import { useEffect, useState } from "react";
import { FilterButton } from "../components/ui/buttons/FilterButton";
import { SearchResultItem } from "../features/explore/components/search/result/components/SearchResultItem";
import { mockResultItems, type ResultItem } from "../features/explore/hooks/useSearchResultItem";
import { useSearchParams } from "react-router-dom";
import type { PlaylistInfo } from "../features/playlist/types/playlist";
import { RightClickMusicOptions } from "../features/music/components/action/RightClickMusicOptions";
import { RightClickArtistOptions } from "../features/artist/components/action/RightClickArtistOptions";
import { RightClickAlbumOptions } from "../features/album/action/RightClickAlbumOptions";
import { RightClickPlaylistOptions } from "../features/playlist/components/action/RightClickPlaylistOptions";

type ItemDomainData =
    | { type: 'playlist'; data: PlaylistInfo }
    | { type: 'album'; data: null }
    | { type: 'artist'; data: null }
    | { type: 'music'; data: null };

function renderRightClickMenu(domain: ItemDomainData) {
    switch (domain.type) {
        case 'playlist':
            return <RightClickPlaylistOptions playlist={domain.data} />;
        case 'album':
            return <RightClickAlbumOptions />;
        case 'artist':
            return <RightClickArtistOptions />;
        case 'music':
            return <RightClickMusicOptions />;
        default:
            return null;
    }
}

function getDomainData(item: ResultItem): ItemDomainData {
    if (item.type === 'playlist') {
        return { // 2. Adicionado o return
            type: 'playlist',
            data: {
                id: item.itemID,
                name: item.itemName,
                description: "Descrição da playlist",
                imagePath: [item.imagePath || "/card/album.png"],
                isPublic: true,
            }
        };
    } else if (item.type === 'album') {
        return { type: 'album', data: null };
    } else if (item.type === 'music') {
        return { type: 'music', data: null };
    } else {
        return { type: 'artist', data: null };
    }
}

export function SearchResult() {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    const [activeMenuId, setActiveMenuId] = useState<string | number | null>(null);

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
        { value: 'playlist', text: 'Playlist' },
    ]

    const filteredResults = mockResultItems.filter((item) => {
        const matchQuery = item.itemName.toLowerCase().includes(query.toLowerCase());
        const matchCategory = currentFilter === 'all' || item.type === currentFilter;
        return matchQuery && matchCategory;
    })

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
                                rightClickMenu={renderRightClickMenu(domainData)}
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