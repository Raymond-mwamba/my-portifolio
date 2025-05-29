import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// Email JS service configuration - you'll need to replace these with your actual values from emailjs.com
const SERVICE_ID = 'service_0tqwn5i';
const TEMPLATE_ID = 'template_zymrtwo';
const PUBLIC_KEY = 'bse4md0O9A8sZwyeL';

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        isError: false,
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Form validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: 'Please fill out all fields'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: 'Please enter a valid email address'
            });
            return;
        }

        // Start submission
        setSubmitStatus({
            isSubmitting: true,
            isSubmitted: false,
            isError: false,
            message: 'Sending your message...'
        });

        try {
            if (!formRef.current) return;

            // Send email using EmailJS
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );

            if (result.text === 'OK') {
                // Success
                setSubmitStatus({
                    isSubmitting: false,
                    isSubmitted: true,
                    isError: false,
                    message: 'Message sent successfully! I will get back to you soon.'
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus({
                isSubmitting: false,
                isSubmitted: false,
                isError: true,
                message: 'Failed to send message. Please try again later.'
            });
        }
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control form-control-lg"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control form-control-lg"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-medium" style={{ color: 'var(--text-secondary)' }}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="form-control form-control-lg"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                {/* Submission status message */}
                {(submitStatus.isSubmitted || submitStatus.isError) && (
                    <div className={`alert ${submitStatus.isError ? 'alert-danger' : 'alert-success'} mb-4`}>
                        {submitStatus.message}
                    </div>
                )}

                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5 py-3 pulse-animation"
                        disabled={submitStatus.isSubmitting}
                    >
                        {submitStatus.isSubmitting ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-send me-2"></i>Send Message
                            </>
                        )}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
