interface LinkButtonProps {
    text: string;
    route_link: string;
    additionalClasses?: string;
    sizeClass: string;      // Ex: "text-h1"
    colorClass: string;     // Ex: "text-green"
    hoverColorClass: string;// Ex: "hover:text-green-hover"
    fontWeightClass?: string; // Ex: "font-bold"
    fontHoverWeightClass?: string; // Ex: "hover:font-bold"
}

export const LinkButton: React.FC<LinkButtonProps> = ({
    text,
    route_link,
    additionalClasses = "",
    sizeClass,
    colorClass,
    hoverColorClass,
    fontWeightClass = "font-normal",
    fontHoverWeightClass = "hover:font-bold",
}) => {
    return (
        <a
            href={route_link}
            className={`
                hover:underline 
                transition-all duration-300
                ease-in-out
                text-decoration-none
                font-Inter
                ${sizeClass} 
                ${colorClass} 
                hover:${hoverColorClass}
                hover:${fontHoverWeightClass}
                ${fontWeightClass}
                ${additionalClasses}
            `}
        >
            {text}
        </a>
    );
}