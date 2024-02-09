import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface AdditionalTextProps {
    children: string | ReactNode;
    centered?: boolean;
    semiBold?: boolean;
}

export const AdditionalText: React.FC<AdditionalTextProps> = ({
    children,
    centered,
    semiBold = false,
}) => {
    return (
        <p
            className={clsx(
                'text-xs text-secondaryText',
                centered ? 'text-center' : 'text-left',
                semiBold ? 'font-semibold' : 'font-normal'
            )}
        >
            {children}
        </p>
    );
};
