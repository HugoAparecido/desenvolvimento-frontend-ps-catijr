import React, { useEffect, useRef, useState } from "react";
import { LinkButton } from "../../../../components/ui/buttons/LinkButton";

interface SongPanelLongArtistListProps {
    artistsOwners: {
        id: string | number, name: string
    }[],
    className?: string,
}

export function SongPanelLongArtistList({ artistsOwners, className = "" }: SongPanelLongArtistListProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [scrollDist, setScrollDist] = useState(0);

    useEffect(() => {
        if (!containerRef.current || !textRef.current)
            return;

        const calculateDistance = () => {
            if (containerRef.current && textRef.current) {
                const containerWidth = containerRef.current!.offsetWidth;
                const textWidth = textRef.current!.scrollWidth;

                if (textWidth > containerWidth)
                    setScrollDist(textWidth - containerWidth);
                else
                    setScrollDist(0);
            }
        }

        const observer = new ResizeObserver(() => {
            calculateDistance();
        })

        observer.observe(containerRef.current);
        observer.observe(textRef.current);

        return () => observer.disconnect();

    }, [artistsOwners])

    return (
        <div
            ref={containerRef}
            className={`relative flex overflow-hidden whitespace-nowrap group ${className}`}
            style={{ "--scroll-dist": `-${scrollDist}px` } as React.CSSProperties}
        >
            <span
                ref={textRef}
                className={`w-max shrink-0 text-text-subdued text-sm font-semibold font-default-font
                ${scrollDist > 0 ? 'group-hover:meu-scroll-animado' : ''}`}
            >
                {artistsOwners.map((artist, index) => (
                    <React.Fragment key={artist.id}>
                        <LinkButton
                            text={artist.name}
                            variant="default_subdued_12"
                            route_link={`artist/${artist.id}`}
                        />
                        {index < artistsOwners.length - 1 && ', '}
                    </React.Fragment>
                ))}
            </span>
        </div>
    )
}