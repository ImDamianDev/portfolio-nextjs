import React, { ReactNode } from 'react';

interface ScrollToSectionButtonProps {
    targetId: string;
    className?: string; // Hacer que className sea opcional
    children?: ReactNode; // Prop para recibir el contenido del botón
}

/**
 * Un componente de botón que desplaza la página a una sección específica cuando se hace clic en él.
 */
export const ScrollToSectionButton = ({ targetId, className = '', children }: ScrollToSectionButtonProps) => {

    /**
     * Desplaza la página suavemente a la sección específica.
     */
    const scrollToSection = () => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            id="scroll-to-section-button"
            role="button"
            onClick={scrollToSection}
            className={className}
        >
            {children}
        </div>
    );
}