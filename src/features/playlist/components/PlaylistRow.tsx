import { LinkButton } from "../../../components/ui/buttons/LinkButton";
import type { UserPlaylist } from "../../../types/playlist";
import { FormatStringRawDate, NumberToTimeString } from "../../../utils/formatters";
import { RightClickMusicOptions } from "../../music/components/action/RightClickMusicOptions";


interface PlaylistRowProps {
    index: number;
    music: {
        id: string
        title: string,
        artist: {
            id: string,
            name: string,
        },
        album: {
            id: string,
            name: string
        }
        duration: number,
        createdAt: string,
    },
    playlistId?: string;
    allPlaylists: UserPlaylist[];
    openMenuIndex: number | null;
    setOpenMenuIndex: (index: number | null) => void;
    menuRef: React.RefObject<HTMLDivElement | null>;
}

export function PlaylistRow({
    index,
    music,
    playlistId,
    allPlaylists,
    openMenuIndex,
    setOpenMenuIndex,
    menuRef,
}: PlaylistRowProps) {
    const isOpen = openMenuIndex === index;

    return (
        <div
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
                        text={music.artist.name}
                        route_link={`/artist/${music.artist.id}`}
                    />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <LinkButton variant="default_subdued_10"
                    text={music.album.name}
                    route_link={`/album/${music.album.id}`}
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

                <div className="relative" ref={isOpen ? menuRef : null}>
                    <button
                        type="button"
                        className="flex items-center justify-center p-1 cursor-pointer"
                        onClick={() => {
                            setOpenMenuIndex(isOpen ? null : index);
                        }}
                    >
                        <img src="/action/3dots.svg" alt="Three dots" className="w-3.25" />
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 top-full mt-1 z-50">
                            <RightClickMusicOptions
                                music={music}
                                currentPlaylistId={playlistId}
                                playlists={allPlaylists}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}