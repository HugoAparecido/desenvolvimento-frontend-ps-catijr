import { useState, useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PlaylistHeader } from "../features/playlist/components/PlaylistHeader";
import { mockUser } from "../mockData/mockUserInfos";
import { PlayButton } from "../features/player/components/buttons/PlayButton";
import { FiClock } from "react-icons/fi";
import { RightClickMusicOptions } from "../features/music/components/action/RightClickMusicOptions";
import { useAlbumById, useMusicsAlbumById } from "../hooks/useAlbum";

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

    // Busca o álbum completo junto com as músicas de uma vez só
    const { data: album, isLoading } = useAlbumById(albumId as string);

    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setOpenMenuIndex(null));

    if (isLoading) {
        return <div className="text-white p-8">Carregando...</div>;
    }

    const headerInfo = {
        images: ["/card/playlist1.png", "/card/playlist1.png", "/card/playlist1.png", "/card/playlist1.png"],
        isPublic: true,
        name: album?.title ?? 'Carregando...',
        owner: {
            name: mockUser.name,
            image: mockUser.imagePath,
        },
        qtdMusics: album?.musics?.length ?? 0,
        totalPlayTime: 0,
    };

    return (
        <div className="w-full h-max min-h-full flex flex-col rounded-lg gap-8 bg-home-bg-gradient-variant">
            <PlaylistHeader playlist={headerInfo} />
            <div className="flex px-5 gap-2.5">
                <PlayButton isPlaying={false} onClick={() => { }} />
            </div>
            <div className="bg-[#121212] text-[#b3b3b3] p-6 font-sans min-h-screen">
                <div className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 border-b border-[#2a2a2a] text-sm uppercase tracking-wider mb-4">
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
                            className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 items-center hover:bg-[#ffffff1a] rounded-md transition duration-200 group"
                        >
                            <span className="text-center text-sm">{index + 1}</span>

                            <div className="flex items-center gap-3">
                                <img src="/card/playlist1.png" alt="Music Album" className="w-10 h-10 rounded object-cover" />
                                <div className="flex flex-col">
                                    <span className="text-white font-medium text-sm">{music.title}</span>
                                    <span className="text-xs hover:underline cursor-pointer">{music.artistId}</span>
                                </div>
                            </div>

                            <span className="text-sm truncate hover:underline cursor-pointer">{music.albumId}</span>

                            <span className="text-sm">{music.createdAt}</span>

                            <div className="flex items-center justify-end gap-4 text-sm">
                                <span>{music.duration}</span>

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
                                            <RightClickMusicOptions music={music} />
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