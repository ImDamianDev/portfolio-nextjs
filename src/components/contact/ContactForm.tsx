"use client"
import { useState } from "react";

export const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`response status: ${response.status}`);
            }

            const responseData = await response.json();
            setSuccess(true);
            alert('Message successfully sent');
        } catch (err) {
            setError(err.message);
            alert("Error, please try resubmitting the form");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-[550px]">
            <div className="mb-4 flex flex-col w-full">
                <label htmlFor="form-name">Name</label>
                <input
                    id="form-name"
                    name="name"
                    type="text"
                    maxLength={50}
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 border-2 border-secondary bg-secondary bg-opacity-10 rounded-md mb-4"
                    required
                />

                <label htmlFor="form-email">Email</label>
                <input
                    id="form-email"
                    name="email"
                    type="email"
                    maxLength={80}
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border-2 border-secondary bg-secondary bg-opacity-10 rounded-md mb-4"
                    required
                />

                <label htmlFor="form-message">Message</label>
                <textarea
                    id="form-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="p-2 border-2 border-secondary bg-secondary bg-opacity-10 rounded-md mb-4"
                    required
                />
            </div>

            <button className="flex mx-auto rounded-xl border-2 border-secondary py-2 px-7" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>
            
            {error && <p className="text-red-500 mt-4">Error: {error}</p>}
            {success && <p className="text-green-500 mt-4">Message successfully sent!</p>}
        </form>
    );
}