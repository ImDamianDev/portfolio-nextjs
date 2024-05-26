import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FramerMagnetic } from '../framer-magnetic/FramerMagnetic'; // Ajusta la ruta según sea necesario

type SocialLinkProps = {
    type: 'github' | 'linkedin' | 'mail';
    href: string;
    size?: string | number; // Añadimos el parámetro size opcional
};

const ICONS = {
    github: FaGithub,
    linkedin: FaLinkedin,
    mail: IoMdMail,
};

export const SocialLink: React.FC<SocialLinkProps> = ({ type, href, size = '1em' }) => {
    const IconComponent = ICONS[type];

    return (
        <FramerMagnetic>
            <a href={href}>
                <IconComponent size={size} />
            </a>
        </FramerMagnetic>
    );
};
