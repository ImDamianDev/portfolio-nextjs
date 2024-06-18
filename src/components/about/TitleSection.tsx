
interface SectionTitleProps {
    text: string;
    additionalClasses?: string;
}

export const TitleSection: React.FC<SectionTitleProps> = ({ text, additionalClasses = '' }) => {
    return (
        <h1 className={`text-xl font-bold mb-6 ${additionalClasses}`}>
            {text}
        </h1>
    );
};