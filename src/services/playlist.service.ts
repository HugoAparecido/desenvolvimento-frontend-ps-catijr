import { api } from "../api/axios";
import type { UserPlaylist } from "../types/playlist";

export const playlistService = {
    getUserPlaylists: async (): Promise<UserPlaylist[]> => {
        const reponse = await api.get<UserPlaylist[]>(`/user/playlists`);
        return reponse.data;
    }
}