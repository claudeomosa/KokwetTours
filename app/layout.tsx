import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kokwet to Crown | The Nandi Experience",
  description: "Cultural journeys and wild Kenyan escapes, rooted in Nandi Hills."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
