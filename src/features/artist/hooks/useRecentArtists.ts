import { useState } from "react"
import { mockItemsArtistsCard } from "./mockArtistCard";

export const useRecentArtists = (maximumNumberOfInlineItems: number) => {
    console.log(maximumNumberOfInlineItems);

    const [visibleCount, setVisibleCount] = useState(maximumNumberOfInlineItems);

    const artists = mockItemsArtistsCard;

    const hasMore = visibleCount < artists.length;

    const displayedArtists = artists.slice(0, visibleCount);

    const handleViewClick = () => {
        if (hasMore)
            setVisibleCount(artists.length);
        else
            setVisibleCount(5);
    }

    return {
        artists: displayedArtists,
        handleViewClick,
        hasMore,
    }
}