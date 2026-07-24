import { useParams } from "react-router-dom";
import { NewPlaylistHeader } from "../features/playlist/components/NewPlaylistHeader";
import { usePlaylistById } from "../hooks/usePlaylist";
import { mockUser } from "../mockData/mockUserInfos";

export function NewPlaylist() {
    const { playlistId } = useParams();

    const { data: playlist, isLoading } = usePlaylistById(playlistId as string);

    if (isLoading || !playlist) {
        return (
            <div className="w-full flex-col rounded-lg p-5">
                <span className="text-text-base">Carregando playlist...</span>
            </div>
        );
    }

    const playlistHeader = {
        name: playlist.name || "Sem título",
        isPublic: false,
        description: playlist.description || "",
        owner: {
            name: mockUser.name,
            image: mockUser.imagePath
        }
    };

    return (
        <div className="w-full flex-col rounded-lg">
            <NewPlaylistHeader playlist={playlistHeader} />
            <div className="flex flex-col w-max p-5 gap-3">
                <span className="text-text-base text-[18px] font-bold lining-none font-default-font">
                    Nenhuma música adicionada ainda
                </span>
                <span className="text-text-subdued text-base font-medium lining-none font-default-font">
                    Adicione músicas para começar
                </span>
            </div>
        </div>
    );
}