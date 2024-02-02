import React from 'react';
import { ActionButton } from '../components/ActionButton';
import UntiedAirlinesLogo from '../assets/images/untiedAirlinesLogo.svg';
import { NormalText } from '../components/NormalText';
import { PhoneInput } from '../components/PhoneInput';
import { useNavigate } from 'react-router-dom'; // Add this line

export const PhoneConnectPage: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>(
        undefined
    );
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-start items-center pt-6 px-4 w-full max-w-150 mx-auto">
            <img
                className="w-8 h-8"
                src={UntiedAirlinesLogo}
                alt="Untied Airlines"
            />
            <div className="pt-6">
                <NormalText semiBold centered>
                    Enter phone number
                </NormalText>
                <NormalText semiBold centered>
                    to receive a verification code
                </NormalText>
            </div>
            <div className="pt-6 w-full">
                <PhoneInput value={phoneNumber} setValue={setPhoneNumber} />
            </div>

            <div className="pt-6 w-full">
                <ActionButton
                    disabled={!phoneNumber}
                    text="Send Code"
                    onClick={() => {
                        navigate('/connect/phone/code');
                    }}
                />
            </div>
        </div>
    );
};
