import { api } from "../api/axios"
import type { MostPlayedArtists, RecentArtist } from "../types/artist";

export const artistService = {
    getRecentArtists: async (): Promise<RecentArtist[]> => {
        const response = await api.get<RecentArtist[]>(`/user/recentArtists`);
        return response.data;
    },

    getMostPlayedArtists: async (): Promise<MostPlayedArtists[]> => {
        const response = await api.get<MostPlayedArtists[]>(`/user/mostPlayedArtists`);
        return response.data;
    },
}