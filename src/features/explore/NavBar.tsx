import { useState } from "react";
import { SearchBar } from "./components/search/SearchBar";
import { LinkButton } from "../../components/ui/buttons/LinkButton";
import { Link } from "react-router-dom";

export function Navbar() {
    const [results, setResults] = useState<string[]>([]);
    const [homeIsHovered, setHomeIsHovered] = useState(false);
    const [notificatioIsHovered, setNotificationIsHovered] = useState(false);
    console.log(results)

    const handleSearch = (filterData: string[]) => {
        setResults(filterData);
    };
    return (
        <header className="w-full border-b flex justify-between items-center p-3 bg-black">
            <div className="hidden md:flex flex-1 min-w-0">
                <Link to="#" className="w-7 cursor-pointer">
                    <img src="navbar/logo.svg" alt="Logo Spotfy" className="w-full" />
                </Link>
            </div>
            <div className="flex items-center justify-center w-max gap-1">
                <Link to=""
                    onMouseEnter={() => setHomeIsHovered(true)}
                    onMouseLeave={() => setHomeIsHovered(false)}
                    className="w-9 rounded-full flex items-center justify-center gap-2.5 p-2.5 bg-gray-bg cursor-pointer">
                    <img
                        src={`${!homeIsHovered ? "navbar/home-outline.svg" : "navbar/home-fill.svg"}`}
                        alt="Home" className="w-auto" />
                </Link>
                <SearchBar
                    onSearch={handleSearch} />
            </div>
            <div className="flex flex-1 min-w-0 gap-8 justify-end">
                <Link to="" className="hidden md:flex gap-1.5 items-center justify-center cursor-pointer">
                    <img src="navbar/download.svg" alt="Download" className="w-3" />
                    <LinkButton
                        text="Instalar aplicativo"
                        variant="default_subdued_10" />
                </Link>
                <div className="flex items-center justify-center gap-3">
                    <Link to="" className="hidden md:flex w-3 items-center justify-center cursor-pointer"
                        onMouseEnter={() => setNotificationIsHovered(true)}
                        onMouseLeave={() => setNotificationIsHovered(false)}>
                        <img src={`${!notificatioIsHovered ? "navbar/bell-outline.svg" : "navbar/bell-fill.svg"}`}
                            alt="Notification"
                            className="w-full" />
                    </Link>
                    <Link to="" className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer bg-gray-bg">
                        <img src="mock-images/navbar_image.png" alt="User"
                            className="w-6 h-6 object-cover rounded-full " />
                    </Link>
                </div>
            </div>
        </header>
    )
}