import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { EMAIL, PHONE, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Hostly Management Company",
  description: "How Hostly Management Company collects, uses, and protects information submitted through its website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <p>
        Hostly Management Company (&ldquo;Hostly,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy.
        This policy explains what information we collect through staywithhostly.com, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <p>We collect only the information you choose to send us through our website forms or by contacting us directly:</p>
      <ul>
        <li><b>Free Rental Analysis form:</b> name, email, property type, property location, and any details you share about your property.</li>
        <li><b>Management Question form:</b> name, email, topic, and your question.</li>
        <li><b>Tenant Property Request form:</b> name, email, preferred area, stay type, move-in timing, budget range, and any notes you add.</li>
        <li><b>Direct contact:</b> any information you include when you call, text, or email us.</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your inquiry, prepare a rental analysis, or match you with available properties.</li>
        <li>To provide and improve our property management services.</li>
        <li>To keep records of the requests we receive.</li>
      </ul>

      <h2>Sharing your information</h2>
      <p>
        We do not sell your personal information. We may share it with service providers who help us operate our business
        (for example, email, spreadsheet, and hosting providers), and only as needed to handle your request. We may also
        disclose information when required by law.
      </p>

      <h2>Where your information is stored</h2>
      <p>
        Form submissions are delivered to our business email and recorded in a private spreadsheet hosted with Google.
        Our website is hosted by Vercel. These providers process data under their own privacy and security terms.
      </p>

      <h2>Cookies and analytics</h2>
      <p>This website does not use advertising cookies or third-party trackers. It loads fonts from Google Fonts, which may receive your IP address when the page loads.</p>

      <h2>Retention</h2>
      <p>We keep inquiry records for as long as needed to respond to you and to maintain our business records, then delete them.</p>

      <h2>Your choices</h2>
      <p>
        You may ask us to access, correct, or delete the information you have sent us by contacting us at the details below.
        If you receive an email from us and no longer wish to hear from us, tell us and we will stop.
      </p>

      <h2>Children</h2>
      <p>Our website is not directed to children under 13, and we do not knowingly collect their information.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The &ldquo;last updated&rdquo; date above shows when it last changed.</p>

      <h2>Contact us</h2>
      <p>
        Hostly Management Company<br />
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
        Phone: <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
      </p>
    </LegalPage>
  );
}
