import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/ui/button';
import {
    homeContent,
    mainHeroImage,
    officeImage,
    buildingImage,
    testimonials,
    teamMembers
} from '../data/mockData';
import {
    ArrowRight,
    ShieldCheck,
    Briefcase,
    HeartPulse,
    Shield,
    Handshake,
    Users,
    Star,
    Quote,
    Globe
} from 'lucide-react';

const sectorIcons = {
    defense: Shield,
    immigration: Briefcase,
    healthcare: HeartPulse
};

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="container-width px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-6 lg:pr-4">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="w-10 h-px bg-primary" />
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Global Mobility Partner</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700">
                                {homeContent.heroHeading.split('\n')[0]} <br />
                                <span className="text-primary">{homeContent.heroHeading.split('\n')[1]}</span>
                            </h1>

                            <p className="text-lg text-slate-600 max-w-lg mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                                {homeContent.heroText}
                            </p>

                            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                                <Link to="/health-care">
                                    <Button size="lg" className="h-12 px-6 text-sm font-semibold rounded-md shadow-sm transition-all bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                                        Health Care
                                    </Button>
                                </Link>
                                <Link to="/defense-sector">
                                    <Button size="lg" className="h-12 px-6 text-sm font-semibold rounded-md shadow-sm transition-all bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                                        Defense
                                    </Button>
                                </Link>
                                <Link to="/business-immigration">
                                    <Button size="lg" className="h-12 px-6 text-sm font-semibold rounded-md shadow-sm transition-all bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                                        Business Immigration
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button size="lg" variant="outline" className="h-12 px-6 text-sm font-semibold rounded-md border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-primary transition-all w-full sm:w-auto">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Graphic/Image layout */}
                        <div className="lg:col-span-6 relative lg:h-[500px] hidden md:block animate-in fade-in zoom-in-95 duration-1000 delay-200">
                            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl shadow-slate-200/30 border border-slate-200/60 bg-slate-100">
                                <img
                                    src={mainHeroImage}
                                    alt="Global Mobility"
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]"
                                />
                                {/* Corporate gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-transparent mix-blend-overlay"></div>
                                {/* Inner premium frame line */}
                                <div className="absolute inset-4 rounded-lg border border-white/20 pointer-events-none mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are - Split Layout */}
            <section className="py-24 container-width px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-6">
                            <Users className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Who We Are</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                            A partnership built on <span className="text-primary italic">real experience.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>{homeContent.aboutText}</p>
                            <p>{homeContent.aboutText2}</p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                                Meet Our Team <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -z-10 rotate-3" />
                        <div className="grid grid-cols-2 gap-4">
                            <img src={officeImage} className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" alt="Office" />
                            <div className="space-y-4 pt-12">
                                <img src={buildingImage} className="rounded-2xl shadow-xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" alt="Building" />
                                <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl">
                                    <p className="text-3xl font-bold mb-1">20+</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Approach - Dark Section */}
            <section className="bg-blue-50 py-24 text-slate-900 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

                <div className="container-width px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 mb-8">
                            <Handshake className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Our Model</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                            Closer to regulations. <br />
                            Closer to <span className="text-primary italic">people.</span>
                        </h2>
                        <p className="text-slate-600 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
                            {homeContent.partnershipText}
                        </p>
                        <p className="text-primary font-semibold text-lg border-t border-primary/10 pt-10 inline-block">
                            {homeContent.closingLine}
                        </p>
                    </div>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container-width px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Focus Sectors</h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">We support organizations across critical industries.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {homeContent.sectors.map((sector) => {
                            const Icon = sectorIcons[sector.key] || ShieldCheck;
                            return (
                                <Link
                                    key={sector.key}
                                    to={sector.path}
                                    className="group relative bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/5 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                                        <Icon className="w-32 h-32 text-primary" />
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{sector.title}</h3>
                                    <p className="text-slate-500 text-base leading-relaxed mb-8">{sector.description}</p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        Explore Sector <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-2" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials - New Section */}
            {/* 
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container-width px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Trusted Partners</h2>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-8 relative">
                                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                <p className="text-slate-700 italic text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                                <div>
                                    <p className="font-bold text-slate-900">{t.author}</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            */}

            {/* CTA Section */}
            <section className="pb-24 container-width px-6">
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[2.5rem] p-12 md:p-20 text-center text-slate-900 relative overflow-hidden shadow-2xl shadow-blue-200/50">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 tracking-tight leading-tight">Ready to move?</h2>
                    <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-medium relative z-10">
                        Choose reliable support over bureaucracy. Book your discovery call today.
                    </p>
                    <div className="flex justify-center gap-4 relative z-10">
                        <Link to="/contact">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 h-14 px-12 text-lg font-bold rounded-xl shadow-xl transition-transform hover:-translate-y-1">
                                GET STARTED
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-slate-100 text-center bg-white">
                <div className="flex justify-center mb-6">
                    <img
                        src="/General_Logo.png"
                        alt="TriLink.Mobility"
                        className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                </div>
                <div className="flex justify-center gap-6 mb-8 text-sm font-medium text-slate-500">
                    <Link to="/health-care" className="hover:text-primary transition-colors">Healthcare</Link>
                    <Link to="/defense-sector" className="hover:text-primary transition-colors">Defense</Link>
                    <Link to="/business-immigration" className="hover:text-primary transition-colors">Business</Link>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; 2026 Trilink Mobility.</p>
            </footer>
        </div>
    );
};

export default Home;
