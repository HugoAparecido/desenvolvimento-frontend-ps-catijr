import { api } from "../api/axios";
import type { ArtistAlbum, RecentAlbums } from "../types/album";
import type { Music } from "../types/musics";

export const albumService = {
    getRecentAlbums: async (): Promise<RecentAlbums[]> => {
        const reponse = await api.get<RecentAlbums[]>(`/user/recentAlbums`);
        return reponse.data;
    },

    getArtistAlbums: async (artistId: string): Promise<ArtistAlbum[]> => {
        const response = await api.get<ArtistAlbum[]>(`/artist/${artistId}/albums`);
        return response.data;
    },

    getMusicsAlbumById: async (albumId: string): Promise<Music[]> => {
        const response = await api.get<Music[]>(`/album/${albumId}/musics`);
        return response.data;
    },

    getAlbumById: async (albumId: string): Promise<ArtistAlbum> => {
        const response = await api.get<ArtistAlbum>(`/album/${albumId}`);
        return response.data;
    }
}