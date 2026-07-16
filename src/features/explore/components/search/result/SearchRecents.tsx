import { useEffect, useState } from "react";
import { SearchLoadingItem } from "../loading/SearchLoadingItem";
import { mockRecentResults } from "../../../mockData/mockSearRecent";
import { SearchRecentResultItem, type SearchRecentResultItemProps } from "./components/SearchRecentResultItem";

export function SearchRecent() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<SearchRecentResultItemProps[]>([]);

    const [error, setError] = useState<string | Error | unknown>('');

    const fetchSearchResults = async () => {
        try {
            const mockResult = await new Promise<SearchRecentResultItemProps[]>((resolve) => {
                setTimeout(() => {
                    resolve(mockRecentResults);
                }, 1000);
            });

            setData(mockResult);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSearchResults();
    }, []);

    return (
        <div className="flex flex-col w-88.75 h-max px-3.5 py-2 gap-1.5 justify-start items-start bg-divider rounded-sm ease-out duration-300">
            {isLoading ?
                Array.from({ length: 6 }).map((_, index) => (
                    <SearchLoadingItem key={index} />
                ))
                : (<>
                    <span className="text-sm text-white font-sans font-bold">Buscas recentes</span>

                    <div className="flex w-full flex-col">
                        <div className="flex w-full flex-col gap-2 justify-start items-start">
                            {
                                data.length > 0 ? (
                                    data.map((item) => (
                                        <SearchRecentResultItem
                                            key={item.itemId}
                                            itemId={item.itemId}
                                            itemName={item.itemName}
                                            itemType={item.itemType}
                                            imagePath={item.imagePath}
                                            artistVerified={item.artistVerified}
                                            musicOwners={item.musicOwners}
                                            explicit={item.explicit}
                                        />
                                    ))
                                ) : (
                                    <span>Nenhum resultado encontrado.</span>
                                )
                            }
                        </div>
                    </div></>
                )
            }

        </div>
    );
}