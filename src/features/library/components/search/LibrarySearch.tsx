import React, { useRef, useState } from "react";

interface LibrarySearchProps {
    query: string,
    onQueryChange: (query: string) => void,
}

export function LibrarySearch({ query, onQueryChange }: LibrarySearchProps) {
    const [selectedInput, setSelectedInput] = useState<string>('');
    const [closeHovered, setCloseHovered] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLFormElement>(null);

    const handleImageClick = () => {
        if (inputRef.current)
            inputRef.current.focus();
    }

    const onBlurHandler = (e: React.FocusEvent) => {
        if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) {
            return;
        }
        setSelectedInput('');
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onQueryChange(e.target.value);
    }

    const handleClear = () => {
        onQueryChange('');
    }

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-72 h-max items-center gap-2 px-2 py-1 rounded-xs justify-center bg-background-elements cursor-text"
            ref={containerRef}
            onBlur={onBlurHandler}
        >
            <span className="flex items-center text-gray-400" onClick={handleImageClick}>
                <img
                    src={selectedInput === 'search' ? "/search_bar/search_active.svg" : "/search_bar/search.svg"}
                    alt="Search"
                    className="w-2.5"
                />
            </span>
            <input
                type="text"
                placeholder="Buscar em Sua Biblioteca"
                ref={inputRef}
                value={query}
                onChange={handleInputChange}
                onFocus={() => {
                    setSelectedInput('search')
                }}
                onBlur={onBlurHandler}

                className={`w-full h-full bg-transparent text-xs border-0 font-default-font focus:outline-none
                         ${query ? 'text-text-base font-medium' : 'text-text-subdued font-normal'} 
                         placeholder-text-subdued transition-colors`} />
            {query && (
                <button type="button"
                    className="inset-y-0 right-0 flex items-center pr-3.5"
                    onClick={handleClear}
                >
                    <img src={closeHovered ? "/search_bar/close_active.svg" : "/search_bar/close.svg"}
                        alt="Close"
                        className="w-2 cursor-pointer"
                        onMouseEnter={
                            () => setCloseHovered(true)
                        }
                        onMouseLeave={
                            () => setCloseHovered(false)
                        }
                    />
                </button>
            )}
        </form>
    );
}