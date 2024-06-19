import { titleFont } from '@/config/fonts';

interface SectionTitleProps {
    text: string;
    additionalClasses?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text, additionalClasses = '' }) => {
    return (
        <h1 className={`font-light text-secondary ${additionalClasses}`}>
            {text}
        </h1>
    );
};