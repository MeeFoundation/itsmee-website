import React from 'react';
import { Title } from '../components/Title';
import UntiedAirlinesLogo from '../assets/images/untiedAirlinesLogo.svg';
import GoogleLogo from '../assets/images/googleLogo.svg';
import FacebookLogo from '../assets/images/facebookLogo.svg';
import PasskeyLogo from '../assets/images/passkeyLogo.svg';
import PhoneNumberLogo from '../assets/images/phoneNumberLogo.svg';
import { ConnectButton } from '../components/ConnectButton';
import { useNavigate } from 'react-router-dom';

export const ConnectPage: React.FC = () => {
    const navigate = useNavigate();
    const buttons = [
        {
            image: GoogleLogo,
            text: 'Connect with Google',
            onClick: () => console.log('clicked'),
        },
        {
            image: FacebookLogo,
            text: 'Connect with Facebook',
            onClick: () => console.log('clicked'),
        },
        {
            image: PasskeyLogo,
            text: 'Connect with a passkey',
            onClick: () => console.log('clicked'),
        },
        {
            image: PhoneNumberLogo,
            text: 'Connect with phone number',
            onClick: () => navigate('/connect/phone'),
        },
    ];

    return (
        <div className="px-4 pt-6 flex flex-col items-center max-w-150 mx-auto">
            <div className="mb-6">
                <img src={UntiedAirlinesLogo} alt="untied airlines logo" />
            </div>
            <div className="mb-6">
                <Title centered>
                    <span className="text-highlightedText">
                        Untied Airlines
                    </span>{' '}
                    would like to access information from your Mee smartwallet
                </Title>
            </div>
            <div className="w-full">
                {buttons.map((button) => {
                    return <ConnectButton key={button.text} {...button} />;
                })}
            </div>
        </div>
    );
};
