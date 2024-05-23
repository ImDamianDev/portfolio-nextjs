import React from 'react';

interface SectionTitleProps {
    text: string;
    additionalClasses?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text, additionalClasses = '' }) => {
    return (
        <h1 className={`text-center md:text-left font-bold text-5xl text-secondary mb-16 ${additionalClasses}`}>
            {text}
        </h1>
    );
};