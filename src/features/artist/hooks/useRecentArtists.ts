import { useState } from "react"
import { useRecentArtistsQuery } from "../../../hooks/useArtist";

export const useRecentArtists = (maximumNumberOfInlineItems: number) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const { data: recentArtists = [], isLoading } = useRecentArtistsQuery();
    console.log(recentArtists)

    const visibleCount = isExpanded ? recentArtists?.length : maximumNumberOfInlineItems;

    const displayedArtists = recentArtists?.slice(0, visibleCount);

    const hasMore = !isExpanded && (recentArtists?.length > maximumNumberOfInlineItems);

    const handleViewClick = () => {
        setIsExpanded(!isExpanded);
    }

    return {
        artists: displayedArtists,
        handleViewClick,
        hasMore,
    }
}