import { useLocation, useParams } from "react-router-dom";
import { PlaylistHeader } from "../features/playlist/components/PlaylistHeader"
import { mockUser } from "../mockData/mockUserInfos";
import type { UserPlaylist } from "../types/playlist";

export function Playlist() {

    const { playlistId } = useParams();
    const location = useLocation();

    const playlistState: UserPlaylist = location.state

    const mock = {
        playlist: {
            images: ["/card/playlist1.png", "/card/playlist1.png", "/card/playlist1.png", "/card/playlist1.png"],
            isPublic: true,
            name: playlistState.name,
            owner: {
                name: mockUser.name,
                image: mockUser.imagePath,
            },
            qtdMusics: playlistState.musicQtd,
            totalPlayTime: playlistState.duration,
        }
    }

    return (
        <div className="w-full h-max">
            <PlaylistHeader playlist={mock.playlist} />
        </div>
    )
}