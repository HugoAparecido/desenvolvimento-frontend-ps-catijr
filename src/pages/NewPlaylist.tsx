import { NewPlaylistHeader } from "../features/playlist/components/NewPlaylistHeader";

export function NewPlaylist() {

    const playlistHeader = {
        name: "Minha Lista Favorita",
        isPublic: false,
        description: "Músicas para relaxar",
        owner: {
            name: "João Silva",
            image: "https://github.com/seu-usuario.png"
        }
    }

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