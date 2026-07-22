import { NewPlaylistHeader } from "../features/playlist/components/NewPlaylistHeader"

const mock = {
    playlist: {
        isPublic: true,
        name: "you know",
        owner: {
            name: "Hugo Aparecido",
            image: "/profile/profile.png",
        },
    }
}

export function NewPlaylist() {
    return (
        <div className="w-full flex-col rounded-lg">
            <NewPlaylistHeader playlist={mock.playlist} />
            <div className="flex flex-col w-max p-5 gap-3">
                <span className="text-text-base text-[18px] font-bold lining-none font-default-font">
                    Nenhuma música adicionada ainda
                </span>
                <span className="text-text-subdued text-base font-medium lining-none font-default-font">
                    Adicione músicas para começar
                </span>
            </div>
        </div>
    )
}