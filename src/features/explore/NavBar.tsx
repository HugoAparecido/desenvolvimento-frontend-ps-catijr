import { useState } from "react";
import { SearchBar } from "./components/search/SearchBar";
import { LinkButton } from "../../components/ui/buttons/LinkButton";

export function Navbar() {
    const [results, setResults] = useState<string[]>([]);
    console.log(results)

    const dealWithResearchs = (filterData: string[]) => {
        setResults(filterData);
    };
    return (
        <header className="w-full border-b flex justify-between items-center p-3">
            <div className="flex flex-1 min-w-0">
                <button className="w-7 cursor-pointer">
                    <img src="navbar/logo.svg" alt="Logo Spotfy" className="w-full" />
                </button>
            </div>
            <div className="flex items-center justify-center w-max gap-1">
                <button className="w-9 rounded-full flex items-center justify-center gap-2.5 p-2.5 bg-gray-bg cursor-pointer">
                    <img src="navbar/home-outline.svg" alt="Home" className="w-auto" />
                </button>
                <SearchBar onSearch={dealWithResearchs} />
            </div>
            <div className="flex flex-1 min-w-0 gap-8 justify-end">
                <button className="flex gap-1.5 items-center justify-center cursor-pointer">
                    <img src="navbar/download.svg" alt="Download" className="w-3" />
                    <LinkButton text="Instalar aplicativo" variant="default_subdued_10" />
                </button>
                <div className="flex items-center justify-center gap-3">
                    <button className="w-3 cursor-pointer">
                        <img src="navbar/bell-outline.svg" alt="Notification" className="w-full" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full border-4 cursor-pointer bg-gray-bg">
                        <img src="mock-images/navbar_image.png" alt="User" className="w-6 h-6 object-cover rounded-full " />
                    </button>
                </div>
            </div>
        </header>
    )
}