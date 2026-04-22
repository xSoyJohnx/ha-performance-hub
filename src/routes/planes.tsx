import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Crown, Flame, Star, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/planes")({
  head: () => ({
    meta: [
      { title: "Planes de Entrenamiento — HA Coach IFBB" },
      {
        name: "description",
        content:
          "Elige tu plan de entrenamiento: Básico, Pro o Elite. Coaching profesional online y presencial con el coach IFBB internacional HA.",
      },
      { property: "og:title", content: "Planes — HA Entrena, Compite, Repite" },
      {
        property: "og:description",
        content: "Planes Básico, Pro y Elite. Encuentra el coaching ideal para alcanzar tu mejor versión.",
      },
    ],
  }),
  component: PlanesPage,
});

const PLANS = [
  {
    name: "BÁSICO",
    icon: Flame,
    price: "$49",
    period: "/mes",
    tagline: "Para quienes empiezan en serio",
    features: [
      "Rutina personalizada",
      "Seguimiento semanal",
      "Asesoría online",
      "Plan nutricional base",
      "Acceso por WhatsApp",
    ],
    popular: false,
  },
  {
    name: "PRO",
    icon: Star,
    price: "$89",
    period: "/mes",
    tagline: "El plan favorito de los atletas",
    features: [
      "Rutina avanzada periodizada",
      "Seguimiento diario",
      "Nutrición completa",
      "WhatsApp directo con el coach",
      "Corrección técnica por video",
      "Ajustes semanales",
    ],
    popular: true,
  },
  {
    name: "ELITE",
    icon: Crown,
    price: "$149",
    period: "/mes",
    tagline: "Coaching de alto rendimiento",
    features: [
      "Coaching 1 a 1",
      "Atención personalizada total",
      "Plan nutricional premium",
      "Asesoría presencial",
      "Preparación competitiva",
      "Estrategia de suplementación",
      "Soporte 24/7",
    ],
    popular: false,
  },
];

function PlanesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/20 blur-[150px] rounded-full" />

        <div className="container mx-auto px-5 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-display text-xs tracking-widest text-brand">PLANES DE COACHING</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.95]">
              ELIGE TU <br />
              <span className="text-brand">CAMINO</span> AL <span className="text-stroke">ÉXITO</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mt-6 text-lg">
              Programas diseñados para cada nivel. Desde tu primera transformación
              hasta la preparación para competir en tarima.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PLANS GRID */}
      <section className="py-16 pb-32 relative">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {PLANS.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className={`relative group ${plan.popular ? "md:-mt-6" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <div className="px-5 py-2 bg-brand text-white font-display text-xs tracking-widest rounded-full glow-red-sm whitespace-nowrap">
                        ★ MÁS POPULAR
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative h-full rounded-3xl p-8 lg:p-10 transition-all duration-500 overflow-hidden ${
                      plan.popular
                        ? "bg-gradient-to-b from-brand/20 via-surface to-surface border-2 border-brand shadow-glow"
                        : "bg-surface border border-border hover:border-brand/60 hover:-translate-y-2"
                    }`}
                    style={{ boxShadow: plan.popular ? "var(--shadow-glow)" : "var(--shadow-card)" }}
                  >
                    {/* glow background */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand/20 blur-[80px] rounded-full" />

                    <div className="relative">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                          plan.popular ? "bg-brand text-white" : "bg-brand/10 border border-brand/30 text-brand"
                        }`}
                      >
                        <Icon size={26} />
                      </div>

                      <h3 className="font-display text-3xl md:text-4xl mb-2">{plan.name}</h3>
                      <p className="text-white/60 text-sm mb-6">{plan.tagline}</p>

                      <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-border">
                        <span className="font-display text-5xl md:text-6xl text-white">{plan.price}</span>
                        <span className="text-white/50 font-display tracking-widest">{plan.period}</span>
                      </div>

                      <ul className="space-y-3 mb-10">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-white/80">
                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                              plan.popular ? "bg-brand" : "bg-brand/20"
                            }`}>
                              <Check size={12} className={plan.popular ? "text-white" : "text-brand"} strokeWidth={3} />
                            </div>
                            <span className="text-sm leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={`https://wa.me/593985589294?text=Hola,%20quiero%20el%20plan%20${plan.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn flex items-center justify-center gap-2 w-full py-4 font-display tracking-widest rounded-md transition-all duration-300 ${
                          plan.popular
                            ? "bg-brand text-white hover:shadow-glow hover:scale-105"
                            : "bg-white/5 text-white border border-border hover:bg-brand hover:border-brand"
                        }`}
                      >
                        QUIERO ESTE PLAN
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-3xl mx-auto text-center bg-surface border border-border rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl md:text-3xl mb-3">
              ¿NECESITAS ALGO <span className="text-brand">A MEDIDA?</span>
            </h3>
            <p className="text-white/60 mb-6">
              Conversemos sobre tus objetivos y te armaré una propuesta personalizada.
            </p>
            <a
              href="https://wa.me/593985589294"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-display tracking-widest rounded-md hover:shadow-glow hover:scale-105 transition-all"
            >
              <MessageCircle size={18} />
              HABLEMOS POR WHATSAPP
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
