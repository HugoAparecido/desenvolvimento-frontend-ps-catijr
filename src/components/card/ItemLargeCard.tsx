interface ItemLargeCardProp {
    imagePath: string,
    imageDescription: string,
    typeCard: 'Album' | 'Playlist' | 'Artist' | 'Person',
    text: string,
    albumYear?: string,
    playlistPerson?: string,
}