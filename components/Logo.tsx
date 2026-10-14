const LOGO_SRC = "/images/hostly-logo.jpg";

export default function Logo({ href = "#top" }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="Hostly — home">
      <img className="brand-logo" src={LOGO_SRC} alt="Hostly" width="44" height="44" />
      <span className="brand-name">Hostly</span>
    </a>
  );
}
