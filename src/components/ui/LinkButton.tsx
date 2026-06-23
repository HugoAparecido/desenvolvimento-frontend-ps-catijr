interface LinkButtonProps {
    text: string;
    route_link: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ text, route_link }) => {
    return (
        <a href={route_link} className="hover:underline">
            {text}
        </a>
    );
}