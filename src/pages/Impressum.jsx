import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Mail, Globe, Phone, MapPin } from 'lucide-react';

const Impressum = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Impressum
                        </h1>
                        <p className="text-lg text-slate-600">
                            Legal Information
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-10">

                        {/* Legal Name */}
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 mb-3">Full Legal Name</h2>
                            <p className="text-slate-600">Tri-Link Global Mobility GbR</p>
                            <p className="text-slate-600">SteuerNr. 13/307/03429</p>
                        </div>

                        {/* Represented By */}
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 mb-3">Represented by</h2>
                            <ul className="text-slate-600 space-y-1">
                                <li>Tal Gibbesch</li>
                                <li>Dr. Oliver Redsch</li>
                            </ul>
                        </div>

                        {/* Registered Address */}
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 mb-3">Registered Address</h2>
                            <div className="text-slate-600">
                                <p>Tri-Link Global Mobility GbR</p>
                                <p>C/o Tal Gibbesch</p>
                                <p>Brahestraße 1</p>
                                <p>10589 Berlin</p>
                                <p>Germany</p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900 mb-3">Contact Information</h2>
                            <div className="space-y-3">
                                <a
                                    href="mailto:immigration@trilink-mobility.com"
                                    className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    immigration@trilink-mobility.com
                                </a>
                                <a
                                    href="https://www.trilink-mobility.com"
                                    className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors"
                                >
                                    <Globe className="w-4 h-4" />
                                    www.trilink-mobility.com
                                </a>
                                <a
                                    href="tel:+49017687966231"
                                    className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    +49 (0) 176 8796 6231
                                </a>
                            </div>
                        </div>

                        {/* Copyright Notice */}
                        <div className="pt-6 border-t border-slate-100">
                            <h2 className="text-lg font-semibold text-slate-900 mb-3">Copyright Notice</h2>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                The content and works created by the site operators on these pages are subject to
                                German copyright law. Reproduction, editing, distribution, and any kind of use outside
                                the limits of copyright require written consent from the respective author or creator.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-white text-center border-t border-slate-100">
                <div className="flex justify-center mb-6">
                    <img
                        src="/General_Logo.png"
                        alt="TriLink.Mobility"
                        className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                </div>
                <div className="flex justify-center gap-6 mb-8 text-sm font-medium text-slate-500">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>
                <div className="flex justify-center gap-4 mb-6 text-sm text-slate-400">
                    <Link to="/impressum" className="hover:text-slate-600 transition-colors">Impressum</Link>
                    <span>|</span>
                    <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; 2026 Trilink Mobility.</p>
            </footer>
        </div>
    );
};

export default Impressum;
