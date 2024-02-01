import React from 'react';

interface ConnectButtonProps {
    image: string;
    text: string;
    onClick: () => void;
}

export const ConnectButton: React.FC<ConnectButtonProps> = ({
    image,
    text,
    onClick,
}) => {
    return (
        <button
            className="flex border-b border-1 border-gray flex-row bg-lightGray justify-start items-center gap-4 py-2 w-full"
            onClick={onClick}
        >
            <img className="w-10 h-10" src={image} alt={text} />
            {text}
        </button>
    );
};
