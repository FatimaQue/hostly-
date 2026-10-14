import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { EMAIL, PHONE, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Hostly Management Company",
  description: "The terms that apply to your use of the Hostly Management Company website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="October 2026">
      <p>
        These terms apply to your use of staywithhostly.com (the &ldquo;Site&rdquo;), operated by Hostly Management Company
        (&ldquo;Hostly,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the Site you agree to them.
      </p>

      <h2>About the Site</h2>
      <p>
        The Site describes our property management services and lets you request a rental analysis, ask a management
        question, or tell us what kind of rental you are looking for. Content on the Site is for general information only.
      </p>

      <h2>No obligation; no guarantee</h2>
      <p>
        Submitting a form does not create a management agreement, lease, booking, or any other contract. A free rental
        analysis is an estimate based on the information available to us and is not a guarantee of income, occupancy,
        or rental rates. Any management services are provided only under a separate written agreement.
      </p>

      <h2>Property availability</h2>
      <p>Properties and rates shown on the Site may change or become unavailable without notice. Contact us to confirm current availability.</p>

      <h2>Your information</h2>
      <p>
        You agree to give accurate information when you contact us. How we handle that information is described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to misuse the Site, including by attempting to interfere with its operation, submitting false or abusive content, or using it for unlawful purposes.</p>

      <h2>Intellectual property</h2>
      <p>The Site&apos;s text, logos, and images belong to Hostly or its licensors. You may not copy or reuse them without our written permission.</p>

      <h2>Third-party services</h2>
      <p>The Site may link to or rely on third-party services. We are not responsible for their content or practices.</p>

      <h2>Disclaimer and limitation of liability</h2>
      <p>
        The Site is provided &ldquo;as is.&rdquo; To the fullest extent permitted by law, Hostly is not liable for indirect
        or consequential damages arising from your use of the Site or reliance on its content.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of the Site after a change means you accept the updated terms.</p>

      <h2>Contact us</h2>
      <p>
        Hostly Management Company<br />
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
        Phone: <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
      </p>
    </LegalPage>
  );
}
