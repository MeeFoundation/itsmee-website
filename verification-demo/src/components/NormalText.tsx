import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface NormalTextProps {
    children: string | ReactNode;
    centered?: boolean;
    semiBold?: boolean;
}

export const NormalText: React.FC<NormalTextProps> = ({
    children,
    centered,
    semiBold = false,
}) => {
    return (
        <p
            className={clsx(
                'text-base text-basicText',
                centered ? 'text-center' : 'text-left',
                semiBold ? 'font-semibold' : 'font-normal'
            )}
        >
            {children}
        </p>
    );
};
