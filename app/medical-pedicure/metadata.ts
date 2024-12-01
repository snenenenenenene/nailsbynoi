// app/medical-pedicure/metadata.ts
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Pedicure | Professionele Voetverzorging",
  description:
    "Specialistische medische pedicure in Brasschaat. Professionele voetverzorging met aandacht voor uw gezondheid en comfort.",
  keywords: [
    "medical pedicure",
    "medische voetverzorging",
    "pedicure Brasschaat",
    "voetbehandeling",
    "voetproblemen",
    "professionele pedicure",
    "gespecialiseerde voetverzorging",
    "pedicure salon Brasschaat",
  ],
  openGraph: {
    title: `Medical Pedicure | ${siteConfig.businessName}`,
    description:
      "Specialistische medische pedicure in Brasschaat. Professionele voetverzorging met aandacht voor uw gezondheid.",
    url: `${siteConfig.url}/medical-pedicure`,
    type: "website",
  },
};
