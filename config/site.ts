export const SITE_INFO = {
  name: "Srujan Mattur",
  url: process.env.APP_URL || "http://localhost:3000",
  description: "Your professional bio",
  keywords: ["Portfolio", "Developer", "Srujan Mattur"],
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export type NavItem = {
  title: string;
  href: string;
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];
