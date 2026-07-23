import { api } from "../api/axios";
import type { ArtistAlbum, RecentAlbums } from "../types/album";

export const albumService = {
    getRecentAlbums: async (): Promise<RecentAlbums[]> => {
        const reponse = await api.get<RecentAlbums[]>(`/user/recentAlbums`);
        return reponse.data;
    },

    getArtistAlbums: async (artistId: string): Promise<ArtistAlbum[]> => {
        const response = await api.get<ArtistAlbum[]>(`/artist/${artistId}/albums`);
        return response.data;
    },
}