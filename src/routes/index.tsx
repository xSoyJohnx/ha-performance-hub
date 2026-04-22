import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Wifi,
  Apple,
  Headphones,
  TrendingUp,
  Zap,
  Trophy,
  HeartPulse,
  Pill,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HA — Entrena, Compite, Repite | Coach IFBB" },
      {
        name: "description",
        content:
          "Transforma tu cuerpo y supera tus límites con entrenamiento profesional presencial y online del coach IFBB internacional HA.",
      },
      { property: "og:title", content: "HA — Entrena, Compite, Repite" },
      {
        property: "og:description",
        content: "Coach IFBB. Entrenamiento, nutrición y preparación competitiva.",
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const SERVICES = [
  { icon: Dumbbell, title: "Entrenamiento Personalizado", desc: "Rutinas únicas diseñadas según tu objetivo y biomecánica." },
  { icon: Users, title: "Asesorías Presenciales", desc: "Acompañamiento en gimnasio con corrección técnica en vivo." },
  { icon: Wifi, title: "Asesorías Online", desc: "Coaching remoto con plan completo y seguimiento por WhatsApp." },
  { icon: Apple, title: "Plan Nutricional", desc: "Macros calculados y menús reales adaptados a tu meta." },
  { icon: Headphones, title: "Guía Continua", desc: "Soporte 24/7 para resolver dudas y ajustar el plan." },
  { icon: TrendingUp, title: "Ganancia Muscular", desc: "Hipertrofia avanzada con periodización profesional." },
  { icon: Zap, title: "Definición Corporal", desc: "Pierde grasa preservando masa con protocolos exactos." },
  { icon: Trophy, title: "Preparación Competitiva", desc: "Posing, peak week y estrategia tarima-IFBB." },
  { icon: HeartPulse, title: "Entrenamiento para Mujer", desc: "Programa enfocado en glúteo, fuerza y feminidad atlética." },
  { icon: Pill, title: "Suplementación Deportiva", desc: "Recomendaciones inteligentes según tu fase de entreno." },
];

const BADGES = ["IFBB Certified", "Online Coach", "Presencial", "Nutrición"];
const CITIES = ["Ibarra", "Cotacachi", "Atuntaqui", "Otavalo"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 lg:pt-0 overflow-hidden noise">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 30%, oklch(0.62 0.27 25 / 0.35) 0%, transparent 55%), linear-gradient(135deg, oklch(0.13 0 0) 0%, oklch(0.06 0 0) 100%)",
          }}
        />

        {/* Floating red orbs */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand/20 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand/10 rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-16">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-brand/40 rounded-full bg-brand/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span className="font-display text-xs tracking-widest text-brand">COACH IFBB INTERNACIONAL</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] mb-6">
              <span className="block text-white">TRANSFORMA</span>
              <span className="block text-white">TU <span className="text-brand">CUERPO</span>.</span>
              <span className="block text-stroke">SUPERA TUS</span>
              <span className="block text-brand">LÍMITES.</span>
            </h1>

            <p className="text-base lg:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              Entrenamiento profesional presencial y online diseñado para maximizar
              resultados, ganancia muscular y rendimiento físico de élite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/planes"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-display tracking-widest rounded-md hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                VER PLANES
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/593985589294"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-display tracking-widest rounded-md hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-300"
              >
                <MessageCircle size={18} />
                CONTACTAR WHATSAPP
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "10+", l: "Años exp." },
                { n: "500+", l: "Atletas" },
                { n: "IFBB", l: "Certificado" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-brand">{s.n}</div>
                  <div className="text-xs text-white/50 tracking-widest mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand/30 blur-3xl rounded-full" />
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand/30 shadow-glow">
              <ImagePlaceholder variable="[HERO_IMAGE]" className="w-full h-full" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-4 backdrop-blur-md shadow-card hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                  <Trophy size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-display text-sm text-white">IFBB CERTIFIED</div>
                  <div className="text-xs text-white/50">Coach internacional</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 inset-x-0 border-y border-border bg-black/60 backdrop-blur-sm py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(2).fill(0).map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6 font-display tracking-widest text-white/60">
                <span>ENTRENA</span><span className="text-brand">●</span>
                <span>COMPITE</span><span className="text-brand">●</span>
                <span>REPITE</span><span className="text-brand">●</span>
                <span>FUERZA</span><span className="text-brand">●</span>
                <span>DISCIPLINA</span><span className="text-brand">●</span>
                <span>RESULTADOS</span><span className="text-brand">●</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT COACH */}
      <section className="py-24 relative">
        <div className="container mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative max-w-5xl mx-auto rounded-3xl bg-surface border border-border p-8 md:p-14 shadow-card overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand/10 blur-[120px] rounded-full" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-display text-xs tracking-widest text-brand">SOBRE EL COACH</span>
                <h2 className="font-display text-4xl md:text-5xl mt-3 mb-5 leading-tight">
                  ENTRENADOR <br /> <span className="text-brand">INTERNACIONAL IFBB</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Especializado en entrenamiento para mujer, fisicoculturismo, ganancia
                  muscular, acondicionamiento deportivo y transformación física.
                  Resultados reales para atletas que no se conforman.
                </p>

                <div className="flex flex-wrap gap-2">
                  {BADGES.map((b, i) => (
                    <motion.span
                      key={b}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="px-4 py-2 bg-brand/10 border border-brand/40 rounded-full font-display text-xs tracking-widest text-brand"
                    >
                      {b}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder variable="[GALLERY_IMAGE_1]" className="rounded-xl aspect-[3/4] mt-6" />
                <ImagePlaceholder variable="[GALLERY_IMAGE_2]" className="rounded-xl aspect-[3/4]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 relative">
        <div className="container mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="font-display text-xs tracking-widest text-brand">QUÉ OFREZCO</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">
              SERVICIOS <span className="text-brand">PROFESIONALES</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              Programas completos para llevar tu físico y rendimiento al siguiente nivel.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
                className="group relative bg-surface border border-border rounded-2xl p-6 hover:border-brand/60 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/10 group-hover:to-transparent transition-all duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white group-hover:shadow-glow-sm transition-all">
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-display text-lg mb-2 leading-tight">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{s.desc}</p>
                  <a
                    href="https://wa.me/593985589294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-display tracking-widest text-brand hover:gap-2 transition-all"
                  >
                    MÁS INFORMACIÓN <ArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="py-24 bg-black/40 relative">
        <div className="container mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="font-display text-xs tracking-widest text-brand">GALERÍA</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">
              EN <span className="text-brand">ACCIÓN</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { v: "[GALLERY_IMAGE_1]", c: "row-span-2 aspect-[3/5]" },
              { v: "[GALLERY_IMAGE_2]", c: "aspect-square" },
              { v: "[GALLERY_IMAGE_3]", c: "aspect-square" },
              { v: "[GALLERY_IMAGE_4]", c: "col-span-2 aspect-[2/1]" },
            ].map((g, i) => (
              <motion.div
                key={g.v}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-2xl border border-border hover:border-brand/60 transition-all ${g.c}`}
              >
                <ImagePlaceholder variable={g.v} className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/30 transition-all duration-500 mix-blend-overlay" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section className="py-24 relative">
        <div className="container mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <span className="font-display text-xs tracking-widest text-brand">TRANSFORMACIONES</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">
              RESULTADOS <span className="text-brand">REALES</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              Mira cómo nuestros atletas transforman su físico con disciplina y planificación profesional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { v: "[TRANSFORMATION_IMAGE_1]", t: "ATLETA #01", w: "+8 KG MÚSCULO" },
              { v: "[TRANSFORMATION_IMAGE_2]", t: "ATLETA #02", w: "-15 KG GRASA" },
            ].map((t, i) => (
              <motion.div
                key={t.v}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-brand/60 transition-all"
              >
                <ImagePlaceholder variable={t.v} className="aspect-[4/3] w-full group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display text-xl">{t.t}</div>
                      <div className="text-brand font-display text-sm tracking-widest">{t.w}</div>
                    </div>
                    <div className="px-3 py-1 bg-brand text-white text-xs font-display tracking-widest rounded">
                      ANTES / DESPUÉS
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="py-24 bg-black/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-5 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-display text-xs tracking-widest text-brand">COBERTURA PRESENCIAL</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 mb-5 leading-tight">
                LLEGAMOS A <br /> <span className="text-brand">TU GIMNASIO</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Atención presencial directa con corrección técnica en vivo y planificación a medida.
              </p>
              <ul className="space-y-3">
                {CITIES.map((city) => (
                  <li key={city} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-brand" />
                    <span className="font-display tracking-widest text-white">{city.toUpperCase()}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square rounded-3xl bg-surface border border-border overflow-hidden p-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand/20 blur-[80px] rounded-full" />
              <div className="relative w-full h-full">
                {[
                  { city: "IBARRA", x: "30%", y: "25%" },
                  { city: "COTACACHI", x: "70%", y: "40%" },
                  { city: "ATUNTAQUI", x: "20%", y: "60%" },
                  { city: "OTAVALO", x: "65%", y: "75%" },
                ].map((p, i) => (
                  <motion.div
                    key={p.city}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="absolute"
                    style={{ left: p.x, top: p.y }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-50" />
                      <div className="relative w-4 h-4 rounded-full bg-brand glow-red-sm" />
                      <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-xs tracking-widest text-white bg-black/80 px-2 py-1 rounded">
                        <MapPin size={10} className="inline text-brand mr-1" />
                        {p.city}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, oklch(0.55 0.27 25) 0%, oklch(0.4 0.24 25) 100%)" }}
        />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />

        <div className="container mx-auto px-5 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-7xl text-white leading-[0.95] mb-6">
              ¿LISTO PARA TU <br /> <span className="text-stroke" style={{ WebkitTextStroke: "2px white" }}>MEJOR VERSIÓN?</span>
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
              Da el primer paso. El cambio empieza con una decisión.
            </p>

            <a
              href="https://wa.me/593985589294"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-black text-white font-display text-lg md:text-xl tracking-widest rounded-md animate-pulse-glow hover:scale-105 transition-transform"
            >
              <MessageCircle size={24} />
              ESCRÍBEME AL WHATSAPP
            </a>

            <div className="mt-6 font-display text-2xl md:text-3xl text-white tracking-widest">
              0985 589 294
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
