import React from 'react';
import { ExplanationText } from './ExplanationText';

const MenuItems = [{ title: 'Help' }, { title: 'Privacy' }, { title: 'Terms' }];

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="mt-17 px-4">
            <ExplanationText>
                Continuing, Mee will send your name, email address, language
                preferences, and profile image to Untied Airlines. Before using
                this app, you can examine the{' '}
                <span className="text-highlightedText">privacy policy</span> and{' '}
                <span className="text-highlightedText">service terms</span> of
                Untied Airlines.
            </ExplanationText>
            <div className="flex flex-row justify-start gap-8 mt-12 pb-17">
                {MenuItems.map((item) => {
                    return (
                        <p
                            key={item.title}
                            className="text-sm text-secondaryText font-normal"
                        >
                            {item.title}
                        </p>
                    );
                })}
            </div>
        </footer>
    );
};
