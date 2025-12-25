"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { ArrowRightIcon, GlobeAmericasIcon, TruckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 overflow-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Elements - Professional & Subtle */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-sm font-bold tracking-wider uppercase mb-2">
              Transitaire M.F. 633802 X/A/M/000
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight text-slate-900">
              Nas-Trans <br />
              <span className="text-brand-primary">
                Tunisie SARL
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
              Votre partenaire de confiance pour toutes les formalités douanières et de commerce extérieur.
              Efficacité, fiabilité et rapidité garanties sur tout le territoire tunisien.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="group shadow-lg shadow-blue-500/20">
                  Nos Services
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Demander un Devis
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Disponible 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-primary text-xl font-bold">25+</span>
                <span>Ans d'Expérience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Abstract Minimalist Globe Representation */}
            <div className="relative w-full h-full max-w-md mx-auto">
              <div className="absolute inset-0 border border-slate-200 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-8 border border-dashed border-slate-300 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-[20%] bg-white rounded-full shadow-2xl flex items-center justify-center">
                <GlobeAmericasIcon className="w-48 h-48 text-brand-primary relative z-10" />
              </div>

              {/* Floating Cards - Clean & Professional */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100"
              >
                <div className="bg-blue-50 p-2 rounded-lg">
                  <TruckIcon className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Statut</div>
                  <div className="text-sm font-bold text-slate-900">En Transit</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100"
              >
                <div className="bg-indigo-50 p-2 rounded-lg">
                  <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Sécurité</div>
                  <div className="text-sm font-bold text-slate-900">Certifiée</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900">Pourquoi Choisir Nas-Trans ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une expertise reconnue depuis 1999 dans le dédouanement et le transit international.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Formalités Douanières",
              description: "Gestion complète de vos déclarations et procédures douanières.",
              icon: ShieldCheckIcon,
              color: "text-brand-primary",
              bgColor: "bg-blue-50"
            },
            {
              title: "Commerce Extérieur",
              description: "Assistance et conseils pour toutes vos opérations d'import/export.",
              icon: GlobeAmericasIcon,
              color: "text-brand-secondary",
              bgColor: "bg-slate-100"
            },
            {
              title: "Transport & Logistique",
              description: "Solutions de transport optimisées jusqu'à vos locaux.",
              icon: TruckIcon,
              color: "text-brand-accent",
              bgColor: "bg-amber-50"
            },
          ].map((feature, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-lg hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-brand-primary transition-colors">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 py-20">
        <div className="relative rounded-3xl overflow-hidden bg-brand-primary text-white p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
          {/* You might want a subtle pattern or just a clean gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-blue-700" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Besoin d'un devis ?</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-lg">
              Contactez-nous pour une estimation rapide ou pour discuter de vos besoins logistiques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100 border-none shadow-md">Contacter-nous</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" className="bg-transparent border-white text-white hover:bg-white/10">Nos Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
