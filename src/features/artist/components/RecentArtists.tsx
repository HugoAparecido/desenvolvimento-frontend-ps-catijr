import { ItemLargeCard } from "../../../components/card/ItemLargeCard";
import { LinkButton } from "../../../components/ui/buttons/LinkButton";
import { calculateQuantityOfItems } from "../../../utils/delimiters";
import { useRecentArtists } from "../hooks/useRecentArtists";

export function RecentArtists() {
    const maximumNumberOfInlineItems = calculateQuantityOfItems(1000, 60, 4);

    const { artists, handleViewClick, hasMore } = useRecentArtists(maximumNumberOfInlineItems);

    return (
        <div className="py-2 gap-3 font-poppins w-full">
            <div className="flex justify-between">
                <span className="text-text-base font-bold">Artistas recentes</span>
                <LinkButton text={hasMore ? "Mostrar tudo" : "Mostrar menos"} variant="default_subdued_10_same_color" onClick={handleViewClick} />
            </div>
            <div className="flex gap-3">
                {artists.map(artist =>
                    <ItemLargeCard
                        imageDescription={artist.imageDescription}
                        imagePath={artist.imagePath}
                        playAction={artist.playAction}
                        text={artist.text}
                        typeCard="Artist"
                    />
                )}
            </div>
        </div>
    )
}