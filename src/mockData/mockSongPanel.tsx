import { artist1, artist2, type Artist } from "./mockEvent";

export const mockSongPanel = {
    originName: "you know",
    originID: "2",
    typeOrigin: 'album',
    musicName: "Never Let Go",
    artists: [
        artist1,
        artist2,
    ] as Artist[],
}