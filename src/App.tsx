import { ItemLargeCard } from "./components/card/ItemLargeCard";

function App() {
  return <>
    <div className="flex flex-col gap-4 bg-black">
      {/* Instância 1: Album */}
      <ItemLargeCard
        typeCard="Album"
        text="Random Access Memories"
        imagePath="/path/to/album.jpg"
        imageDescription="Capa do álbum"
        albumYear="2013"
        playAction={() => console.log("Play Album")}
      />

      {/* Instância 2: Playlist */}
      <ItemLargeCard
        typeCard="Playlist"
        text="Daily Mix 1"
        imagePath="/path/to/playlist.jpg"
        imageDescription="Capa da playlist"
        playlistOwner="Spotify"
        playAction={() => console.log("Play Playlist")}
      />

      {/* Instância 3: Artist */}
      <ItemLargeCard
        typeCard="Artist"
        text="Daft Punk"
        imagePath="/path/to/artist.jpg"
        imageDescription="Foto do artista"
        playAction={() => console.log("Play Artist")}
      />

      {/* Instância 4: Person */}
      <ItemLargeCard
        typeCard="Person"
        text="Nome do Usuário"
        imagePath="/path/to/avatar.jpg"
        imageDescription="Foto de perfil"
        playAction={() => console.log("Play Person")}
      />
    </div>
  </>;
}

export default App;
