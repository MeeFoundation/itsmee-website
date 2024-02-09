import React from 'react';
import MeeLogo from '../assets/images/meeLogo.svg';
import { NormalText } from '../components/NormalText';
import { Spinner } from '../components/Spinner';

export const RedirectPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-start items-center pt-6 px-4 w-full max-w-150 mx-auto">
            <img className="w-17" src={MeeLogo} alt="mee logo" />
            <div className="pt-6 mb-8">
                <NormalText semiBold centered>
                    Redirecting you back
                </NormalText>
                <NormalText semiBold centered>
                    to Untied Airlines
                </NormalText>
            </div>
            <div className="mb-20">
                <Spinner />
            </div>
        </div>
    );
};
