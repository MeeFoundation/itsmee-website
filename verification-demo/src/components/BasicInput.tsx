import React from 'react';

interface BasicInputProps {
    title: string;
    value?: string;
    setValue: (value?: string) => void;
}

export const BasicInput: React.FC<BasicInputProps> = ({
    value,
    setValue,
    title,
}) => {
    return (
        <div className="w-full relative pt-2 text-secondaryText focus-within:text-meeColor">
            <p className="absolute ml-3 px-1 left-0 top-0 text-xs z-10 bg-white">
                {title}
            </p>
            <div className="border border-borderInactive focus-within:border-3 rounded-4 focus-within:border-meeColor w-full z-0 px-4 focus-within:px-[14px] flex flex-row gap-4 items-center">
                <input
                    onChange={(e) => setValue(e.currentTarget.value)}
                    value={value ?? ''}
                    className="text-base text-basicText py-[14px] focus:py-3 w-full outline-none"
                />
            </div>
        </div>
    );
};
