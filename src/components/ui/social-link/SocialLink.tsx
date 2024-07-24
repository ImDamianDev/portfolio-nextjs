import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FramerMagnetic } from '../framer-magnetic/FramerMagnetic'; // Ajusta la ruta según sea necesario

type SocialLinkProps = {
    type: 'github' | 'linkedin' | 'mail';
    href: string;
    text: string;
    className?: string;
    size?: string | number; // Añadimos el parámetro size opcional
};

const ICONS = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: IoMdMail,
};

export const SocialLink: React.FC<SocialLinkProps> = ({ type, href, text, className , size = '1em' }) => {
    const IconComponent = ICONS[type];

    return (
        <a href={href} className={`flex items-center gap-2 ${className}`}>
            <FramerMagnetic>
                <IconComponent size={size} />
            </FramerMagnetic>
            {text}
        </a>
    );
};
