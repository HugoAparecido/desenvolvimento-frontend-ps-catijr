import { api } from "../api/axios";
import type { MostPlayedMusics, Music } from "../types/musics";

export const musicService = {
    getMostPlayedMusics: async (): Promise<MostPlayedMusics[]> => {
        const reponse = await api.get<MostPlayedMusics[]>(`/user/mostPlayedMusics`);
        return reponse.data;
    },

    getArtistPopularMusic: async (artistId: string): Promise<Music[]> => {
        const reponse = await api.get<Music[]>(`/artist/${artistId}/popularMusics`);
        return reponse.data;
    },
}