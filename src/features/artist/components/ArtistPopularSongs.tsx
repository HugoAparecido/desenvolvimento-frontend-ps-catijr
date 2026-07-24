import { LinkButton } from "../../../components/ui/buttons/LinkButton";
import type { Music } from "../../../types/musics";
import { MusicSong } from "../../music/components/MusicSong";
import { useArtistSong } from "../hooks/useArtistSong";

interface ArtistPopularSongsProps {
    musics: Music[];
}

export function ArtistPopularSongs({ musics }: ArtistPopularSongsProps) {
    const { songs, handleViewClick, hasMore } = useArtistSong(musics);

    return (
        <div className="flex w-full max-w-131 flex-col gap-2.5">
            <span className="text-base text-text-base font-bold">Populares</span>

            {songs.map((song, index) => (
                <MusicSong
                    index={index + 1}
                    title={song.title}
                    id={song.id}
                    key={song.id}
                    imageUrl="/mock-images/image_20.png"
                    explicit={song.explicit}
                    totalTime={song.duration}
                    totalViews={song.timesListen}
                    saved={true}
                    onClick={() => console.log("Clicked")}
                />
            ))}

            <LinkButton
                text={hasMore ? "Mostrar tudo" : "Mostrar menos"}
                onClick={(e) => {
                    e.preventDefault();
                    handleViewClick();
                }}
                variant="default_subdued_10"
            />
        </div>
    );
}