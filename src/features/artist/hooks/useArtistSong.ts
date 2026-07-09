import { useState } from "react";

const ALL_SONGS = [
    { id: 1, title: "Música 1" },
    { id: 2, title: "Música 2" },
    { id: 3, title: "Música 3" },
    { id: 4, title: "Música 4" },
    { id: 5, title: "Música 5" },
    { id: 6, title: "Música 6" },
    { id: 7, title: "Música 7" },
];

export const useArtistSong = (artistId: string | number) => {
    console.log(artistId);

    const [visibleCount, setVisibleCount] = useState(5);

    const songs = ALL_SONGS;

    const hasMore = visibleCount < songs.length;

    const displayedSongs = songs.slice(0, visibleCount);

    const handleViewClick = () => {
        if (hasMore)
            setVisibleCount(songs.length);
        else
            setVisibleCount(5);
    }

    return {
        songs: displayedSongs,
        handleViewClick,
        hasMore,
    }
};