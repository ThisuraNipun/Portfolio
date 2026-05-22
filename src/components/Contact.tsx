import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, MapPin,
  Send, Loader2, Check, X, AlertCircle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './BrandIcons';
import { useScrollAnimation } from '../hooks/useAnimations';

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials:
//   1. Sign up at https://www.emailjs.com (free plan: 200 emails/month)
//   2. Create an Email Service (Gmail, Outlook, etc.)
//   3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
//   4. Copy your Service ID, Template ID, and Public Key below
const EMAILJS_SERVICE_ID = 'service_as0id2l';
const EMAILJS_TEMPLATE_ID = 'template_mbn52wj';
const EMAILJS_PUBLIC_KEY = 'zpFOjurGkaxGXXjUk';
// ─────────────────────────────────────────────────────────────────────────────

// 🛠️  DEV MODE — set to `true` to simulate email sending without hitting EmailJS.
// Flip to `false` (or remove entirely) before deploying to production.
const DEV_MODE = false;

// When DEV_MODE is true, toggle this to test the error path:
const DEV_SIMULATE_SUCCESS = false;

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const MAX_MESSAGE_LENGTH = 1000;

const Contact = () => {
  const titleRef = useScrollAnimation();
  const leftSectionRef = useScrollAnimation();
  const rightSectionRef = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<SendStatus>('idle');

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = (data: typeof formData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim())
      errs.name = 'Name is required.';
    else if (data.name.trim().length < 2)
      errs.name = 'Name must be at least 2 characters.';

    if (!data.email.trim())
      errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errs.email = 'Please enter a valid email address.';

    if (!data.message.trim())
      errs.message = 'Message is required.';
    else if (data.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters.';
    else if (data.message.length > MAX_MESSAGE_LENGTH)
      errs.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;

    return errs;
  };

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof typeof formData
  ) => {
    const updated = { ...formData, [field]: e.target.value };
    setFormData(updated);
    if (touched[field]) setErrors(validate(updated));
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched(t => ({ ...t, [field]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');

    if (DEV_MODE) {
      // ── Simulate network latency ──────────────────────────────────────────
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('%c[EmailJS DEV MODE] Simulated payload:', 'color:#00f5ff;font-weight:bold;', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
        formData,
      });

      if (DEV_SIMULATE_SUCCESS) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setErrors({});
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      }
    } else {
      // ── Production: real EmailJS call ─────────────────────────────────────
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current!,
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setErrors({});
        setTimeout(() => setStatus('idle'), 6000);
      } catch {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      }
    }
  };

  // ── Input class helper ──────────────────────────────────────────────────────
  const inputClass = (field: keyof FormErrors) => {
    const base =
      'w-full px-4 py-3 bg-gray-900/80 border rounded-xl transition-all duration-300 text-white placeholder-gray-500 outline-none text-sm';
    if (touched[field] && errors[field])
      return `${base} border-red-500 focus:border-red-400 focus:shadow-[0_0_16px_rgba(239,68,68,0.4)]`;
    if (touched[field] && !errors[field] && formData[field])
      return `${base} border-green-500 focus:border-green-400 focus:shadow-[0_0_16px_rgba(34,197,94,0.4)]`;
    return `${base} border-gray-700 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,245,255,0.35)]`;
  };

  const msgLen = formData.message.length;
  const msgPct = Math.min(msgLen / MAX_MESSAGE_LENGTH, 1);
  const msgColor =
    msgPct > 0.9 ? '#ef4444' :
      msgPct > 0.75 ? '#f59e0b' : '#00f5ff';

  // ── Contact info items ──────────────────────────────────────────────────────
  const contactItems = [
    {
      gradient: 'from-cyan-500 to-blue-500',
      shadow: 'rgba(0,245,255,0.35)',
      color: 'text-cyan-400',
      label: 'Email',
      value: 'imthisuranipun@gmail.com',
      href: 'mailto:imthisuranipun@gmail.com',
      icon: <Mail className="w-5 h-5 text-white" />,
    },
    {
      gradient: 'from-green-400 to-teal-500',
      shadow: 'rgba(52,211,153,0.35)',
      color: 'text-green-400',
      label: 'Phone',
      value: '+94 (70) 423-9099',
      href: 'tel:+94704239099',
      icon: <Phone className="w-5 h-5 text-white" />,
    },
    {
      gradient: 'from-purple-500 to-pink-500',
      shadow: 'rgba(168,85,247,0.35)',
      color: 'text-purple-400',
      label: 'Location',
      value: 'Matara, Sri Lanka',
      href: 'https://maps.google.com/?q=Matara,Sri+Lanka',
      icon: <MapPin className="w-5 h-5 text-white" />,
    },
  ] as const;

  const socialLinks = [
    {
      href: 'https://github.com/ThisuraNipun',
      label: 'GitHub',
      icon: <GithubIcon className="w-5 h-5" />,
      hover: 'hover:bg-gray-700 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_16px_rgba(0,245,255,0.4)]',
    },
    {
      href: 'https://www.linkedin.com/in/thisura-nipun-1997-03-28-ace',
      label: 'LinkedIn',
      icon: <LinkedinIcon className="w-5 h-5" />,
      hover: 'hover:bg-blue-700 hover:text-white hover:border-blue-500 hover:shadow-[0_0_16px_rgba(59,130,246,0.5)]',
    },
    {
      href: 'https://twitter.com',
      label: 'X (Twitter)',
      icon: <TwitterXIcon className="w-5 h-5" />,
      hover: 'hover:bg-gray-900 hover:text-white hover:border-pink-500 hover:shadow-[0_0_16px_rgba(255,0,128,0.4)]',
    },
  ] as const;

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ff0080 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ───────────────────────────────────────────────── */}
        <div ref={titleRef} className="text-center mb-16 scroll-fade-in">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ── Left — Contact Info ─────────────────────────────────────────── */}
          <div ref={leftSectionRef} className="scroll-slide-left">
            <div className="glass-dark rounded-2xl p-8 neon-border h-full">
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                I'm always open to discussing new opportunities, creative projects,
                or potential collaborations. Feel free to reach out through any of
                the methods below.
              </p>

              {/* Contact Methods */}
              <div className="space-y-5">
                {contactItems.map(({ gradient, shadow, color, label, value, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === 'Location' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div
                      className={`w-12 h-12 flex-shrink-0 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110`}
                      style={{ boxShadow: `0 0 20px ${shadow}` }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">{label}</p>
                      <p className={`${color} text-sm font-medium group-hover:underline underline-offset-2 transition-all`}>
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-7 border-t border-gray-800">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Find me on</p>
                <div className="flex space-x-3">
                  {socialLinks.map(({ href, label, icon, hover }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-10 h-10 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${hover}`}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right — Message Form ─────────────────────────────────────────── */}
          <div ref={rightSectionRef} className="scroll-slide-right">
            <div className="glass-dark rounded-2xl p-8 neon-border relative overflow-hidden">
              {/* Corner accent */}
              <div
                className="pointer-events-none absolute top-0 right-0 w-32 h-32 opacity-20 rounded-bl-full"
                style={{ background: 'radial-gradient(circle at top right, #00f5ff, transparent 70%)' }}
              />

              <h3 className="text-2xl font-bold text-white mb-1">Send Me a Message</h3>
              <p className="text-gray-500 text-sm mb-7">
                Fill out the form and I'll get back to you as soon as possible.
              </p>

              {/* ── Status Banners ─────────────────────────────────────────── */}
              {status === 'success' && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-500/40 bg-green-500/10 px-4 py-4 animate-fadeInUp">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-green-400 font-semibold text-sm">Message sent successfully!</p>
                    <p className="text-green-300/70 text-xs mt-0.5">
                      Thanks for reaching out. I'll reply within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-4 animate-fadeInUp">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <X className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-red-400 font-semibold text-sm">Something went wrong</p>
                    <p className="text-red-300/70 text-xs mt-0.5">
                      Could not send your message. Please email me directly at{' '}
                      <a href="mailto:imthisuranipun@gmail.com" className="underline hover:text-red-200 transition-colors">
                        imthisuranipun@gmail.com
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              {/* ── Dev Mode Badge ──────────────────────────────────────── */}
              {DEV_MODE && (
                <div className="mb-5 flex items-center gap-2 text-xs text-amber-400 bg-amber-400/10 border border-amber-400/30 rounded-lg px-3 py-2.5">
                  <span>🛠️</span>
                  <span>
                    <strong>DEV MODE</strong> — Emails are simulated.{' '}
                    {DEV_SIMULATE_SUCCESS ? 'Success path active.' : 'Error path active.'}{' '}
                    No real emails will be sent.
                  </span>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* ── Name ─────────────────────────────────────────────────── */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Full Name <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="from_name"
                    required
                    value={formData.name}
                    onChange={e => handleChange(e, 'name')}
                    onBlur={() => handleBlur('name')}
                    className={inputClass('name')}
                    placeholder="Your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* ── Email ────────────────────────────────────────────────── */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Email Address <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="from_email"
                    required
                    value={formData.email}
                    onChange={e => handleChange(e, 'email')}
                    onBlur={() => handleBlur('email')}
                    className={inputClass('email')}
                    placeholder="your.email@example.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* ── Message ──────────────────────────────────────────────── */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Message <span className="text-pink-500">*</span>
                    </label>
                    <span
                      className="text-xs font-mono tabular-nums transition-colors duration-300"
                      style={{ color: msgColor }}
                    >
                      {msgLen}/{MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => handleChange(e, 'message')}
                      onBlur={() => handleBlur('message')}
                      className={`${inputClass('message')} resize-none pb-3`}
                      placeholder="Tell me about your project or just say hello!"
                      maxLength={MAX_MESSAGE_LENGTH}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {/* character progress bar */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-full rounded-b-xl overflow-hidden bg-gray-800">
                      <div
                        className="h-full transition-all duration-300 rounded-b-xl"
                        style={{
                          width: `${msgPct * 100}%`,
                          background: `linear-gradient(90deg, #00f5ff, ${msgColor})`,
                        }}
                      />
                    </div>
                  </div>
                  {touched.message && errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* ── Submit ───────────────────────────────────────────────── */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full relative flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group hover:from-cyan-400 hover:to-pink-400 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ boxShadow: status !== 'sending' ? '0 0 28px rgba(0,245,255,0.35), 0 4px 20px rgba(255,0,128,0.2)' : undefined }}
                >
                  {/* shimmer overlay on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white rounded-xl" />

                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-600">
                  🔒 Your information is kept private and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;