interface NewPlaylistHeaderProps {
    playlist: {
        isPublic: boolean,
        name: string,
        owner: {
            name: string,
            image: string,
        },
    }
}

export function NewPlaylistHeader({ playlist }: NewPlaylistHeaderProps) {

    return (
        <div className="flex w-full h-max flex-col gap-2.5 px-5 pt-10 pb-4 bg-playlist-header rounded-t-xl">
            <div className="flex gap-3 items-center">
                <div className={`relative w-43.5 h-max rounded-sm`}>
                    <img src="/playlist/new_playlist.png" alt="Song Icon"
                        className="w-full rounded-sm"
                    />
                </div>
                <div className="flex flex-col gap-2.5">
                    <span className="text-text-base text-xs font-medium lining-none font-default-font">
                        Playlist {playlist.isPublic ? 'pública' : 'privada'}
                    </span>
                    <span className="text-white text-[64px] font-black lining-none font-default-font">
                        {playlist.name}
                    </span>
                    <div className="flex gap-1 items-center">
                        <img src={playlist.owner.image} alt="Owner"
                            className="w-4 h-4 object-cover rounded-full"
                        />
                        <span className="text-text-base text-xs font-bold lining-none font-default-font">
                            {playlist.owner.name}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}