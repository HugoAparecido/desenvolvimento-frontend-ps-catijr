import { useState } from "react"
import { mockItemsArtistsCard } from "./mockArtistCard";

export const useRecentArtists = (maximumNumberOfInlineItems: number) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const artists = mockItemsArtistsCard;

    const visibleCount = isExpanded ? artists.length : maximumNumberOfInlineItems;

    const displayedArtists = artists.slice(0, visibleCount);

    const hasMore = !isExpanded && artists.length > maximumNumberOfInlineItems;

    const handleViewClick = () => {
        setIsExpanded(!isExpanded);
    }

    return {
        artists: displayedArtists,
        handleViewClick,
        hasMore,
    }
}