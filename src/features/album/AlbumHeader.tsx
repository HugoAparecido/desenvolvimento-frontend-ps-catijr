import { FormatPlaylistTime } from "../../utils/formatters"

interface AlbumHeaderProps {
    album: {
        image: string,
        name: string,
        owner: {
            name: string,
            image: string,
        },
        qtdMusics: number,
        totalPlayTime: number,
    }
}

export function AlbumHeader({ album }: AlbumHeaderProps) {
    return (
        <div className="flex w-full h-max flex-col gap-2.5 px-5 pt-10 pb-4 bg-playlist-header overflow-hidden">
            <div className="flex gap-3 items-center">
                <div className={`relative w-43.5 h-43.5 overflow-hidden rounded-sm shrink-0`}>
                    <img
                        src="/card/album.png"
                        alt={`Album`}
                        className={`w-full h-full object-cover block`} />
                </div>
                <div className="flex flex-col gap-2.5 truncate">
                    <span className="text-white text-[64px] font-black lining-none font-default-font">
                        {album.name}
                    </span>
                    <div className="flex gap-1 items-center">
                        <div className="flex gap-1 items-center">
                            <img src={album.owner.image} alt="Owner"
                                className="w-4 h-4 object-cover rounded-full shrink-0"
                            />
                            <span className="text-text-base text-xs font-bold lining-none font-default-font">
                                {album.owner.name}
                            </span>
                        </div>
                        <div className="w-0.75 h-0.75 bg-text-subdued rounded-full" />
                        <span className="text-text-subdued text-xs font-medium lining-none font-default-font">
                            {album.qtdMusics} {album.qtdMusics <= 1 && album.qtdMusics > 0 ? "música" : "músicas"}, {FormatPlaylistTime(album.totalPlayTime)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}