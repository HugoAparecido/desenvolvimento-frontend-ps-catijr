import { useQuery } from "@tanstack/react-query"
import { musicService } from "../services/music.service";

export const useMostPlayedMusics = () => {
    return useQuery({
        queryKey: ['most', 'played', 'musics'],
        queryFn: musicService.getMostPlayedMusics,
    });
};