"use client"
import { useState, ChangeEvent, FormEvent } from "react";

// Definir la estructura del estado del formulario para mayor claridad y seguridad en el manejo de datos
interface FormData {
    name: string;
    email: string;
    message: string;
}

export const ContactForm = () => {
    // Inicializar el estado del formulario con la estructura definida
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    // Estado para manejar la carga mientras se envía el formulario
    const [loading, setLoading] = useState(false);
    // Estado para manejar posibles errores durante el envío del formulario
    const [error, setError] = useState<string | null>(null);
    // Estado para manejar la confirmación de envío exitoso del formulario
    const [success, setSuccess] = useState(false);

    // Función para manejar cambios en los campos del formulario
    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        // Actualizar el estado del formulario manteniendo los valores anteriores
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    // Función para manejar el envío del formulario
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setLoading(true); // Indicar que el envío está en proceso
        setError(null); // Resetear posibles errores anteriores
        setSuccess(false); // Resetear el estado de éxito

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) // Enviar los datos del formulario
            });

            if (!response.ok) {
                // Manejar respuestas que no sean exitosas
                throw new Error(`response status: ${response.status}`);
            }

            const responseData = await response.json();
            setSuccess(true); // Indicar que el envío fue exitoso
            alert('¡Mensaje enviado con exito!');
        } catch (err) {
            // Verificar que el error es de tipo Error y actualizar el estado de error
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
            alert("Error, please try resubmitting the form");
        } finally {
            setLoading(false); // Indicar que el envío ha terminado
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-[550px]">
            <div className="mb-4 flex flex-col w-full">

                <label htmlFor="form-name">Nombre</label>
                <input
                    id="form-name"
                    name="name"
                    type="text"
                    maxLength={50}
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-1 border-1 rounded-lg border-secondary bg-primary bg-opacity-10 mt-1 mb-4"
                    required // Asegurar que el campo es obligatorio
                />

                <label htmlFor="form-email">Correo</label>
                <input
                    id="form-email"
                    name="email"
                    type="email"
                    maxLength={80}
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-1 border-1 rounded-lg border-secondary bg-primary bg-opacity-10 mt-1 mb-4"
                    required // Asegurar que el campo es obligatorio
                />

                <label htmlFor="form-message">Mensaje</label>
                <textarea
                    id="form-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="p-1 border-1 rounded-lg border-secondary bg-primary bg-opacity-10 mt-1 mb-4"
                    required // Asegurar que el campo es obligatorio
                />
            </div>

            <button className="flex mx-auto rounded-lg border-1 border-secondary py-1.5 px-8 bg-secondary/10 hover:bg-secondary hover:scale-95 transition-all" type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'} {/* Mostrar estado de carga */}
            </button>

            {error && <p className="text-red-500 mt-8 text-center">Error: {error}</p>} {/* Mostrar mensaje de error si existe */}
            {success && <p className="text-green-500 mt-8 text-center">¡Mensaje enviado con exito!</p>} {/* Mostrar mensaje de éxito si el envío fue exitoso */}
        </form>
    );
}
