import { useRecentAlbums } from "../../../../../hooks/useAlbum";
import { useRecentArtistsQuery } from "../../../../../hooks/useArtist";
import { useMostPlayedMusics } from "../../../../../hooks/useMusic";
import { SearchLoadingItem } from "../loading/SearchLoadingItem";
import { SearchRecentResultItem, type SearchRecentResultItemProps } from "./components/SearchRecentResultItem";

export function SearchRecent() {
    const { data: recentAlbums, isLoading: isLoadingAlbums, error: errorAlbums } = useRecentAlbums();
    const { data: recentArtists, isLoading: isLoadingArtists, error: errorArtists } = useRecentArtistsQuery();
    const { data: mostPlayed, isLoading: isLoadingMostPlayed, error: errorMostPlayed } = useMostPlayedMusics();

    const isLoading = isLoadingAlbums || isLoadingArtists || isLoadingMostPlayed;
    const error = errorAlbums || errorArtists || errorMostPlayed;

    const rawData = [
        ...(recentArtists?.map((artist) => ({
            itemId: artist.id,
            itemName: artist.name,
            itemType: 'artist' as const,
            imagePath: '/card/artist.png',
            artistVerified: false,
            musicOwners: [],
            explicit: false,
            updatedAt: artist.updatedAt,
            createdAt: artist.createdAt,
        })) || []),

        ...(recentAlbums?.map((album) => ({
            itemId: album.id,
            itemName: album.title,
            itemType: 'album' as const,
            imagePath: '/card/album.png',
            artistVerified: false,
            musicOwners: [album.artistName],
            explicit: false,
            updatedAt: album.updatedAt,
            createdAt: album.createdAt,
        })) || []),

        ...(mostPlayed?.map((music) => ({
            itemId: music.id,
            itemName: music.title,
            itemType: 'music' as const,
            imagePath: '/music/music.png',
            artistVerified: false,
            musicOwners: ["Desconhecido"],
            explicit: music.explicit,
            updatedAt: music.updatedAt,
            createdAt: music.createdAt,
        })) || [])
    ];

    const data: SearchRecentResultItemProps[] = rawData.sort((a, b) => {
        const timeA = new Date(a.updatedAt || a.createdAt).getTime();
        const timeB = new Date(b.updatedAt || b.createdAt).getTime();
        return (timeB || 0) - (timeA || 0);
    }).slice(0, 7);

    if (error) {
        console.error("Erro ao carregar buscas recentes:", error);
    }

    return (
        <div className="flex flex-col w-88.75 h-max px-3.5 py-2 gap-1.5 justify-start items-start bg-divider rounded-sm ease-out duration-300">
            {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <SearchLoadingItem key={index} />
                ))
            ) : (
                <>
                    <span className="text-sm text-white font-sans font-bold">Buscas recentes</span>

                    <div className="flex w-full flex-col">
                        <div className="flex w-full flex-col gap-2 justify-start items-start">
                            {data.length > 0 ? (
                                data.map((item) => (
                                    <SearchRecentResultItem
                                        key={item.itemId}
                                        itemId={item.itemId}
                                        itemName={item.itemName}
                                        itemType={item.itemType}
                                        imagePath={item.imagePath}
                                        artistVerified={item.artistVerified}
                                        musicOwners={item.musicOwners}
                                        explicit={item.explicit}
                                    />
                                ))
                            ) : (
                                <span className="text-sm text-zinc-400">Nenhum resultado encontrado.</span>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}