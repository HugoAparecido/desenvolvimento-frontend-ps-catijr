import { useLocation, useParams } from "react-router-dom";
import { ArtistHeader } from "../features/artist/components/ArtistHeader";
import { useArtistAlbums } from "../hooks/useAlbum";
import { ItemLargeCard } from "../components/card/ItemLargeCard";

export function Artist() {
    const { artistId } = useParams();
    const location = useLocation();

    const {
        data: albums,
        isLoading: isAlbumsLoading,
    } = useArtistAlbums(artistId as string);

    const artistState = location.state;

    const artistName = artistState?.name
        || artistState?.itemText?.itemName
        || (albums && albums.length > 0 ? albums[0].artistName : "Artista Desconhecido");

    const artistToRender = {
        imagePath: artistState?.imagePath || "/artist/artist_header.png",
        name: artistName,
        verified: artistState?.verified ?? true,
        qtdListeners: artistState?.listeners || artistState?.qtdListeners || 0,
    };

    return (
        <div className="w-full h-max gap-2.5 rounded-xl flex-col">
            <ArtistHeader artist={artistToRender} />
            <div>

            </div>
            <div>
                {isAlbumsLoading && <div className="p-4 text-white">Carregando albums...</div>}

                {albums?.length === 0 && (
                    <p className="text-white p-4">Nenhum álbum encontrado.</p>
                )}

                {albums?.map((album) => (
                    <ItemLargeCard
                        key={album.id}
                        imageDescription="Album image"
                        imagePath="/card/album.png"
                        playAction={() => { }}
                        text={album.title}
                        typeCard="Album"
                        albumYear={album.year}
                    />
                ))}
            </div>
        </div>
    );
}