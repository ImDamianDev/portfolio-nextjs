import { titleFont } from '@/config/fonts';

interface SectionTitleProps {
    text: string;
    additionalClasses?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text, additionalClasses = '' }) => {
    return (
        <h1 className={`text-xl font-semibold py-2 text-secondary ${titleFont.className} ${additionalClasses}`}>
            {text}
        </h1>
    );
};