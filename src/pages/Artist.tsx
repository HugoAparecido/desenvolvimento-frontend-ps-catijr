import { useLocation, useParams } from "react-router-dom";
import { ArtistHeader } from "../features/artist/components/ArtistHeader";
import { useArtistAlbums } from "../hooks/useAlbum";
import { ItemLargeCard } from "../components/card/ItemLargeCard";
import { useArtistPopularMusics } from "../hooks/useMusic";
import { ArtistPopularSongs } from "../features/artist/components/ArtistPopularSongs";
import { LinkButton } from "../components/ui/buttons/LinkButton";
import { PlayButton } from "../features/player/components/buttons/PlayButton";
import { FollowingButton } from "../components/ui/buttons/FollowingButton";

export function Artist() {
    const { artistId } = useParams();
    const location = useLocation();

    const {
        data: albums,
        isLoading: isAlbumsLoading,
    } = useArtistAlbums(artistId as string);

    const { data: popularMusics } = useArtistPopularMusics(artistId as string);

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
        <div className="flex w-full h-max gap-2.5 rounded-xl flex-col bg-home-bg-gradient-variant">
            <ArtistHeader artist={artistToRender} />

            <div className="flex flex-col w-full h-max px-4 gap-6 justify-start items-start">
                <div className="w-full flex gap-2.5">
                    <PlayButton isPlaying={false}
                        onClick={() => { }}
                    />
                    <FollowingButton isFollowing={false} unfollow={false}
                        onClick={() => { }}
                    />
                </div>

                <ArtistPopularSongs
                    musics={popularMusics ?? []}
                />
                <div className="flex flex-col w-full overflow-hidden gap-2.5">
                    <div className="flex justify-between w-full">
                        <span className="text-base text-text-base font-bold lining-none font-default-font">
                            Discografia
                        </span>
                        <LinkButton variant="default_subdued_10" text="Mostrar tudo"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        />
                    </div>
                    <div className="flex gap-2.5">
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
            </div>
        </div>
    );
}