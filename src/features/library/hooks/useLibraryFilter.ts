export type LibraryFilterValue = 'all' | 'playlist' | 'artist' | 'album';

export const libraryFilterValueDisplayNames: Record<LibraryFilterValue, string> = {
    all: 'Tudo',
    playlist: 'Playlist',
    album: 'Álbum',
    artist: 'Artista'
}