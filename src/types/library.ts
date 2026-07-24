import type { TypeLibraryItem } from "../features/library/components/item/components/LibraryItemText";
import type { RecentAlbums } from "./album";
import type { RecentArtist } from "./artist";
import type { PlaylistInfo, UserPlaylist } from "./playlist";

export type LibraryItemDisplay = (UserPlaylist | RecentAlbums | RecentArtist) & {
    displayName: string;
    type: TypeLibraryItem;
    owner?: string;
    fixed?: boolean;
    imagePath: string;
    routeData?: Record<string, unknown>;
};

export type ItemDomainData =
    | { type: 'playlist'; data: PlaylistInfo & { isFixed: boolean }; onToggleFixed: () => void }
    | { type: 'album'; data: { isFixed: boolean }; onToggleFixed: () => void }
    | { type: 'artist'; data: { isFixed: boolean }; onToggleFixed: () => void };