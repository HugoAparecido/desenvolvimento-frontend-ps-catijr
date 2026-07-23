import { useLocation, useParams } from "react-router-dom";
import { NewPlaylistHeader } from "../features/playlist/components/NewPlaylistHeader";

export function NewPlaylist() {
    const location = useLocation();

    const playlistFromState = location.state?.playlistData;

    const playlist = playlistFromState;

    return (
        <div className="w-full flex-col rounded-lg">
            <NewPlaylistHeader playlist={playlist?.name ?? "New playlist"} />
            <div className="flex flex-col w-max p-5 gap-3">
                <span className="text-text-base text-[18px] font-bold lining-none font-default-font">
                    Nenhuma música adicionada ainda
                </span>
                <span className="text-text-subdued text-base font-medium lining-none font-default-font">
                    Adicione músicas para começar
                </span>
                {playlist?.description && (
                    <span className="text-text-subdued text-base font-medium lining-none font-default-font">
                        {playlist?.description}
                    </span>
                )}
            </div>
        </div>
    );
}