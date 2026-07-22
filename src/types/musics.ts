export interface MostPlayedMusics {
    id: string,
    title: string,
    artistId: string,
    albumId: string,
    playistId: string[],
    duration: number,
    releaseDate: string,
    timesListen: number,
    explicit: false,
    createdAt: string,
    updatedAt: string | null,
}