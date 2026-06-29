interface LinkButtonProps {
    text: string;
    route_link: string;
    additionalClasses?: string;
    sizeClass: string;      // Ex: "text-h1"
    colorClass: string;     // Ex: "text-green"
    hoverColorClass: string;// Ex: "hover:text-green-hover"
}

export const LinkButton: React.FC<LinkButtonProps> = ({
    text,
    route_link,
    additionalClasses = "",
    sizeClass,
    colorClass,
    hoverColorClass
}) => {
    return (
        <a
            href={route_link}
            className={`
                hover:underline 
                transition-colors duration-200
                text-decoration-none
                font-poppins
                bg-green
                ${sizeClass} 
                ${colorClass} 
                ${hoverColorClass} 
                ${additionalClasses}
            `}
        >
            {text}
        </a>
    );
}