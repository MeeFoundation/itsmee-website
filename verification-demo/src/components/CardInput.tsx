import React from 'react';

interface CardInputProps {
    title: string;
    card?: string;
    setCard: (value?: string) => void;
    exp?: string;
    setExp: (value?: string) => void;
    cvv?: string;
    setCvv: (value?: string) => void;
}

export const CardInput: React.FC<CardInputProps> = ({
    card,
    setCard,
    exp,
    setExp,
    cvv,
    setCvv,
    title,
}) => {
    return (
        <div className="w-full relative pt-2 text-secondaryText focus-within:text-meeColor">
            <p className="absolute ml-3 px-1 left-0 top-0 text-xs z-10 bg-white">
                {title}
            </p>
            <div className="border border-borderInactive focus-within:border-3 rounded-4 focus-within:border-meeColor w-full z-0 px-4 focus-within:px-[14px] flex flex-row gap-4 items-center justify-between">
                <input
                    onChange={(e) => setCard(e.currentTarget.value)}
                    value={card ?? ''}
                    className="text-base text-basicText py-[14px] focus:py-3  outline-none"
                />
                <input
                    onChange={(e) => setExp(e.currentTarget.value)}
                    value={exp ?? ''}
                    className="text-base text-basicText py-[14px] w-11 focus:py-3 outline-none"
                />
                <input
                    onChange={(e) => setCvv(e.currentTarget.value)}
                    value={cvv ?? ''}
                    className="text-base text-basicText py-[14px] w-11 focus:py-3 outline-none"
                />
            </div>
        </div>
    );
};
