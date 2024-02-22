import React from 'react';
import MeeLogo from '../assets/images/meeLogo.svg';
import { NormalText } from '../components/NormalText';
import { ActionButton } from '../components/ActionButton';
import { ClaimEntry } from '../components/ClaimEntry';

export const RedirectPage: React.FC = () => {
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
            <div className="w-full">
                <ClaimEntry name="Card details" />
            </div>
            <div className="pb-6 w-full">
                <ClaimEntry name="Name on card" />
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
