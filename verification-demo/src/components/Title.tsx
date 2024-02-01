import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface TitleProps {
    children: string | ReactNode;
    highlight?: boolean;
    centered?: boolean;
}

export const Title: React.FC<TitleProps> = ({
    children,
    highlight,
    centered,
}) => {
    return (
        <h1
            className={clsx(
                'text-2xl font-bold',
                highlight ? 'text-highlightedText' : 'text-basicText',
                centered ? 'text-center' : 'text-left'
            )}
        >
            {children}
        </h1>
    );
};
