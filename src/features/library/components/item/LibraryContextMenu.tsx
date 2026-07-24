import { RightClickPlaylistOptions } from "../../../playlist/components/action/RightClickPlaylistOptions";
import { RightClickAlbumOptions } from "../../../album/action/RightClickAlbumOptions";
import { RightClickArtistOptions } from "../../../artist/components/action/RightClickArtistOptions";
import type { PlaylistInfo } from "../../../../types/playlist";

type ItemDomainData =
    | { type: 'playlist'; data: PlaylistInfo & { isFixed: boolean }; onToggleFixed: () => void }
    | { type: 'album'; data: { isFixed: boolean }; onToggleFixed: () => void }
    | { type: 'artist'; data: { isFixed: boolean }; onToggleFixed: () => void };

export function LibraryContextMenu({ domain }: { domain: ItemDomainData }) {
    switch (domain.type) {
        case 'playlist':
            return (
                <RightClickPlaylistOptions
                    playlist={domain.data}
                    actions={{ onToggleFixed: domain.onToggleFixed }}
                />
            );
        case 'album':
            return <RightClickAlbumOptions actions={{ onToggleFixed: domain.onToggleFixed }} />;
        case 'artist':
            return <RightClickArtistOptions actions={{ onToggleFixed: domain.onToggleFixed }} />;
        default:
            return null;
    }
}