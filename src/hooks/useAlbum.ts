import { useQuery } from "@tanstack/react-query"
import { albumService } from "../services/album.service";

export const useRecentAlbums = () => {
    return useQuery({
        queryKey: ['albums', 'recent'],
        queryFn: albumService.getRecentAlbums,
    });
};