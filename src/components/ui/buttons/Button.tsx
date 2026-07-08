import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    variant?: 'default' | 'CTA' | 'Danger';
}

export const Button = ({
    text = 'Seguir',
    variant = 'default',
    className,
    ...props
}: ButtonProps) => {
    const baseButtonStyles = "w-auto px-3 py-1.5 rounded-2xl flex items-center justify-center gap-1 cursor-pointer ease-out duration-300";
    const baseTextStyles = "font-poppins font-bold";
    const baseIconStyles = "w-3.5 h-3.5";

    const variantsConfig = {
        default: {
            button: "h-auto bg-transparent border border-subdued hover:border-text-base hover:ring-[0.5px] hover:ring-text-base",
            text: "text-xs text-text-base",
            icon: "invert",
        },
        CTA: { button: "h-9 bg-text-base", text: "text-sm text-black", icon: "text-text-black", },
        Danger: { button: "h-9 bg-danger-light text-text-base hover:bg-danger-dark", text: "text-sm", icon: "invert", },
    };

    const currentVariant = variantsConfig[variant];

    return (
        <button
            className={clsx(baseButtonStyles, currentVariant.button, className)}
            {...props}
        >
            <img className={clsx(baseIconStyles, currentVariant.icon)} src="/action/lock.svg" alt="Lock" />
            <span className={clsx(baseTextStyles, currentVariant.text)}>{text}</span>
        </button>
    );
};