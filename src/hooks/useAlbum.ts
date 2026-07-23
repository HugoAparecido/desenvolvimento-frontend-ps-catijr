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

export const useMusicsAlbumById = (albumId: string) => {
    return useQuery({
        queryKey: ['albums', 'musics', albumId],
        queryFn: () => albumService.getMusicsAlbumById(albumId),
        enabled: !!albumId,
    });
};

export const useAlbumById = (albumId: string) => {
    return useQuery({
        queryKey: ['albums', albumId],
        queryFn: () => albumService.getAlbumById(albumId),
        enabled: !!albumId,
    });
};