import type { Music } from "./musics";

export interface RecentAlbums {
    id: string,
    title: string,
    year: string,
    artistId: string,
    artistName: string,
    createdAt: string,
    updatedAt: string | null,
}

export interface ArtistAlbum {
    id: string;
    title: string;
    year: string;
    artistId: string;
    artistName: string;
    musics: Music[];
    createdAt: string;
    updatedAt: string | null;
}