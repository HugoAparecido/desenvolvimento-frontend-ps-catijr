import { useState } from "react";

export const useSearchBar = <T>(onSearch: (query: string) => T) => {
    const [query, setQuery] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query);
    }

    const handleClear = () => {
        setQuery('');
    }

    return {
        query,
        handleInputChange,
        handleSubmit,
        handleClear,
    };
}