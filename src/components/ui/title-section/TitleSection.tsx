
interface SectionTitleProps {
    text: string;
    additionalClasses?: string;
}

export const TitleSection: React.FC<SectionTitleProps> = ({ text, additionalClasses = '' }) => {
    return (
        <h1 className={`text-3xl font-bold ${additionalClasses}`}>
            {text}
        </h1>
    );
};