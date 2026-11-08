import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & devis",
  description: "Contactez Nas-Trans à Tunis pour un devis de dédouanement ou un conseil en commerce extérieur : téléphone, email, adresse et formulaire.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
