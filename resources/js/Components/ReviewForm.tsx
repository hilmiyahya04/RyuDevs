


// src/components/ReviewForm.tsx

import React, { useState } from 'react';

interface ReviewFormData {
    customer_name: string;
    position: string;
    review: string;
    email: string;
    token: string;
}

export default function ReviewForm(): React.ReactElement {
    const [formData, setFormData] = useState<ReviewFormData>({
        customer_name: '',
        position: '',
        review: '',
        email: '',
        token: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage({ type: 'error', text: data.message || 'Terjadi kesalahan.' });
                return;
            }

            setMessage({ type: 'success', text: data.message });
            setFormData({ customer_name: '', position: '', review: '', email: '', token: '' });
        } catch (err) {
            setMessage({ type: 'error', text: 'Gagal menghubungi server.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="review-form" className="relative z-20 py-16 px-4 max-w-2xl mx-auto w-full">
            <div className="mb-12">
                <p className="text-neutral-400 text-3xl max-w-4xl mx-auto text-center">
                    Give a Review
                </p>
                <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 text-center">
                    Give a <span className="text-orange-500">Review.</span>
                </h2>
                <div className="border-b-4 border-orange-500 w-44 rounded mx-auto"></div>
            </div>

            {/* Form Card */}
            <div className="group relative rounded-2xl bg-neutral-900/50 border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] flex flex-col justify-between">
                {message && (
                    <div
                        className={`mb-4 p-3 rounded text-sm ${message.type === 'success'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                            }`}
                    >
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="customer_name"
                        placeholder="Nama"
                        value={formData.customer_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <input
                        type="text"
                        name="position"
                        placeholder="Jabatan / Perusahaan (opsional)"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <textarea
                        name="review"
                        placeholder="Tulis review Anda"
                        value={formData.review}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                    <input
                        type="text"
                        name="token"
                        placeholder="Token dari admin"
                        value={formData.token}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded bg-orange-500 hover:bg-orange-600 transition-colors font-semibold text-white disabled:opacity-50"
                    >
                        {loading ? 'Mengirim...' : 'Kirim Review'}
                    </button>
                </form>
            </div>
        </section>
    );
}