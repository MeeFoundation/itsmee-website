import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

interface CodeInputProps {
    value: (string | undefined)[];
    onChange: (value: (string | undefined)[]) => void;
    disabled?: boolean;
}

export const CodeInput: React.FC<CodeInputProps> = ({
    value,
    onChange,
    disabled,
}) => {
    const refs = useRef<(HTMLInputElement | null)[]>(value.map(() => null));
    useEffect(() => {
        refs.current[0]?.focus();
    }, []);
    return (
        <div className="flex flex-row justify-between items-center w-full">
            {value.map((item, index) => (
                <input
                    disabled={disabled}
                    ref={(el) => {
                        refs.current[index] = el;
                    }}
                    className={clsx(
                        disabled
                            ? 'bg-disabled border-disabled'
                            : 'border-borderInactive focus:border-meeColor',
                        'border rounded-4 focus:border-3 h-14 w-14  text-base text-center outline-none'
                    )}
                    size={4}
                    key={index}
                    value={item ?? ''}
                    onChange={(e) => {
                        const v = e.target.value;
                        if (v.length > 1) {
                            return;
                        }
                        const newValue = [...value];
                        newValue[index] = v.length === 0 ? undefined : v;
                        onChange(newValue);
                        if (index < value.length - 1 && v.length === 1) {
                            refs.current[index + 1]?.focus();
                        }
                    }}
                />
            ))}
        </div>
    );
};
