
interface SectionTitleProps {
    text: string;
    additionalClasses?: string;
}

export const TitleSection: React.FC<SectionTitleProps> = ({ text, additionalClasses = '' }) => {
    return (
        <h1 className={`text-[1.6em] font-bold ${additionalClasses}`}>
            {text}
        </h1>
    );
};