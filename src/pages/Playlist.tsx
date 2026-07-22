import { PlaylistHeader } from "../features/playlist/components/PlaylistHeader"

const mock = {
    playlist: {
        images: ["/card/playlist1.png", "/card/playlist1.png", "/card/playlist1.png", "/card/playlist1.png"],
        isPublic: true,
        name: "you know",
        owner: {
            name: "Hugo Aparecido",
            image: "/profile/profile.png",
        },
        qtdMusics: 21,
        totalPlayTime: 71,
    }
}

export function Playlist() {
    return (
        <div className="w-full h-max">
            <PlaylistHeader playlist={mock.playlist} />
        </div>
    )
}