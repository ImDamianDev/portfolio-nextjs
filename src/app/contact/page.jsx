
"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
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
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative flex place-items-center p-5 bg-white text-black">
        <Link href="/">Home</Link>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
            className="text-black p-2 border border-gray-300 rounded mb-2"
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
            className="text-black p-2 border border-gray-300 rounded mb-2"
            required
          />

          <label htmlFor="form-message">Message</label>
          <textarea
            id="form-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="text-black p-2 border border-gray-300 rounded mb-4"
            required
          />
        </div>

        <button className="rounded bg-sky-400 p-2" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>

        {error && <p className="text-red-500 mt-4">Error: {error}</p>}
        {success && <p className="text-green-500 mt-4">Message successfully sent!</p>}
      </form>
    </main>
  );
}
