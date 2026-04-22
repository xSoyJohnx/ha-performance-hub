import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/#servicios", label: "Servicios", hash: true },
  { to: "/planes", label: "Planes" },
  { to: "/#galeria", label: "Galería", hash: true },
  { to: "/#contacto", label: "Contacto", hash: true },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-md bg-brand flex items-center justify-center font-display text-2xl text-white shadow-glow-sm group-hover:scale-110 transition-transform glow-red-sm">
              HA
            </div>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xs tracking-[0.3em] text-brand">ENTRENA</span>
            <span className="font-display text-xs tracking-[0.3em] text-white/70">COMPITE · REPITE</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) =>
            item.hash ? (
              <a
                key={item.to}
                href={item.to}
                className="font-display text-sm tracking-widest text-white/80 hover:text-brand transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-brand" }}
                className="font-display text-sm tracking-widest text-white/80 hover:text-brand transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
              </Link>
            )
          )}
        </nav>

        <a
          href="https://wa.me/593985589294"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-6 py-3 bg-brand text-white font-display text-sm tracking-widest rounded-md hover:scale-105 hover:shadow-glow transition-all duration-300"
        >
          AGENDA TU ASESORÍA
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass border-t border-border mt-3"
        >
          <div className="container mx-auto px-5 py-6 flex flex-col gap-5">
            {NAV.map((item) =>
              item.hash ? (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-base tracking-widest text-white/90 hover:text-brand"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-base tracking-widest text-white/90 hover:text-brand"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/593985589294"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 bg-brand text-white font-display text-sm tracking-widest rounded-md"
            >
              AGENDA TU ASESORÍA
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
