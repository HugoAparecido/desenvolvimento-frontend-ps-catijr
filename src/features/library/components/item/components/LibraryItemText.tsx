export type TypeLibraryItem = 'playlist' | 'album' | 'artist';

interface LibraryItemTextProp {
    itemName: string,
    type: TypeLibraryItem,
    owner?: string,
    fixed: boolean,
    isPlaying: boolean,
}
export function LibraryItemText({ itemName, fixed, owner = "", type, isPlaying }: LibraryItemTextProp) {
    const itemTypeDisplayNames: Record<TypeLibraryItem, string> = {
        playlist: 'Playlist',
        album: 'Álbum',
        artist: 'Artista'
    }

    return (
        <div className="flex flex-col w-35.75 gap-1 text-nowrap overflow-hidden">
            <div className="w-full h-max leading-none">
                <span
                    className={`leading-none font-arial text-xs font-bold ${isPlaying ? 'text-accent' : 'text-text-base'}`}
                >{itemName}</span>
            </div>
            <div className="flex w-full justify-start items-center gap-1 text-xs text-text-subdued font-default-font font-normal">
                {fixed && (
                    <img src="/tag/pin.svg" alt="Fixed" className="w-2.5" />
                )}
                <span>
                    {itemTypeDisplayNames[type]}
                </span>
                {!(owner === "") && (
                    <>
                        <div className="w-0.75 h-0.75 bg-text-subdued rounded-full"></div>
                        <span>
                            {owner}
                        </span>
                    </>
                )}
            </div>
        </div>
    )
}