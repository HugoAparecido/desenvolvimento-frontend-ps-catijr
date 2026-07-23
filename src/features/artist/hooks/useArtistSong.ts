import { useState } from "react";
import type { Music } from "../../../types/musics";

export const useArtistSong = (musics: Music[]) => {

    const [visibleCount, setVisibleCount] = useState(5);

    const songs = musics;

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