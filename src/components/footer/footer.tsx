import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { navigation, portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container-shell">
        <div>
          <Link href="#home" className="brand footer-brand" aria-label="Back home"><span>{portfolio.shortName}</span><i /></Link>
          <p>Engineering clarity.<br />Designing momentum.</p>
        </div>
        <div>
          <p className="footer-label">Navigation</p>
          {navigation.slice(0, 5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <p className="footer-label">Connect</p>
          <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
          {portfolio.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <ArrowUpRight size={13} /></a>)}
        </div>
        <Link href="#home" className="back-top" aria-label="Back to top"><ArrowUp /></Link>
      </div>
      <div className="footer-bottom container-shell">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>
        <span>Designed & engineered with intent.</span>
      </div>
    </footer>
  );
}
