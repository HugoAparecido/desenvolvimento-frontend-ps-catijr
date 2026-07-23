import { api } from "../api/axios";
import type { CreatePlaylistDTO, PlaylistDetailDTO, UserPlaylist } from "../types/playlist";

export const playlistService = {
    getUserPlaylists: async (): Promise<UserPlaylist[]> => {
        const reponse = await api.get<UserPlaylist[]>(`/user/playlists`);
        return reponse.data;
    },

    getCreatePlaylist: async (data: CreatePlaylistDTO): Promise<UserPlaylist> => {
        const response = await api.post<UserPlaylist>('/playlist/', data);
        return response.data;
    },

    deletePlaylist: async (playlistId: string | number): Promise<void> => {
        await api.delete(`/playlist/${playlistId}`);
    },

    getPlaylistById: async (id: string): Promise<PlaylistDetailDTO> => {
        const response = await api.get(`/playlist/${id}`);
        return response.data;
    },
}