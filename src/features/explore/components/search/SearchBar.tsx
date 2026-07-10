import { useState } from "react";
import { useSearchBar } from "../../hooks/useSearchBar.ts";

interface SearchBarProps {
    onSearch: (results: string[]) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [selectedInput, setSelectedInput] = useState<string>('');
    const [closeHovered, setCloseHovered] = useState<boolean>(false);

    const { query, handleInputChange, handleSubmit, handleClear } = useSearchBar((q: string) => {
        const mockData = ["Flutter", "Raect", "Vue", "Angular", "Svelte"];
        const results = mockData.filter(item => item.toLowerCase().includes(q.toLowerCase()));
        onSearch(results);
    });

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="relative w-full max-w-88.75 h-8 flex items-center justify-center rounded-2xl bg-background-highlight">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400"><img src={selectedInput === 'search' ? "/search_bar/search_active.svg" : "/search_bar/search.svg"} alt="Search" className="h-4" /></span>
                <input
                    type="text"
                    placeholder="O que você quer ouvir?"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={() => setSelectedInput('search')}
                    onBlur={() => setSelectedInput('')}
                    className={`w-full h-full py-2 pl-9.5 pr-5.5 bg-transparent text-sm border ring-1 ${query ? 'ring-text-base' : 'ring-background-highlight'} border-background-highlight rounded-2xl focus:outline-none focus:border-text-base focus:ring-text-base ${query ? 'text-text-base' : 'text-text-subdued'} placeholder-text-subdued transition-colors`}
                />
                {query && (
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3.5" onClick={handleClear}
                    ><img src={closeHovered ? "/search_bar/close_active.svg" : "/search_bar/close.svg"} alt="Close" className="h-4 cursor-pointer" onMouseEnter={() => setCloseHovered(true)} onMouseLeave={() => setCloseHovered(false)} /></button>
                )}</div>
        </form>
    );
}