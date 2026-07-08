import { useSearchBar } from "../hooks/useSearchBar";

interface SearchBarProps {
    onSearch: (results: string[]) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    const { query, handleInputChange, handleSubmit } = useSearchBar((q) => {
        const mockData = ["Flutter", "Raect", "Vue", "Angular", "Svelte"];
        const results = mockData.filter(item => item.toLowerCase().includes(q.toLowerCase()));
        onSearch(results);
    });

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                className="bg-gray-800 text-gray-300 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </form>
    );
}