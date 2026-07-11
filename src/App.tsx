import { ItemLargeCard } from "./components/card/ItemLargeCard";

function App() {
  return <>
    <div className="flex flex-col gap-4 bg-black">
      {/* Instância 1: Album */}
      <ItemLargeCard
        typeCard="Album"
        text="Random Access Memories"
        imagePath="/card/album.png"
        imageDescription="Capa do álbum"
        albumYear="2013"
        playAction={() => console.log("Play Album")}
      />

      {/* Instância 2: Playlist */}
      <ItemLargeCard
        typeCard="Playlist"
        text="Daily Mix 1"
        imagePath={["/card/playlist1.png", "/card/playlist2.png", "/card/playlist3.png", "/card/playlist4.png",]}
        imageDescription="Capa da playlist"
        playlistOwner="Spotify"
        playAction={() => console.log("Play Playlist")}
      />

      {/* Instância 3: Artist */}
      <ItemLargeCard
        typeCard="Artist"
        text="Daft Punk"
        imagePath="/card/artist.png"
        imageDescription="Foto do artista"
        playAction={() => console.log("Play Artist")}
      />

      {/* Instância 4: Person */}
      <ItemLargeCard
        typeCard="Person"
        text="Nome do Usuário"
        imagePath="/card/person.png"
        imageDescription="Foto de perfil"
        playAction={() => console.log("Play Person")}
      />
    </div>
  </>;
}

export default App;
