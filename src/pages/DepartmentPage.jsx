import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/ui/button";
import { departmentData, frequentlyAskedQuestions } from "../data/mockData";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Clock,
    Zap,
    Shield,
    HeartPulse,
    Briefcase,
    ChevronRight,
    Users,
    Globe,
    FileCheck
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";

const deptIcons = {
    healthcare: HeartPulse,
    defense: Shield,
    immigration: Briefcase
};

const DepartmentPage = ({ type }) => {
    const data = departmentData[type];
    const faqs = frequentlyAskedQuestions.filter(
        (faq) => faq.sector === type || faq.sector === "all"
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    if (!data) return <div className="p-20 text-center">Department Profile Not Found</div>;

    const DeptIcon = deptIcons[type] || ShieldCheck;

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-blue-50 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={data.heroImage}
                        className="w-full h-full object-cover opacity-80 saturate-110 scale-105 animate-in fade-in duration-1000"
                        alt={data.department}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-50/90 via-blue-50/60 to-blue-50/30" />
                </div>

                <div className="container-width px-6 relative z-10 text-center mt-12">
                    <div className="inline-flex items-center justify-center gap-3 mb-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
                        <div className="w-12 h-px bg-primary/60" />
                        <div className="flex items-center gap-2 text-primary">
                            <DeptIcon className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">{data.department}</span>
                        </div>
                        <div className="w-12 h-px bg-primary/60" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight max-w-5xl mx-auto drop-shadow-sm animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100">
                        {data.tagline}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed opacity-90 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">
                        {data.subtitle}
                    </p>
                </div>
            </section>

            {/* Introduction - Split Layout */}
            <section className="py-24 bg-white">
                <div className="container-width px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-2">
                                <Globe className="w-3.5 h-3.5 text-primary" />
                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Market Context</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                                Understanding the Challenge
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                {data.intro.split('\n\n').map((para, i) => (
                                    <p key={i} className={i === 0 ? "font-medium text-slate-800" : ""}>
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 scale-95 group-hover:rotate-1 transition-transform duration-500" />
                            <img
                                src={data.featureImage || data.heroImage}
                                alt="Context"
                                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections - Grid Cards or Features */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 pointer-events-none" />
                <div className="container-width px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Approach</h2>
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                    </div>

                    <div className={`grid ${data.sections.length > 1 ? 'md:grid-cols-2' : 'max-w-4xl mx-auto'} gap-8`}>
                        {data.sections.map((section, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/10 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {idx === 0 ? <Users className="w-6 h-6 text-primary group-hover:text-white" /> : <FileCheck className="w-6 h-6 text-primary group-hover:text-white" />}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors">
                                    {section.title}
                                </h3>
                                <div className="space-y-4">
                                    {section.content.split('\n\n').map((para, i) => (
                                        <p key={i} className="text-slate-600 leading-relaxed">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services - Corporate Grid */}
            <section className="py-24 bg-blue-50 text-slate-900 relative overflow-hidden border-t border-blue-100">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#00336633_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="container-width px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-16 md:text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                {type === 'healthcare' ? 'Comprehensive Recruitment Services' : 'Management & Compliance'}
                            </h2>
                            {data.serviceGroups && (
                                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                                    Specialized support for: <span className="text-slate-900 font-medium">{data.serviceGroups.join(' \u2022 ')}</span>
                                </p>
                            )}
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-4">
                            {data.services.map((service, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-primary/10 group">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                                    </div>
                                    <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">{service}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            {data.closingLine && (
                <section className="py-24 container-width px-6">
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-[2.5rem] p-10 md:p-20 text-center text-slate-900 shadow-2xl relative overflow-hidden group border border-blue-100 shadow-blue-200/50">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-all duration-1000" />

                        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight max-w-3xl mx-auto leading-tight relative z-10">
                            {data.closingLine}
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <Link to="/contact">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                                    Partner With Us
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 h-14 px-10 text-lg font-bold rounded-xl hover:-translate-y-1 transition-all">
                                    View All Sectors
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ - Clean Corporate Style */}
            {/* 
            {faqs.length > 0 && (
                <section className="py-24 bg-slate-50 border-t border-slate-200">
                    <div className="container-width px-6">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-3 tracking-tight text-slate-900">Expert Insights</h2>
                                <p className="text-slate-500">Common questions about {data.department.toLowerCase()} mobility.</p>
                            </div>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqs.map((faq, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-2xl border border-slate-200 px-6 hover:shadow-md transition-shadow duration-300">
                                        <AccordionTrigger className="hover:no-underline py-6 text-lg font-semibold text-left text-slate-800 hover:text-primary transition-colors">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base text-slate-600 leading-relaxed pb-6 pt-0">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>
            )}
            */}

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
                    <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; 2026 Trilink Mobility.</p>
            </footer>
        </div>
    );
};

export default DepartmentPage;
