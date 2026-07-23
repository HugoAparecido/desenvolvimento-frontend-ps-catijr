import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ArtistHeader } from "../features/artist/components/ArtistHeader";

export function Artist() {
    const { id } = useParams();
    const location = useLocation();

    const [artistData, setArtistData] = useState<unknown>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchArtistInfo() {
            if (location.state && location.state.name) {
                setArtistData(location.state);
                setIsLoading(false);
                return;
            }

            if (id) {
                setIsLoading(true);
                try {
                    const mockFromApi = {
                        imagePath: "/artist/artist_header.png",
                        name: "Artista Carregado via API",
                        verified: true,
                        listeners: 999999,
                    };

                    setArtistData(mockFromApi);
                } catch (error) {
                    console.error("Erro ao buscar o artista:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        }

        fetchArtistInfo();
    }, [id, location.state]);

    if (isLoading) {
        return <div className="p-4 text-white">Carregando artista...</div>;
    }

    if (!artistData) {
        return <div className="p-4 text-white">Artista não encontrado.</div>;
    }

    const artistToRender = {
        imagePath: artistData.imagePath || "/artist/artist_header.png",
        name: artistData.name || artistData.itemText?.itemName || "Artista Desconhecido",
        verified: artistData.verified ?? true,
        qtdListeners: artistData.listeners || artistData.qtdListeners || 0,
    };

    return (
        <div className="w-full h-max gap-2.5 rounded-xl">
            <ArtistHeader artist={artistToRender} />
        </div>
    );
}