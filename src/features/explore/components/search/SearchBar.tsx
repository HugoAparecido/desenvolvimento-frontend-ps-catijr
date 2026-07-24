import { useRef, useState } from "react";
import { useSearchBar } from "../../hooks/useSearchBar.ts";
import { useNavigate } from "react-router-dom";
import { SearchRecent } from "./result/SearchRecents.tsx";

export function SearchBar() {
    const [selectedInput, setSelectedInput] = useState<string>('');
    const [closeHovered, setCloseHovered] = useState<boolean>(false);
    const [isMobileExpanded, setIsMobileExpanded] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLFormElement>(null);

    const toggleMobileSearch = () => {
        setIsMobileExpanded(true);
        setTimeout(() => {
            if (inputRef.current)
                inputRef.current.focus();
        }, 0);
    }

    const onBlurHandler = (e: React.FocusEvent) => {
        if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
            return;
        }

        setSelectedInput('');
        setShowDropdown(false);
        if (!query)
            setIsMobileExpanded(false);
    }

    const { query, handleInputChange, handleSubmit, handleClear } = useSearchBar((q: string) => {
        setShowDropdown(false)
        navigate(`/searchResult?query=${encodeURIComponent(q)}`);
    });

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2"
            ref={containerRef}
            onBlur={onBlurHandler}
        >
            <div className={`relative 
                ${isMobileExpanded ? 'flex w-full' : 'hidden'}
                md:w-88.75 h-9 md:flex items-center justify-center rounded-2xl bg-background-highlight cursor-text`}>

                <button
                    type="submit"
                    className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400 cursor-pointer"
                >
                    <img
                        src={selectedInput === 'search' ? "/search_bar/search_active.svg" : "/search_bar/search.svg"}
                        alt="Search"
                        className="h-4"
                    />
                </button>

                <input
                    type="text"
                    placeholder="O que você quer ouvir?"
                    ref={inputRef}
                    value={query}
                    onChange={handleInputChange}
                    onFocus={() => {
                        setSelectedInput('search')
                        setShowDropdown(true);
                    }}
                    onBlur={onBlurHandler}

                    className={`w-full h-full py-2 pl-9.5 pr-5.5 bg-transparent text-sm border ring-1
                         ${query ? 'ring-text-base' : 'ring-background-highlight'}
                         border-background-highlight rounded-2xl focus:outline-none focus:border-text-base focus:ring-text-base 
                         ${query ? 'text-text-base' : 'text-text-subdued'} 
                         placeholder-text-subdued transition-colors`} />
                {query && (
                    <button type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3.5"
                        onClick={handleClear}
                    >
                        <img src={closeHovered ? "/search_bar/close_active.svg" : "/search_bar/close.svg"}
                            alt="Close"
                            className="h-4 cursor-pointer"
                            onMouseEnter={
                                () => setCloseHovered(true)}
                            onMouseLeave={
                                () => setCloseHovered(false)} />
                    </button>
                )}
                {showDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 z-50"
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchRecent />
                    </div>
                )}
            </div>

            {!isMobileExpanded && (
                <div className="md:hidden w-max h-9 flex px-3.5 gap-8 items-center justify-center rounded-2xl bg-background-highlight cursor-text">
                    <button
                        type="button"
                        className="flex items-center justify-center text-gray-400" onClick={toggleMobileSearch}>
                        <img
                            src={selectedInput === 'search' ? "/search_bar/search_active.svg" : "/search_bar/search.svg"}
                            alt="Search"
                            className="h-4"
                        />
                    </button>
                </div>)}
        </form>
    );
}