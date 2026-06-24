interface LinkButtonProps {
    text: string;
    route_link: string;
    additionalClasses?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ text, route_link, additionalClasses }) => {
    return (
        <a href={route_link} className={`hover:underline ${additionalClasses || ''}`}>
            {text}
        </a>
    );
}