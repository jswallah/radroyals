"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7428435887",
    href: "tel:+917428435887",
    id: "contact-phone",
  },
  {
    icon: Mail,
    label: "Email",
    value: "radroyals25@gmail.com",
    href: "mailto:radroyals25@gmail.com",
    id: "contact-email",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "C-606, 6th Floor, Blue Moon Homes,\nRaj Nagar Extension, Ghaziabad,\nUttar Pradesh, India – 201017",
    href: null,
    id: "contact-address",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "09:00 AM – 06:00 PM",
    href: null,
    id: "contact-hours",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.fullName.trim())        e.fullName = "Full name is required.";
    if (!form.email.trim())           e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.phone && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    if (!form.subject.trim())         e.subject = "Subject is required.";
    if (!form.message.trim())         e.message = "Message is required.";
    else if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // TODO: Connect to email API (e.g. Resend, SendGrid, Nodemailer) when backend is ready
    await new Promise((r) => setTimeout(r, 1200)); // Simulate network delay
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact RAD ROYALS PRIVATE LIMITED"
      className="py-28 md:py-36 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-16 reveal">
          <span className="section-label">Get in Touch</span>
          <div className="gold-rule mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Left: Contact info ── */}
          <div className="reveal-left">
            <h2 className="display-md text-charcoal mb-6">
              Let&apos;s Build the Future{" "}
              <span className="italic text-navy-500">With Vision</span>
            </h2>
            <p className="body-base mb-12">
              Have an enquiry or want to connect with RAD ROYALS PRIVATE LIMITED?
              Get in touch with our team.
            </p>

            <div className="space-y-8">
              {contactDetails.map(({ icon: Icon, label, value, href, id }) => (
                <div key={id} className="flex gap-5 group" id={id}>
                  <div
                    className="flex-shrink-0 w-10 h-10 border border-gold-500/30 bg-gold-500/5
                               flex items-center justify-center group-hover:bg-gold-500/10 transition-colors duration-300"
                  >
                    <Icon size={15} className="text-gold-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] text-muted tracking-[0.25em] uppercase mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-charcoal text-sm hover:text-navy-500 transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-charcoal text-sm whitespace-pre-line leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="reveal-right">
            {submitted ? (
              /* Success State */
              <div
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center
                           border border-gold-500/20 bg-white p-12"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle2 size={48} className="text-gold-500 mb-6" aria-hidden="true" />
                <h3 className="font-display text-3xl text-charcoal mb-4">
                  Enquiry Received
                </h3>
                <p className="font-body text-sm text-muted mb-6 max-w-xs">
                  Thank you for reaching out. Our team will review your enquiry
                  and get back to you during business hours.
                </p>
                <div className="w-10 h-px bg-gold-500 mb-6" />
                <p className="font-body text-xs text-muted tracking-wider">
                  RAD ROYALS PRIVATE LIMITED
                </p>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact enquiry form"
                className="bg-white border border-gray-100 p-8 md:p-10 shadow-card"
              >
                <h3 className="font-display text-2xl text-charcoal mb-8">Send an Enquiry</h3>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="form-label">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      aria-required="true"
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      aria-invalid={!!errors.fullName}
                      className={`form-input ${errors.fullName ? "border-red-400 ring-1 ring-red-400/20" : ""}`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle size={11} aria-hidden="true" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      className={`form-input ${errors.email ? "border-red-400 ring-1 ring-red-400/20" : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle size={11} aria-hidden="true" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      aria-invalid={!!errors.phone}
                      className={`form-input ${errors.phone ? "border-red-400 ring-1 ring-red-400/20" : ""}`}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle size={11} aria-hidden="true" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Your subject"
                      aria-required="true"
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      aria-invalid={!!errors.subject}
                      className={`form-input ${errors.subject ? "border-red-400 ring-1 ring-red-400/20" : ""}`}
                    />
                    {errors.subject && (
                      <p id="subject-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                        <AlertCircle size={11} aria-hidden="true" /> {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={!!errors.message}
                    className={`form-input resize-none ${errors.message ? "border-red-400 ring-1 ring-red-400/20" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                      <AlertCircle size={11} aria-hidden="true" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="btn-primary w-full justify-center text-xs tracking-widest uppercase
                             disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRight size={14} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="font-body text-[10px] text-muted text-center mt-4">
                  We respond during business hours: 09:00 AM – 06:00 PM
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
