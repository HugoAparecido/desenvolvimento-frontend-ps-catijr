import { useQuery } from "@tanstack/react-query"
import { musicService } from "../services/music.service";

export const useMostPlayedMusics = () => {
    return useQuery({
        queryKey: ['most', 'played', 'musics'],
        queryFn: musicService.getMostPlayedMusics,
    });
};

export const useArtistPopularMusics = (artistId: string) => {
    return useQuery({
        queryKey: ['artist', 'popular', 'musics', artistId],
        queryFn: () => musicService.getArtistPopularMusic(artistId),
        enabled: !!artistId,
    });
};