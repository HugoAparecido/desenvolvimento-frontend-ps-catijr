import clsx from "clsx";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    route_link: string;
    variant: 'default_subdued_10' | 'default_white_12' | 'default_subdued_12' | 'default_white_10' | 'default_subdued_10_same_color' | 'default_white_12_bold';
}

export const LinkButton = ({
    text,
    route_link,
    variant,
    className,
    ...props
}: LinkButtonProps) => {
    const baseStyles = "hover:underline transition-all ease-out text-decoration-none font-poppins";

    const variantsConfig = {
        default_subdued_10: "text-subdued text-xs text-bold hover:text-text-base hover:font-extrabold duration-300",
        default_white_12: "text-text-base text-sm text-medium hover:text-text-base hover:font-extrabold duration-500",
        default_subdued_12: "text-subdued text-sm text-semibold hover:text-text-base duration-300",
        default_white_10: "text-text-base text-xs text-bold hover:font-extrabold duration-500",
        default_subdued_10_same_color: "text-subdued text-xs text-bold hover:font-extrabold duration-300",
        default_white_12_bold: "text-base text-sm text-bold duration-500",
    };

    const currentVariant = variantsConfig[variant];

    return (
        <a
            href={route_link}
            className={clsx(baseStyles, currentVariant, className)}
            {...props}
        >
            {text}
        </a>
    );
}