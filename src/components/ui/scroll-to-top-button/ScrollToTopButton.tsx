'use client'
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

/**
 * Un componente de botón que aparece cuando el usuario se desplaza hacia abajo en la página y
 * desplaza la página hacia arriba cuando se hace clic en él.
 */
export const ScrollToTopButton = () => {
    // Estado para rastrear la visibilidad del botón
    const [isVisible, setIsVisible] = useState<boolean>(false);

    /**
     * Alterna la visibilidad del botón según la posición de desplazamiento.
     * El botón es visible si la posición de desplazamiento es mayor a 300 píxeles.
     */
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    /**
     * Desplaza la página suavemente hacia arriba.
     */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Agregar un event listener para rastrear la posición de desplazamiento cuando el componente se monta
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            id="scroll-to-top-button"
            role="button"
            onClick={scrollToTop}
            className={isVisible ? 'opacity-100 fixed bottom-5 right-5 z-20 p-4 rounded-full border-2 bg-secondary/90 transition-all shadow-lg' : 'opacity-0'}
        >
            <FaArrowUp />
        </div>
    );
}
