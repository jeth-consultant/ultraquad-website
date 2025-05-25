import { FooterSection } from "@/types/footerTypes";

export const footerSections: FooterSection[] = [
  {
    title: "Designed for companies",
    content: `We are a team of passionate people whose goal is to improve everyone's life through disruptive products. 
    We build great products to solve your business problems. Our products are designed for small to individual, 
    medium size companies willing to optimize their performance.`,
  },
  {
    title: "Ultra Quad",
    content: [
      "250 MayFare Parklands Blvd, Westlands",
      "Nairobi Waiyaki way 20200",
      "Kenya",
    ],
  },
  {
    title: "Contact",
    content: "",
    icons: [
      { type: "phone", value: "+254 724-070-629" },
      { type: "email", value: "hello@ultraquad.com" },
      { type: "social", value: "github" },
      { type: "social", value: "x" },
      { type: "social", value: "instagram" },
      { type: "social", value: "linkedin" },
    ],
  },
];