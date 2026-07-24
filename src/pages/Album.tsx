import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlayButton } from "../features/player/components/buttons/PlayButton";
import { FiClock } from "react-icons/fi";
import { useAlbumById } from "../hooks/useAlbum";
import { AlbumHeader } from "../features/album/AlbumHeader";
import { LinkButton } from "../components/ui/buttons/LinkButton";
import { FormatStringRawDate, NumberToTimeString } from "../utils/formatters";
import { RightClickMusicOptions } from "../features/music/components/action/RightClickMusicOptions";
import { useUserPlaylists } from "../hooks/usePlaylist";

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

export function Album() {
    const { albumId } = useParams();

    const { data: album, isLoading } = useAlbumById(albumId as string);
    const { data: playlists } = useUserPlaylists();

    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setOpenMenuIndex(null));

    if (isLoading) {
        return <div className="text-white p-8">Carregando...</div>;
    }

    const totalAlbumPlayTime = album?.musics.reduce(
        (acumulator, music) => acumulator + music.duration, 0
    ) ?? 0;

    const headerInfo = {
        image: "/card/album.png",
        name: album?.title ?? 'Desconhecido',
        owner: {
            name: album?.artistName ?? 'Desconhecido',
            image: "/card/artist.png",
        },
        qtdMusics: album?.musics.length ?? 0,
        totalPlayTime: totalAlbumPlayTime,
    };

    return (
        <div className="w-full h-max min-h-full flex flex-col rounded-lg gap-8 bg-home-bg-gradient-variant">
            <AlbumHeader album={headerInfo} />
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
                    {album?.musics?.map((music, index) => (
                        <div
                            key={music.id ?? index}
                            className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] px-4 py-2 gap-1 border-b-0.5"
                        >
                            <span className="h-full flex items-center justify-start text-xs font-default-font lining-none font-medium text-text-subdued">
                                {index + 1}
                            </span>

                            <div className="flex items-center gap-3 overflow-hidden truncate">
                                <img src="/card/playlist1.png" alt="Music Album" className="w-9 h-9 object-cover" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-arial lining-none font-bold text-white">
                                        {music.title}
                                    </span>
                                    <LinkButton variant="default_subdued_10"
                                        text={album.artistName}
                                        route_link={`/artist/${music.artistId}`}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-center">

                                <LinkButton variant="default_subdued_10"
                                    text={album.title}
                                    route_link={`/album/${music.albumId}`}
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <span className="text-xs font-default-font lining-none font-medium text-text-subdued">
                                    {FormatStringRawDate(music.createdAt)}
                                </span>
                            </div>

                            <div className="flex items-center justify-end gap-4">
                                <span className="text-xs font-default-font lining-none font-medium text-text-subdued">
                                    {NumberToTimeString(music.duration)}
                                </span>

                                <div className="relative" ref={openMenuIndex === index ? menuRef : null}>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center p-1 cursor-pointer"
                                        onClick={() => {
                                            setOpenMenuIndex(openMenuIndex === index ? null : index);
                                        }}
                                    >
                                        <img src="/action/3dots.svg" alt="Three dots" className="w-3.25" />
                                    </button>

                                    {openMenuIndex === index && (
                                        <div className="absolute right-0 top-full mt-1 z-50">
                                            <RightClickMusicOptions music={music} playlists={playlists ?? []}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}