import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/ui/button';
import { teamMembers } from '../data/mockData';
import {
    ArrowRight,
    Award,
    Mail,
    Linkedin,
    Users,
    Globe,
    ShieldCheck,
    Briefcase
} from 'lucide-react';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary/20">
            <Navbar />

            {/* Hero Section - Corporate & Clean */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-blue-50 overflow-hidden border-b border-blue-100">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-blue-50 to-blue-100/50" />
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                </div>

                <div className="container-width px-6 relative z-10 text-center mt-16">
                    <div className="inline-flex items-center justify-center gap-3 mb-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
                        <div className="w-8 h-px bg-primary/60" />
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Leadership</span>
                        <div className="w-8 h-px bg-primary/60" />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                        Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Experience.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        A partnership of specialized relocation and immigration experts with over 20 years of combined experience in global mobility.
                    </p>
                </div>
            </section>

            {/* Values / Philosophy Section - Breaking up text */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container-width px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Compliance First", desc: "Navigating complex regulations with absolute precision and legal expertise." },
                            { icon: Globe, title: "Global Reach", desc: "Connecting talent and organizations across borders with seamless efficiency." },
                            { icon: Users, title: "Human Approach", desc: "Treating every relocation as a personal journey, not just a transaction." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary/10 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <item.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members - Polished Layout */}
            <section className="py-24 container-width px-6">
                <div className="space-y-32">
                    {teamMembers.map((member, idx) => (
                        <div key={member.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-16`}>
                            {/* Photo Side - Sticky */}
                            <div className="lg:w-5/12 lg:sticky lg:top-32 w-full">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] translate-y-4 translate-x-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4]">
                                        <img
                                            src={member.image}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            alt={member.name}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                                        <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                                            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">{member.department}</p>
                                            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                            <p className="text-sm opacity-90">{member.role}</p>
                                        </div>
                                    </div>

                                    {/* Social Links Floating */}
                                    <div className="absolute -right-6 top-12 flex flex-col gap-3">
                                        {member.social.linkedin && (
                                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-lg text-slate-600 hover:text-primary hover:scale-110 transition-all">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.social.email && (
                                            <a href={`mailto:${member.social.email}`} className="bg-white p-3 rounded-full shadow-lg text-slate-600 hover:text-primary hover:scale-110 transition-all">
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bio Side */}
                            <div className="lg:w-7/12 pt-4">
                                <div className="mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                                        Expertise & Background
                                    </h2>
                                    <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
                                        <p className="font-medium text-slate-800 text-xl mb-6 border-l-4 border-primary pl-6 italic">
                                            "{member.bio}"
                                        </p>
                                        {member.longBio.split('\n\n').map((para, i) => (
                                            <p key={i} className="mb-6">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Credentials Grid */}
                                {/* 
                                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Credentials & Qualifications</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {member.credentials.map((cred, i) => (
                                            <div key={i} className="inline-flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-slate-200 text-sm font-semibold text-slate-700">
                                                <Award className="w-4 h-4 text-primary" />
                                                {cred}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24 container-width px-6">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-[2.5rem] p-12 md:p-20 text-center text-slate-900 relative overflow-hidden shadow-2xl border border-blue-100 shadow-blue-200/50">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 tracking-tight">Ready to collaborate?</h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto font-medium relative z-10">
                        Reach out to our leadership team directly for strategic mobility consulting.
                    </p>
                    <div className="flex justify-center gap-4 relative z-10">
                        <Link to="/contact">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-transform hover:-translate-y-1">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-white text-center border-t border-slate-100">
                <div className="flex justify-center mb-6">
                    <img
                        src="/logo.png"
                        alt="TriLink.Mobility"
                        className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; 2026 Trilink Mobility.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
