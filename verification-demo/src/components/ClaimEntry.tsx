import React from 'react';
import checkmarkImage from '../assets/images/checkmark.svg';

interface ClaimEntryProps {
    name: string;
}

export const ClaimEntry: React.FC<ClaimEntryProps> = ({ name }) => {
    return (
        <div className="p-4 text-base text-basicText border-b border-divider flex flex-row items-center gap-4">
            <img className="w-6 h-6" alt="checkmark" src={checkmarkImage} />
            <p>{name}</p>
        </div>
    );
};
