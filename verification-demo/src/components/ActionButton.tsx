import React from 'react';
import clsx from 'clsx'; // Import the 'clsx' package

interface ActionButtonProps {
    text: string;
    disabled?: boolean;
    onClick: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
    text,
    onClick,
    disabled,
}) => {
    return (
        <button
            disabled={disabled}
            className={clsx(
                disabled
                    ? 'bg-inactive text-basicText text-opacity-15'
                    : 'bg-meeColor text-white',
                'w-full flex items-center justify-center py-2.5 rounded-10'
            )}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
