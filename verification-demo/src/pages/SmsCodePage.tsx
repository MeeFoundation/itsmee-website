import React, { useEffect, useMemo, useState } from 'react';
import MeeLogo from '../assets/images/meeLogo.svg';
import { NormalText } from '../components/NormalText';
import { CodeInput } from '../components/CodeInput';
import { useNavigate } from 'react-router-dom'; // Add this

const initialArray: (string | undefined)[] = new Array(6).fill(undefined);

export const SmsCodePage: React.FC = () => {
    const [code, setCode] = useState<(string | undefined)[]>(initialArray);

    const isCodeEntered = useMemo(() => {
        return code.every((item) => typeof item !== 'undefined');
    }, [code]);

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setCode(['6', 'M', '5', 'K', '0', '6']);
            setTimeout(() => {
                navigate('/connect/phone/redirect');
            }, 3000);
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col justify-start items-center pt-6 px-4 w-full max-w-150 mx-auto">
            <img className="w-17" src={MeeLogo} alt="mee logo" />
            <div className="pt-6 mb-6">
                <NormalText semiBold centered>
                    Enter code from SMS
                </NormalText>
            </div>
            <CodeInput
                disabled={isCodeEntered}
                value={code}
                onChange={setCode}
            />
        </div>
    );
};
