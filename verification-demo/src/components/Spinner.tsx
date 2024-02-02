import React from 'react';
import SpinnerIcon from '../assets/images/spinner.svg';

export const Spinner: React.FC = () => {
    return <img src={SpinnerIcon} alt="spinner" className="animate-spin" />;
};
