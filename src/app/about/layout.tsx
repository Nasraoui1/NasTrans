import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Nas-Trans Tunisie SARL, commissionnaire en douane et transitaire à Tunis depuis 1999 : notre expertise et nos engagements.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
