import { useQuery } from "@tanstack/react-query"
import { albumService } from "../services/album.service";

export const useRecentAlbums = () => {
    return useQuery({
        queryKey: ['albums', 'recent'],
        queryFn: albumService.getRecentAlbums,
    });
};

export const useArtistAlbums = (artistId: string) => {
    return useQuery({
        queryKey: ['albums', 'artist', artistId],
        queryFn: () => albumService.getArtistAlbums(artistId),
        enabled: !!artistId,
    });
};