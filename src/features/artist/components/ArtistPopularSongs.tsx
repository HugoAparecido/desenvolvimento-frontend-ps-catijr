import { LinkButton } from "../../../components/ui/buttons/LinkButton";
import { Music } from "../../music/components/Music";
import { useArtistSong } from "../hooks/useArtistSong";

interface ArtistPopularSongsProps {
    artistId: string | number;
}

export function ArtistPopularSongs({ artistId }: ArtistPopularSongsProps) {
    const { songs, handleViewClick, hasMore } = useArtistSong(artistId);

    return (
        <div className="flex flex-col gap-2.5">
            <span className="text-base text-text-base font-bold">Populares</span>
            {songs.map(song => <Music title={song.title} id={song.id} imageUrl="mock-images/image_20.png" explicit={true} totalTime={180} totalViews={400000} saved={true} onClick={() => console.log("Clicked")} />)}
            <LinkButton text={!hasMore ? "Mostrar tudo" : "Mostrar menos"} onClick={handleViewClick} variant="default_subdued_10" />
        </div>
    )
}