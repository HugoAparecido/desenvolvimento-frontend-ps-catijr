import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlaylistHeader } from "../features/playlist/components/PlaylistHeader";
import { mockUser } from "../mockData/mockUserInfos";
import { PlayButton } from "../features/player/components/buttons/PlayButton";
import { usePlaylistById, useUserPlaylists } from "../hooks/usePlaylist";
import { FiClock } from "react-icons/fi";
import { formatMusicData } from "../features/music/utils/musicFormatter";
import { useArtistAlbums } from "../hooks/useAlbum";
import { PlaylistRow } from "../features/playlist/components/PlaylistRow";

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
    useEffect(() => {
        function listener(event: MouseEvent | TouchEvent) {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler();
        }
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export function Playlist() {
    const { playlistId } = useParams();
    const { data: playlist } = usePlaylistById(playlistId as string);
    const { data: allPlaylists } = useUserPlaylists();

    const firstArtistId = playlist?.musics?.[0]?.artistId;
    const { data: artistAlbums } = useArtistAlbums(firstArtistId as string);

    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setOpenMenuIndex(null));

    const headerInfo = {
        images: ["/card/playlist1.png", "/card/playlist2.png", "/card/playlist3.png", "/card/playlist4.png"],
        isPublic: true,
        name: playlist?.name ?? 'new',
        owner: {
            name: mockUser.name,
            image: mockUser.imagePath,
        },
        qtdMusics: playlist?.musicQtd ?? 0,
        totalPlayTime: playlist?.duration ?? 0,
    };

    return (
        <div className="w-full h-max min-h-full flex flex-col rounded-lg gap-8 bg-home-bg-gradient-variant">
            <PlaylistHeader playlist={headerInfo} />
            <div className="flex px-5 gap-2.5">
                <PlayButton isPlaying={false} onClick={() => { }} />
            </div>
            <div className="px-5 flex flex-col gap-3">
                <div className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] px-4 py-2 border-b-0.5 border-gray text-sm font-default-font lining-none font-medium text-text-subdued">
                    <span className="text-center">#</span>
                    <span className="text-center">Título</span>
                    <span className="text-center">Álbum</span>
                    <span className="text-center">Adicionada em</span>
                    <span className="flex items-center justify-center">
                        <FiClock />
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    {playlist?.musics.map((rawMusic, index) => {
                        const music = formatMusicData(rawMusic, artistAlbums ?? []);

                        return (
                            <PlaylistRow
                                key={music.id ?? index}
                                index={index}
                                music={music}
                                playlistId={playlistId}
                                allPlaylists={allPlaylists ?? []}
                                openMenuIndex={openMenuIndex}
                                setOpenMenuIndex={setOpenMenuIndex}
                                menuRef={menuRef}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}