import { useQuery } from "@tanstack/react-query"
import { artistService } from "../services/artists.service"

export const useRecentArtistsQuery = () => {
    return useQuery({
        queryKey: ['artists', 'recent'],
        queryFn: artistService.getRecentArtists,
    });
};

export const useMostPlayedArtists = () => {
    return useQuery({
        queryKey: ['artists', 'most', 'played'],
        queryFn: artistService.getMostPlayedArtists,
    });
};