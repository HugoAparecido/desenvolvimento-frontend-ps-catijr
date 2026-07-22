import { api } from "../api/axios";
import type { RecentAlbums } from "../types/album";

export const albumService = {
    getRecentAlbums: async (): Promise<RecentAlbums[]> => {
        const reponse = await api.get<RecentAlbums[]>(`/user/recentAlbums`);
        return reponse.data;
    }
}