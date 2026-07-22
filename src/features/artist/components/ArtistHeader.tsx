import { FormatIntegersToBrazilianFormat } from "../../../utils/formatters"

interface ArtistHeader {
    artist: {
        imagePath: string,
        name: string,
        verified: boolean,
        qtdListeners: number,
    }
}

export function ArtistHeader({ artist }: ArtistHeader) {
    return (
        <div className="relative isolate overflow-hidden w-full h-96.5 flex flex-col justify-end gap-2.5 p-4 rounded-t-xl bg-cover bg-center bg-no-repeat
  
        before:content-[''] before:absolute before:inset-0 before:bg-artist-header before:-z-10"

            style={{ backgroundImage: `url(${artist.imagePath})` }}
        >
            <span className="text-[64px] font-bold text-text-base font-default-font lining-none" >
                {artist.name}
            </span>
            {artist.verified && (
                <div className="flex gap-1 items-center">
                    <img src="/artist/artist_verified.svg" alt="Verificado" className="w-4.5" />
                    <span className="text-xs font-bold text-text-base font-default-font lining-none">
                        Verified by Spotify
                    </span>
                </div>
            )}
            <span className="text-xs font-medium text-text-base font-default-font lining-none">
                {FormatIntegersToBrazilianFormat(artist.qtdListeners)} ouvintes mensais
            </span>
        </div>
    )
}