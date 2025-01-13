// app/manicure/metadata.ts
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manicure | Professionele Nagelverzorging",
  description:
    "Luxueuze manicure en nagelverzorging uit Brasschaat. Natuurlijke nagelversteviging, artistieke designs en premium behandelingen met de beste producten.",
  keywords: [
    "manicure",
    "nagelverzorging",
    "nagelstudio Brasschaat",
    "nail art",
    "gel nagels",
    "kunstnagels",
    "natuurlijke nagels",
    "nagelsalon Brasschaat",
  ],
  openGraph: {
    title: `Manicure | ${siteConfig.businessName}`,
    description:
      "Luxueuze manicure en nagelverzorging uit Brasschaat. Premium behandelingen met de beste producten.",
    url: `${siteConfig.url}/manicure`,
    type: "website",
  },
};
