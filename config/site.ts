export const SITE_INFO = {
  name: "Your Name",
  url: process.env.APP_URL || "http://localhost:3000",
  description: "Your professional bio",
  keywords: ["Portfolio", "Developer", "Your Name"],
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
    href: "#projects",
  },
];
