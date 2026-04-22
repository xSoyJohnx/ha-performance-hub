import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="relative bg-black border-t border-border pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div className="container mx-auto px-5 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-md bg-brand flex items-center justify-center font-display text-2xl text-white glow-red-sm">
              HA
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xs tracking-[0.3em] text-brand">ENTRENA</span>
              <span className="font-display text-xs tracking-[0.3em] text-white/70">COMPITE · REPITE</span>
            </div>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed">
            Coach IFBB internacional. Entrenamiento profesional presencial y online para
            transformar tu físico, ganar masa muscular y superar tus límites.
          </p>

          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-11 h-11 rounded-md border border-border bg-surface flex items-center justify-center text-white/70 hover:text-white hover:bg-brand hover:border-brand hover:shadow-glow-sm transition-all"
                aria-label="Social"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-brand mb-5">NAVEGACIÓN</h4>
          <ul className="space-y-3 text-white/70">
            <li><Link to="/" className="hover:text-brand transition-colors">Inicio</Link></li>
            <li><Link to="/planes" className="hover:text-brand transition-colors">Planes</Link></li>
            <li><a href="/#servicios" className="hover:text-brand transition-colors">Servicios</a></li>
            <li><a href="/#galeria" className="hover:text-brand transition-colors">Galería</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-brand mb-5">CONTACTO</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-brand mt-0.5 shrink-0" />
              <a href="https://wa.me/593985589294" className="hover:text-white">0985 589 294</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-brand mt-0.5 shrink-0" />
              <span>Ibarra · Cotacachi · Atuntaqui · Otavalo</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-5 mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs tracking-widest font-display">
          © {new Date().getFullYear()} HA — TODOS LOS DERECHOS RESERVADOS
        </p>
        <p className="text-white/40 text-xs tracking-widest font-display">
          ENTRENA · COMPITE · REPITE
        </p>
      </div>
    </footer>
  );
}
