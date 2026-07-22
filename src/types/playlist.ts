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