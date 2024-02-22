import React from 'react';
import MeeLogo from '../assets/images/meeLogo.svg';
import { NormalText } from '../components/NormalText';
import { ActionButton } from '../components/ActionButton';
import { BasicInput } from '../components/BasicInput';
import { CardInput } from '../components/CardInput';

export const RedirectPage: React.FC = () => {
    const [cardNumber, setCardNumber] = React.useState<string | undefined>(
        '4012888888881881'
    );
    const [cardExp, setCardExp] = React.useState<string | undefined>('02/29');
    const [cardCvv, setCardCvv] = React.useState<string | undefined>('424');

    const [nameOnCard, setNameOnCard] = React.useState<string | undefined>(
        'Paul Trevithick'
    );

    return (
        <div className="flex flex-col justify-start items-center pt-6 px-4 w-full max-w-150 mx-auto">
            <img className="w-17" src={MeeLogo} alt="mee logo" />
            <div className="pt-6 mb-6">
                <NormalText semiBold centered>
                    The following information will be shared with{' '}
                    <span className="text-highlightedText">
                        Untied Airlines
                    </span>
                </NormalText>
            </div>
            <div className="pb-6 w-full">
                <CardInput
                    title="Card details"
                    card={cardNumber}
                    setCard={setCardNumber}
                    exp={cardExp}
                    setExp={setCardExp}
                    cvv={cardCvv}
                    setCvv={setCardCvv}
                />
            </div>
            <div className="pb-6 w-full">
                <BasicInput
                    title="Name on card"
                    value={nameOnCard}
                    setValue={setNameOnCard}
                />
            </div>
            <div className="pb-2 w-full">
                <ActionButton
                    text="Continue"
                    onClick={() => {
                        window.location.href = 'meeuntied://redirect';
                    }}
                />
            </div>

            <ActionButton secondary text="Cancel" onClick={() => {}} />
        </div>
    );
};
