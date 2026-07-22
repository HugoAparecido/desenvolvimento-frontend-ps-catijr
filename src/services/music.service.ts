import { api } from "../api/axios";
import type { MostPlayedMusics } from "../types/musics";

export const musicService = {
    getMostPlayedMusics: async (): Promise<MostPlayedMusics[]> => {
        const reponse = await api.get<MostPlayedMusics[]>(`/user/mostPlayedMusics`);
        return reponse.data;
    }
}