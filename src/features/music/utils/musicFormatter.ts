import type { ArtistAlbum } from "../../../types/album";
import type { Music } from "../../../types/musics";

export function formatMusicData(music: Music, artistAlbums: ArtistAlbum[] = []) {
    const currentAlbum = artistAlbums.find(album => album.id === music.albumId);

    return {
        id: music.id,
        title: music.title ?? "Desconhecido",
        artist: {
            id: music.artistId,
            name: currentAlbum?.artistName ?? "Artista Desconhecido"
        },
        album: {
            id: music.albumId,
            name: currentAlbum?.title ?? "Álbum Desconhecido"
        },
        duration: music.duration ?? 0,
        createdAt: music.createdAt ?? "",
    };
}