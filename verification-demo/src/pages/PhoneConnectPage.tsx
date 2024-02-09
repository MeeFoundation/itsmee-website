import React from 'react';
import { ActionButton } from '../components/ActionButton';
import MeeLogo from '../assets/images/meeLogo.svg';
import { NormalText } from '../components/NormalText';
import { PhoneInput } from '../components/PhoneInput';
import { useNavigate } from 'react-router-dom'; // Add this line
import { Title } from '../components/Title';
import { BasicInput } from '../components/BasicInput';
import { AdditionalText } from '../components/AdditionalText';

export const PhoneConnectPage: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>(
        undefined
    );
    const [email, setEmail] = React.useState<string | undefined>(undefined);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-start items-center pt-6 px-4 w-full max-w-150 mx-auto">
            <img className="w-17" src={MeeLogo} alt="mee logo" />
            <div className="pt-6">
                <Title centered>
                    <span className="text-highlightedText">
                        Untied Airlines
                    </span>{' '}
                    would like to access information from Mee
                </Title>
            </div>
            <div className="pt-6">
                <NormalText semiBold centered>
                    For your security please verify your identity
                </NormalText>
            </div>
            <div className="pt-6 w-full">
                <BasicInput title="Email" value={email} setValue={setEmail} />
            </div>
            <div className="pt-6 w-full">
                <PhoneInput value={phoneNumber} setValue={setPhoneNumber} />
                <div className="pl-4 pt-1">
                    <AdditionalText>
                        You will receive an SMS with a verification code.
                    </AdditionalText>
                </div>
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
