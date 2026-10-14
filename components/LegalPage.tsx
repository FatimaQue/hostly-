import Link from "next/link";
import Logo from "@/components/Logo";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Logo href="/" />
          <Link className="btn btn-ghost" href="/" style={{ marginLeft: "auto" }}>
            ← Back to home
          </Link>
        </div>
      </header>
      <main className="legal">
        <div className="wrap">
          <h1>{title}</h1>
          <p className="updated">Last updated {updated}</p>
          {children}
        </div>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-bottom" style={{ marginTop: 0 }}>
            <span>© {new Date().getFullYear()} Hostly Management Company.</span>
            <span className="links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
