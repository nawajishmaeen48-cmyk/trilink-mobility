import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Mail, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
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
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 mb-6">
                            <Shield className="w-6 h-6 text-slate-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-slate-600">
                            How we protect and handle your data
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-10">

                        {/* Intro */}
                        <div className="text-slate-600">
                            <p>
                                Tri-Link Global Mobility GbR ("we," "our," "us") is committed to protecting your privacy.
                                This Privacy Policy outlines how we collect, use, disclose, and safeguard your
                                information when you visit our website www.trilink-mobility.com.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">1. Information we collect</h2>
                            
                            <h3 className="text-base font-semibold text-slate-800 mb-2">1.1 Personal data</h3>
                            <p className="text-slate-600 mb-4">
                                We collect personal data that you voluntarily provide to us when you register on our
                                website, express interest in our products and services, participate in website activities,
                                or contact us. This includes:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Any other information you choose to provide</li>
                            </ul>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">1.2 Usage data</h3>
                            <p className="text-slate-600 mb-4">
                                We automatically collect certain information when you visit, use, or navigate the
                                website. This data includes:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-1">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent on those pages</li>
                                <li>Referring website or source</li>
                                <li>Date and time of access</li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">2. How we use your information</h2>
                            
                            <h3 className="text-base font-semibold text-slate-800 mb-2">2.1 To provide services</h3>
                            <p className="text-slate-600 mb-3">
                                We use your personal information to deliver the services you request, manage your
                                account, and respond to inquiries.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">2.2 Communication</h3>
                            <p className="text-slate-600 mb-3">
                                We may use your information to contact you about your account, updates, and
                                promotional materials.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">2.3 Website improvement</h3>
                            <p className="text-slate-600 mb-3">
                                We use the information to understand website usage, which helps us improve
                                functionality and services.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">2.4 Legal obligations</h3>
                            <p className="text-slate-600">
                                We may process your information to comply with legal obligations, such as tax and
                                financial reporting requirements.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">3. Sharing your information</h2>
                            
                            <h3 className="text-base font-semibold text-slate-800 mb-2">3.1 Service providers</h3>
                            <p className="text-slate-600 mb-3">
                                We will not share your personal information with third-party service providers for
                                purposes such as payment processing, data analysis, email delivery or marketing
                                assistance – without your written consent.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">3.2 Legal requirements</h3>
                            <p className="text-slate-600 mb-3">
                                We will not share your information with legal authorities, unless required to do so by
                                law.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">3.3 Business transfers</h3>
                            <p className="text-slate-600">
                                If we undergo a merger, acquisition, or asset sale, your information may be transferred.
                                We will notify you before your information is subject to a different privacy policy.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">4. Data security</h2>
                            <p className="text-slate-600">
                                We implement appropriate technical and organizational measures to protect your
                                personal data from unauthorized access, alteration, or disclosure. However, no security
                                system is entirely foolproof, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">5. Your rights</h2>
                            
                            <h3 className="text-base font-semibold text-slate-800 mb-2">5.1 Access and correction</h3>
                            <p className="text-slate-600 mb-3">
                                You have the right to access and correct your personal data. You can update your
                                account information by contacting us.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">5.2 Data portability</h3>
                            <p className="text-slate-600 mb-3">
                                You have the right to request a copy of your data in a structured, commonly used, and
                                machine-readable format.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">5.3 Deletion</h3>
                            <p className="text-slate-600 mb-3">
                                You can request the deletion of your data, subject to certain legal exceptions.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">5.4 Withdraw consent</h3>
                            <p className="text-slate-600 mb-3">
                                You have the right to withdraw consent to our data processing at any time.
                            </p>

                            <h3 className="text-base font-semibold text-slate-800 mb-2">5.5 Object to processing</h3>
                            <p className="text-slate-600">
                                You can object to our data processing for direct marketing purposes or on grounds
                                relating to your specific situation.
                            </p>
                            <p className="text-slate-600 mt-3">
                                To exercise these rights, please contact us at{' '}
                                <a href="mailto:immigration@trilink-mobility.com" className="text-primary hover:underline">
                                    immigration@trilink-mobility.com
                                </a>.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">6. Cookies</h2>
                            <p className="text-slate-600">
                                We use cookies and similar tracking technologies to enhance your website experience.
                                Cookies are small files stored on your device. You can control cookies through your
                                browser settings. Disabling cookies may affect some website features.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">7. Third-party links</h2>
                            <p className="text-slate-600">
                                Our website may contain links to third-party sites. We are not responsible for the privacy
                                practices or content of these sites. We encourage you to review their privacy policies
                                before providing any personal information.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">8. Children's privacy</h2>
                            <p className="text-slate-600">
                                Our services are not intended for individuals under 18. We do not knowingly collect data
                                from individuals under 18. If we discover such data, we will take steps to delete it from
                                our records.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">9. GDPR compliance summary</h2>
                            <p className="text-slate-600 mb-4">
                                Since GDPR compliance is crucial, here's a summary of how we use your data:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2">
                                <li>
                                    If you contact us via email or our contact form, your details are stored securely in
                                    our inbox and possibly in a separate data management system accessible only
                                    by Tri-Link Global Mobility GbR personnel. This data will not be shared with
                                    anyone else.
                                </li>
                                <li>We do not share any email or personal information without your consent.</li>
                                <li>We only retain data that is necessary for your case and discard unrelated information.</li>
                                <li>Please send documents via email, as we do not accept data through other channels (e.g., Facebook, WhatsApp).</li>
                                <li>Our website uses a statistics tool that tracks general metrics like visitor numbers and sources without identifying individuals.</li>
                                <li>Social media plugins may transmit your IP address and referral page to those services if clicked.</li>
                            </ul>
                        </div>

                        {/* Section 10 */}
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">10. Changes to this privacy policy</h2>
                            <p className="text-slate-600">
                                We may update this Privacy Policy periodically. Changes will be posted with an updated
                                effective date. Continued use of our website after changes signifies your acceptance of
                                the updated policy.
                            </p>
                        </div>

                        {/* Section 11 */}
                        <div className="pt-6 border-t border-slate-100">
                            <h2 className="text-xl font-semibold text-slate-900 mb-4">11. Contact us</h2>
                            <p className="text-slate-600 mb-4">
                                For questions or concerns about this Privacy Policy, please contact us at:
                            </p>
                            <div className="bg-slate-50 rounded-xl p-6">
                                <p className="font-medium text-slate-900 mb-2">Tri-Link Global Mobility GbR</p>
                                <a
                                    href="mailto:immigration@trilink-mobility.com"
                                    className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    immigration@trilink-mobility.com
                                </a>
                            </div>
                            <p className="text-slate-500 text-sm mt-6">
                                By using our website and services, you consent to this Privacy Policy.
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
                <div className="flex justify-center gap-4 text-sm text-slate-400">
                    <Link to="/impressum" className="hover:text-slate-600 transition-colors">Impressum</Link>
                    <span>|</span>
                    <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">&copy; 2026 Trilink Mobility.</p>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
