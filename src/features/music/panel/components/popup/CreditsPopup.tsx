import type { Artist } from "../../../../../mockData/mockEvent"
import { CreditsItem } from "../CreditsItem"

interface CreditsPopupProps {
    artists: Artist[]
}

export function CreditsPopup({ artists }: CreditsPopupProps) {
    return (
        <div className="flex flex-col w-max h-max justify-start items-start gap-3 p-3 rounded-xl bg-background-highlight">
            <div className="flex justify-between w-full items-center">
                <span className="font-bold font-default-font text-sm text-text-base">Créditos</span>
            </div>
            {artists.map((artist, index) => (
                <CreditsItem
                    artist={artist}
                    key={index}
                />
            ))}
        </div>
    )
}