import type { Music } from "./musics";

export interface UserPlaylist {
    id: string,
    name: string,
    description: string,
    musicQtd: number,
    duration: 175,
    createdAt: string,
    updatedAt: string | null,
}

export interface PlaylistInfo {
    id: string | number,
    imagePath: string | string[],
    name: string,
    description: string,
    isPublic: boolean,
    isFixed: boolean
}

export interface CreatePlaylistDTO {
    name: string;
    description: string;
}

export interface PlaylistDetailDTO {
    id: string;
    name: string;
    description: string;
    musicQtd: number;
    duration: number;
    musics: Music[];
    createdAt: string;
    updatedAt: string | null;
}

export interface PutPlaylistDTO {
    name?: string;
    description?: string;
    isPublic?: boolean;
}