const { Resend } = require('resend');

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Department email mapping
const DEPARTMENT_EMAILS = {
    'Healthcare Talent': 'healthcare@trilink-mobility.com',
    'Defense Sector': 'defense@trilink-mobility.com',
    'Business Immigration': 'immigration@trilink-mobility.com'
};

// For testing with unverified domain, send to your verified email
// Replace with actual department emails after domain verification
const TEST_MODE = true;
const VERIFIED_EMAIL = 'nawajishmaeen48@gmail.com';

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { firstName, lastName, email, sector, message, timestamp } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !sector || !message) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }

        // Get all department emails (or use verified email for testing)
        const recipientEmails = TEST_MODE ? [VERIFIED_EMAIL] : Object.values(DEPARTMENT_EMAILS);

        // Create email HTML content
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>

                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; width: 120px;"><strong>Name:</strong></td>
                            <td style="padding: 8px 0; color: #0f172a;">${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                            <td style="padding: 8px 0; color: #0f172a;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b;"><strong>Department:</strong></td>
                            <td style="padding: 8px 0; color: #0f172a;">${sector}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b;"><strong>Submitted:</strong></td>
                            <td style="padding: 8px 0; color: #0f172a;">${new Date(timestamp).toLocaleString()}</td>
                        </tr>
                    </table>
                </div>

                <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
                    <p style="color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px;">
                    <p>This email was sent from the TriLink Mobility contact form.</p>
                    ${TEST_MODE ? '<p><strong>Note:</strong> Currently in TEST MODE. After domain verification, this will be sent to: ' + Object.values(DEPARTMENT_EMAILS).join(', ') + '</p>' : ''}
                </div>
            </div>
        `;

        // Send email
        const { data, error } = await resend.emails.send({
            from: 'TriLink Mobility <onboarding@resend.dev>',
            to: recipientEmails,
            subject: `New Contact Form Submission - ${sector}`,
            html: htmlContent,
            replyTo: email
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({
                error: 'Failed to send email',
                details: error
            });
        }

        console.log('Email sent successfully:', data);
        return res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            testMode: TEST_MODE,
            sentTo: recipientEmails,
            actualRecipients: Object.values(DEPARTMENT_EMAILS),
            data
        });

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
};
