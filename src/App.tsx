import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { SearchResult } from "./pages/SearchResult";
import { Artist } from "./pages/Artist";
import { Playlist } from "./pages/Playlist";
import { NewPlaylist } from "./pages/NewPlaylist";
import { SongFull } from "./pages/SongFull";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="profile/teste" element={<Profile />} />
        <Route path="searchResult" element={<SearchResult />} />

        <Route path="artist/:artistId" element={<Artist />} />
        <Route path="playlist/:playlistId" element={<Playlist />} />
        <Route path="album/:albumId" element={<Playlist />} />
        <Route path="newPlaylist" element={<NewPlaylist />} />
        <Route path="song" element={<SongFull />} />
      </Route>
    </Routes>);
}

export default App;
