import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { Perfil } from "./pages/Perfil";
import { SearchResult } from "./pages/SearchResult";
import { Artist } from "./pages/Artist";
import { Playlist } from "./pages/Playlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="searchResult" element={<SearchResult />} />

        <Route path="artist/:artistId" element={<Artist />} />
        <Route path="playlist/:playlistId" element={<Playlist />} />
      </Route>
    </Routes>);
}

export default App;
