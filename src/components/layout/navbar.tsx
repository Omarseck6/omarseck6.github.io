"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, portfolio } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="Primary navigation">
        <Link href="#home" className="brand" aria-label={`${portfolio.name} — home`} onClick={() => setOpen(false)}>
          <span>{portfolio.shortName}</span>
          <i />
        </Link>

        <div className="nav-links" aria-label="Page sections">
          {navigation.slice(0, 5).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>

        <Link href="#contact" className="nav-cta">
          Let&apos;s talk <ArrowUpRight size={16} />
        </Link>

        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div id="mobile-menu" className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {navigation.map((item, index) => (
              <motion.div key={item.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }}>
                <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
