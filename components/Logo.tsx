const LOGO_SRC = "/images/hostly-logo-white.png";

export default function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="Hostly — home">
      <img className="brand-logo" src={LOGO_SRC} alt="Hostly" width="64" height="64" />
      <span className="brand-name">Hostly</span>
    </a>
  );
}
