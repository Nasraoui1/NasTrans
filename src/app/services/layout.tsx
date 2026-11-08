import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos services",
  description: "Formalités douanières, commerce extérieur, dédouanement et livraison, traitement des déclarations : découvrez les services de Nas-Trans Tunisie.",
  alternates: { canonical: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
