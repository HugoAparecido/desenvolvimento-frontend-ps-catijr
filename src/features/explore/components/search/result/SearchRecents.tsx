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

    // Mapeia e unifica os dados de cada endpoint para o formato do componente
    const data: SearchRecentResultItemProps[] = [
        // Mapeando Artistas
        ...(recentArtists?.map((artist): SearchRecentResultItemProps => ({
            itemId: artist.id,
            itemName: artist.name,
            itemType: 'artist',
            imagePath: '/card/artist.png', // Substitua pelo campo de imagem real se houver no model
            artistVerified: false, // Defina conforme sua regra de negócio
            musicOwners: [],
            explicit: false,
        })) || []),

        // Mapeando Álbuns (ajuste os campos conforme o model de álbum que você possui)
        ...(recentAlbums?.map((album): SearchRecentResultItemProps => ({
            itemId: album.id,
            itemName: album.title, // ou album.name
            itemType: 'album',
            imagePath: '/card/album.png', // Ajuste para a propriedade correta de imagem
            artistVerified: false,
            musicOwners: [album.artistName],
            explicit: false,
        })) || []),

        ...(mostPlayed?.map((music): SearchRecentResultItemProps => ({
            itemId: music.id,
            itemName: music.title,
            itemType: 'music',
            imagePath: '/music/music.png', // Música geralmente pega do álbum ou possui capa própria
            artistVerified: false,
            musicOwners: ["Desconhecido"], // Aqui você pode passar os nomes dos artistas se tiver a relação populada
            explicit: music.explicit,
        })) || [])
    ];

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