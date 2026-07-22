import { useQuery } from "@tanstack/react-query"
import { artistService } from "../services/artists.service"

export const useRecentArtistsQuery = () => {
    return useQuery({
        queryKey: ['artists', 'recent'],
        queryFn: artistService.getRecentArtists,
    });
};