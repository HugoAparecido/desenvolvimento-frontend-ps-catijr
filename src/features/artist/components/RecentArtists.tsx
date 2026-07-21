import { useEffect, useRef, useState } from "react";
import { ItemLargeCard } from "../../../components/card/ItemLargeCard";
import { LinkButton } from "../../../components/ui/buttons/LinkButton";
import { calculateQuantityOfItems } from "../../../utils/delimiters";
import { useRecentArtists } from "../hooks/useRecentArtists";

export function RecentArtists() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [maximumNumberOfInlineItems, setMaximumNumberOfInlineItems] = useState(1);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver(() => {
            const primeiroItem = container.firstElementChild as HTMLElement | null;
            if (!primeiroItem) return;

            const larguraContainer = container.offsetWidth;
            const larguraItem = primeiroItem.offsetWidth;

            const estiloContainer = window.getComputedStyle(container);
            const gap = parseFloat(estiloContainer.gap) || 0;

            const novaQuantidade = calculateQuantityOfItems(larguraContainer, larguraItem, gap) + 1;

            setMaximumNumberOfInlineItems((prev) =>
                prev !== novaQuantidade ? novaQuantidade : prev
            );
        });

        observer.observe(container);

        return () => observer.disconnect();
    }, []);
    const { artists, handleViewClick, hasMore } = useRecentArtists(maximumNumberOfInlineItems);

    return (
        <div className="py-2 gap-3 font-poppins w-full transition-all">
            <div className="flex justify-between">
                <span className="text-text-base font-bold">Artistas recentes</span>
                <LinkButton text={hasMore ? "Mostrar tudo" : "Mostrar menos"} variant="default_subdued_10_same_color" onClick={handleViewClick} />
            </div>
            <div className={`flex gap-3 ${hasMore ? "overflow-hidden" : "flex-wrap"}`} ref={containerRef}>
                {artists.map((artist, index) =>
                    <ItemLargeCard
                        key={index}
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