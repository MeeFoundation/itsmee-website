import React from 'react';
import clsx from 'clsx'; // Import the 'clsx' package

interface ActionButtonProps {
    text: string;
    disabled?: boolean;
    onClick: () => void;
    secondary?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
    text,
    onClick,
    disabled,
    secondary = false,
}) => {
    return (
        <button
            disabled={disabled}
            className={clsx(
                disabled
                    ? 'text-basicText text-opacity-15 border-inactive'
                    : ' border-meeColor',
                disabled && secondary && '',
                disabled && !secondary && 'bg-inactive',
                !disabled && secondary && 'text-meeColor',
                !disabled && !secondary && 'bg-meeColor text-white',
                'w-full flex items-center justify-center py-2.5 rounded-10 border-2'
            )}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
