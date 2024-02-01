import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface ExplanationTextProps {
    children: string | ReactNode;
    centered?: boolean;
}

export const ExplanationText: React.FC<ExplanationTextProps> = ({
    children,
    centered,
}) => {
    return (
        <p
            className={clsx(
                'font-normal text-sm text-secondaryText',
                centered ? 'text-center' : 'text-left'
            )}
        >
            {children}
        </p>
    );
};
