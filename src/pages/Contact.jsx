import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Link } from 'react-router-dom';
import {
    CheckCircle2, Send, Mail, Phone, MapPin,
    Globe, ArrowRight, Linkedin, MessageSquare
} from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, content, link }) => (
    <div className="flex items-start gap-4 group">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <h4 className="text-white font-bold text-base mb-0.5">{title}</h4>
            {link ? (
                <a href={link} className="text-slate-400 hover:text-white transition-colors text-xs font-medium">
                    {content}
                </a>
            ) : (
                <p className="text-slate-400 text-xs font-medium leading-relaxed">{content}</p>
            )}
        </div>
    </div>
);

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        sector: '',
        message: '',
        privacyPolicy: false
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const submissionData = {
            ...formData,
            timestamp: new Date().toISOString()
        };

        try {
            const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx-At9-GQb_8hhgjF9-5LAQcgrQZCT7NZMKL32nP3OfQ4SjfkcNxwYLUs7940vSCPqz/exec";

            // Use URLSearchParams for application/x-www-form-urlencoded
            // This is a "simple request" and more compatible with Google Apps Script doPost(e)
            const formDataBody = new URLSearchParams();
            Object.keys(submissionData).forEach(key => {
                formDataBody.append(key, submissionData[key]);
            });

            // Send to Google Sheets and send email notification in parallel
            const [sheetsResponse, emailResponse] = await Promise.allSettled([
                fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    body: formDataBody,
                }),
                fetch("/api/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(submissionData),
                })
            ]);

            // Log results for debugging
            console.log("Google Sheets response:", sheetsResponse);
            console.log("Email response:", emailResponse);

            if (emailResponse.status === "rejected") {
                console.error("Email sending failed:", emailResponse.reason);
            }

            setSubmitted(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                sector: '',
                message: '',
                privacyPolicy: false
            });
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
            <Navbar />

            <div className="flex flex-col lg:flex-row flex-1">

                {/* Left Panel: Strategic Info */}
                <div className="lg:w-[35%] bg-slate-950 relative overflow-hidden flex flex-col pt-28 pb-12 px-8 md:px-12 lg:px-16">
                    {/* Abstract background elements */}
                    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-5%] left-[-5%] w-[250px] h-[250px] bg-blue-600/10 rounded-full blur-[70px]" />
                    </div>

                    <div className="relative z-10 flex-1">


                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Contact Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Global Team</span>
                        </h1>

                        <p className="text-slate-400 text-sm mb-12 max-w-xs font-medium leading-relaxed">
                            Get in touch with us to discuss your relocation needs. We respond within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <ContactInfoItem
                                icon={Mail}
                                title="Healthcare Partnerships"
                                content="healthcare@trilink-mobility.com"
                                link="mailto:healthcare@trilink-mobility.com"
                            />
                            <ContactInfoItem
                                icon={Mail}
                                title="Defense Sector"
                                content="defense@trilink-mobility.com"
                                link="mailto:defense@trilink-mobility.com"
                            />
                            <ContactInfoItem
                                icon={Mail}
                                title="Business Immigration"
                                content="immigration@trilink-mobility.com"
                                link="mailto:immigration@trilink-mobility.com"
                            />
                            <ContactInfoItem
                                icon={Phone}
                                title="Call Us"
                                content="+49 (0) 176 87966231"
                                link="tel:+49017687966231"
                            />
                        </div>
                    </div>

                    <div className="relative z-10 mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-4">
                            <Linkedin className="w-4 h-4 text-slate-500 hover:text-white transition-colors cursor-pointer" />
                            <MessageSquare className="w-4 h-4 text-slate-500 hover:text-white transition-colors cursor-pointer" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">
                            Est. 2024
                        </span>
                    </div>
                </div>

                {/* Right Panel: Compact Form */}
                <div className="lg:w-[65%] bg-slate-50 pt-28 pb-12 px-8 md:px-12 lg:px-20 flex items-center justify-center">
                    <div className="w-full max-w-xl bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-white relative overflow-hidden">

                        {submitted ? (
                            <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h4>
                                    <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                                        Thanks for reaching out. A team member will contact you shortly.
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="h-10 border-slate-200 text-slate-600 font-bold px-6 rounded-lg text-xs hover:bg-slate-50"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Dismiss
                                </Button>
                            </div>
                        ) : (
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4" onSubmit={handleSubmit}>
                                <div className="md:col-span-2 mb-4">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">Get in touch</h2>
                                    <p className="text-slate-400 text-xs font-medium">Fill out the form below and we'll get back to you.</p>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-0.5">First Name</label>
                                    <Input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Johnathan"
                                        className="h-11 bg-slate-50 border-none focus:bg-white focus:ring-1 focus:ring-primary/20 rounded-xl font-semibold shadow-sm text-sm"
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-0.5">Last Name</label>
                                    <Input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Sterling"
                                        className="h-11 bg-slate-50 border-none focus:bg-white focus:ring-1 focus:ring-primary/20 rounded-xl font-semibold shadow-sm text-sm"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-0.5">Work Email</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="j.sterling@company.com"
                                        className="h-11 bg-slate-50 border-none focus:bg-white focus:ring-1 focus:ring-primary/20 rounded-xl font-semibold shadow-sm text-sm"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-0.5">How can we help?</label>
                                    <div className="relative">
                                        <select
                                            name="sector"
                                            value={formData.sector}
                                            onChange={handleChange}
                                            required
                                            className="flex h-11 w-full rounded-xl border-none bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 focus:bg-white focus:ring-1 focus:ring-primary/20 shadow-sm appearance-none outline-none"
                                        >
                                            <option value="" disabled hidden>Select a Department</option>
                                            <option>Healthcare Talent</option>
                                            <option>Defense Sector</option>
                                            <option>Business Immigration</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <ArrowRight className="w-3 h-3 rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-0.5">Message</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your relocation needs..."
                                        className="min-h-[100px] bg-slate-50 border-none focus:bg-white focus:ring-1 focus:ring-primary/20 rounded-xl font-semibold shadow-sm text-sm resize-none p-4 leading-relaxed"
                                        required
                                    />
                                </div>

                                <div className="md:col-span-2 flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="privacyPolicy"
                                        name="privacyPolicy"
                                        checked={formData.privacyPolicy}
                                        onChange={handleChange}
                                        required
                                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                                    />
                                    <label htmlFor="privacyPolicy" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                                        I agree to the{' '}
                                        <Link to="/privacy" target="_blank" className="text-primary hover:underline font-medium">
                                            Privacy Policy
                                        </Link>
                                        {' '}and consent to the processing of my personal data.
                                    </label>
                                </div>

                                <div className="md:col-span-2 pt-2">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-12 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-slate-400/20 transition-all uppercase tracking-widest group"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </div>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                    <div className="mt-4 flex items-center justify-center gap-2 text-slate-400">
                                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                        <p className="text-[9px] font-bold uppercase tracking-widest">
                                            Secure messaging active
                                        </p>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
