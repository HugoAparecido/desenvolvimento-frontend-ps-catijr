import { useQuery } from "@tanstack/react-query"
import { playlistService } from "../services/playlist.service";

export const useUserPlaylists = () => {
    return useQuery({
        queryKey: ['playlist', 'user'],
        queryFn: playlistService.getUserPlaylists,
    });
};