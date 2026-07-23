import type { ArtistAlbum } from "../../../types/album";
import type { Music } from "../../../types/musics";

export function formatMusicData(music: Music, artistAlbums: ArtistAlbum[] = []) {
    const currentAlbum = artistAlbums.find(album => album.id === music.albumId);

    return {
        id: music.id,
        title: music.title ?? "Desconhecido",
        artistName: currentAlbum?.artistName ?? "Artista Desconhecido",
        albumName: currentAlbum?.title ?? music.albumId ?? "Álbum Desconhecido",
        duration: music.duration ?? "0:00",
        createdAt: music.createdAt ?? "",
    };
}