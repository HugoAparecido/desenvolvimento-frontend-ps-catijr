import type { Artist } from "../features/music/panel/hooks/useCreditItem";
import { artist1, artist2, artist3, artist4 } from "./mockEvent";

export const mockSongPanel = {
    originName: "you know",
    originID: "2",
    typeOrigin: 'album',
    musicName: "Never Let Go",
    artists: [
        artist1,
        artist2,
        artist3,
        artist4,
    ] as Artist[],
}