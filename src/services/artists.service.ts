import { api } from "../api/axios"
import type { RecentArtist } from "../types/artist";

export const artistService = {
    getRecentArtists: async (): Promise<RecentArtist[]> => {
        const response = await api.get<RecentArtist[]>(`/user/recentArtists`);
        return response.data;
    }
}