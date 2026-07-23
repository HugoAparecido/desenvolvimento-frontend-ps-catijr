import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { playlistService } from "../services/playlist.service";
import type { CreatePlaylistDTO } from "../types/playlist";

export const useUserPlaylists = () => {
    return useQuery({
        queryKey: ['playlist', 'user'],
        queryFn: playlistService.getUserPlaylists,
    });
};

export const useCreatePlaylist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newPlaylist: CreatePlaylistDTO) => playlistService.getCreatePlaylist(newPlaylist),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['playlist', 'user'] });
        },
    });
};

export const useDeletePlaylist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (playlistId: string | number) => playlistService.deletePlaylist(playlistId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['playlist', 'user'] });
        },
    });
};

export const usePlaylistById = (id: string) => {
    return useQuery({
        queryKey: ['playlist', id],
        queryFn: () => playlistService.getPlaylistById(id),
        enabled: !!id,
    });
};