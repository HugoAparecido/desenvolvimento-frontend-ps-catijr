import { RightClickMenu } from "../../../../components/ui/options/RightClickMenu";
import { type RightClickMenuNode } from "../../../../components/ui/options/RightClickMenuItem";
import { useAddMusicToPlaylist, useRemoveMusicFromPlaylist } from "../../../../hooks/usePlaylist"; // Ajuste o caminho do import
import type { UserPlaylist } from "../../../../types/playlist";

interface RightClickMusicOptionsProps {
    music: {
        id: string;
    };
    currentPlaylistId?: string; // ID da playlist atual (caso esteja dentro de uma playlist para o "Remover")
    playlists: UserPlaylist[]; // Lista de playlists do usuário para preencher o submenu
}

export function RightClickMusicOptions({ music, currentPlaylistId, playlists }: RightClickMusicOptionsProps) {
    const addMutation = useAddMusicToPlaylist();
    const removeMutation = useRemoveMusicFromPlaylist();

    const optionItems: RightClickMenuNode[] = [
        {
            iconPath: "/action/plus.svg",
            iconDescription: "Plus",
            text: "Adicionar à playlist",
            children: playlists.map((playlist) => ({
                text: playlist.name,
                onClick: () => {
                    addMutation.mutate({
                        playlistId: playlist.id,
                        musicId: music.id,
                    });
                },
            })),
        },
        ...(currentPlaylistId ? [{
            iconPath: "/action/block.svg",
            iconDescription: "Block",
            text: "Remover desta Playlist",
            onClick: () => {
                removeMutation.mutate({
                    playlistId: currentPlaylistId,
                    musicId: music.id,
                });
            },
        }] : []),
        {
            iconPath: "/action/add_subdued.svg",
            iconDescription: "Add fill",
            text: "Salvar em Músicas Curtidas",
        },
        {
            iconPath: "/tag/saved.svg",
            iconDescription: "Saved",
            text: "Remover da sua biblioteca",
            hasDivider: true,
        },
        {
            iconPath: "/artist/artist.svg",
            iconDescription: "Plus",
            text: "Ir para o artista",
        },
        {
            iconPath: "/tag/album.svg",
            iconDescription: "Album",
            text: "Ir para o álbum",
        },
        {
            iconPath: "/tag/credits.svg",
            iconDescription: "Credits",
            text: "Ver créditos",
        },
    ];

    return <RightClickMenu options={optionItems} />;
}