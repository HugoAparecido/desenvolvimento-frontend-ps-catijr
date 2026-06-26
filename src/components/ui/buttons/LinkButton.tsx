interface LinkButtonProps {
    text: string;
    route_link: string;
    additionalClasses?: string;
    fontSize: string;
    defaultColor: string;
    defaultHoverColor: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ text, route_link, additionalClasses, fontSize, defaultColor, defaultHoverColor }) => {
    return (
        <a href={route_link} className={`hover:underline ${additionalClasses || ''}`} style={{ fontSize: fontSize || 'inherit', color: defaultColor || 'inherit' }} onMouseEnter={(e) => {
            if (defaultHoverColor) {
                (e.target as HTMLAnchorElement).style.color = defaultHoverColor;
            }
        }} onMouseLeave={(e) => {
            if (defaultColor) {
                (e.target as HTMLAnchorElement).style.color = defaultColor;
            }
        }}>

            {text}
        </a>
    );
}