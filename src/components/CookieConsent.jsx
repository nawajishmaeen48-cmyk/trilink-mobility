import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-primary/20">
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <ShieldCheck className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-sm tracking-tight mb-1">Privacy & Cookies</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            We use cookies to enhance your experience, analyze site traffic, and support our mission of strategic mobility. By clicking "Accept", you agree to our use of cookies.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleAccept}
                        className="flex-1 bg-primary hover:bg-primary/90 text-white text-[11px] font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20 cursor-pointer"
                    >
                        ACCEPT ALL
                    </button>
                    <button
                        onClick={handleDecline}
                        className="flex-1 bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold py-2.5 rounded-lg transition-all border border-white/10 cursor-pointer"
                    >
                        DECLINE
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-2.5 text-slate-500 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
