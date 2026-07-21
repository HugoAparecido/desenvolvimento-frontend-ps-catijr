import type { Artist } from "../../hooks/useCreditItem"
import { CreditsItem } from "../CreditsItem"

interface CreditsPopupProps {
    artists: Artist[],
    musicName: string,
    fonts: string | string[],
    onClickClose: () => void,
}

export function CreditsPopup({ artists, musicName, fonts, onClickClose }: CreditsPopupProps) {
    const normalizedFonts = Array.isArray(fonts) ? fonts : [fonts];

    return (
        <div className="flex flex-col w-82.75 h-max justify-start items-start gap-4 py-4 rounded-xl bg-background-base">
            <div className="flex justify-between w-full items-start px-4">
                <div className="flex flex-col items-start justify-start gap-1">
                    <span className="font-bold font-default-font text-h6 text-text-base leading-none">Créditos</span>
                    <span className="font-bold font-default-font text-sm text-text-base leading-none">
                        {musicName}
                    </span>
                </div>
                <div>
                    <button type="button"
                        onClick={onClickClose}
                        className="w-max cursor-pointer"
                    >
                        <img src="action/x.svg" alt="Close"
                            className="w-3"
                        />
                    </button>
                </div>
            </div>
            <div className="w-full border-[0.5px] border-divider"></div>
            <div className="flex flex-col w-full gap-6">
                <div className="flex w-full px-4 gap-3 flex-col">
                    <span className="text-base font-default-font font-bold lining-none text-text-base">Artista</span>
                    <div className="flex flex-col gap-2">

                        {artists.filter((artist) => artist.typesCreditbyArtist.includes('principal artist')).map((artist, index) => (
                            <CreditsItem
                                artist={artist}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex w-full px-4 gap-3 flex-col">
                    <span className="text-base font-default-font font-bold lining-none text-text-base">Composição e letra</span>
                    <div className="flex flex-col gap-2">
                        {artists.filter((artist) => !artist.typesCreditbyArtist.includes('principal artist')).map((artist, index) => (
                            <CreditsItem
                                artist={artist}
                                key={index}
                            />
                        ))}</div>
                </div>
                <div className="flex w-full px-4 gap-1 flex-col">
                    <span className="text-base font-default-font font-bold lining-none text-text-base">Fontes</span>
                    {normalizedFonts.map((font, index) => (
                        <span key={index}
                            className="lining-none text-text-subdued font-medium text-xs font-default-font"
                        >
                            {font}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}