export interface RecentAlbums {
    id: string,
    title: string,
    year: string,
    artistId: string,
    artistName: string,
    createdAt: string,
    updatedAt: string | null,
}

export interface AlbumActionInfo {
    id: string | number,
    isfixed: boolean
}