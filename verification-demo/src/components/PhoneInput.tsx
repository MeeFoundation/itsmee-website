import React, { ChangeEvent, useState } from 'react';
import UsaFlag from '../assets/images/usaFlag.svg';
import { NormalText } from './NormalText';

interface PhoneInputProps {
    value?: string;
    setValue: (value?: string) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({ value, setValue }) => {
    const [key, setKey] = useState<string | undefined>(undefined);

    function formatPhone(event: ChangeEvent<HTMLInputElement>) {
        const element = event.target;
        let caret = element.selectionStart ?? 0;
        let value = element.value.split('');
        if (
            (caret === 4 || caret === 8) &&
            key !== 'Delete' &&
            key !== 'Backspace'
        ) {
            caret++;
        } else if ((caret === 3 || caret === 7) && key === 'Backspace') {
            value.splice(caret - 1, 1);
            caret--;
        } else if ((caret === 3 || caret === 7) && key === 'Delete') {
            value.splice(caret, 1);
        }

        if (key?.length === 1 && /[^0-9]/.test(key)) caret--;

        const replacedValue = value
            .join('')
            .replace(/[^0-9]+/g, '')
            .replace(/(.{10}).*$/, '$1')
            .replace(/^(.?.?.?)(.?.?.?)(.?.?.?.?)$/, '$1-$2-$3')
            .replace(/-*$/, '');

        setValue(replacedValue.length === 0 ? undefined : replacedValue);

        window.requestAnimationFrame(() => {
            element.setSelectionRange(caret, caret);
        });
    }
    return (
        <div className="w-full relative pt-2">
            <p className="absolute ml-3 px-1 left-0 top-0 text-xs text-meeColor z-10 bg-white">
                Phone number
            </p>
            <div className="border-3 rounded-4 border-meeColor w-full z-0 px-4 flex flex-row gap-4 items-center">
                <img className="w-8" src={UsaFlag} alt="usa flag" />
                <NormalText>+1</NormalText>
                <input
                    onKeyDown={(event) => setKey(event.key)}
                    onChange={formatPhone}
                    value={value ?? ''}
                    placeholder="(XXX) XXX-XXXX"
                    className="text-base py-3 w-full outline-none"
                />
            </div>
        </div>
    );
};
