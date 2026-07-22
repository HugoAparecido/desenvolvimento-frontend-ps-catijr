import { FormatPlaylistTime } from "../../../utils/formatters";

interface PlaylistHeaderProps {
    playlist: {
        images: string | string[],
        isPublic: boolean,
        name: string,
        owner: {
            name: string,
            image: string,
        },
        qtdMusics: number,
        totalPlayTime: number,
    }
}

export function PlaylistHeader({ playlist }: PlaylistHeaderProps) {
    const normalizedImages = Array.isArray(playlist.images) ? playlist.images : [playlist.images];

    return (
        <div className="flex w-full h-max flex-col gap-2.5 px-5 pt-10 pb-4 bg-playlist-header">
            <div className="flex gap-3 items-center">
                <div className={`relative w-43.5 h-43.5 grid overflow-hidden grid-cols-2 grid-rows-2 rounded-sm`}>
                    {normalizedImages.map((img, index) => {
                        if (img) {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Album ${index + 1}`}
                                    className={`w-full h-full object-cover block`} />
                            )
                        }
                        return (
                            <div
                                key={`empty-${index}`}
                                className={`w-full h-full bg-black`}
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col gap-2.5">
                    <span className="text-text-base text-xs font-medium lining-none font-default-font">
                        Playlist {playlist.isPublic ? 'pública' : 'privada'}
                    </span>
                    <span className="text-white text-[64px] font-black lining-none font-default-font">
                        {playlist.name}
                    </span>
                    <div className="flex gap-1 items-center">
                        <div className="flex gap-1 items-center">
                            <img src={playlist.owner.image} alt="Owner"
                                className="w-4 h-4 object-cover rounded-full"
                            />
                            <span className="text-text-base text-xs font-bold lining-none font-default-font">
                                {playlist.owner.name}
                            </span>
                        </div>
                        <div className="w-0.75 h-0.75 bg-text-subdued rounded-full" />
                        <span className="text-text-subdued text-xs font-medium lining-none font-default-font">
                            {playlist.qtdMusics} músicas, {FormatPlaylistTime(playlist.totalPlayTime)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}