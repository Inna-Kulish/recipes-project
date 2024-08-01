import { RoutePages } from "../../routes/RoutePages";

export enum SectionIds {
  blog = 'blog',
  contact = 'contact',
  about = 'about',
}

interface NavItem {
  title: string;
  navLink?: RoutePages;
  sectionId?: SectionIds;
}

export const NAV_LINKS: NavItem[] = [
  {
    title: "Home",
    navLink: RoutePages.Home,
  },
  {
    title: "Recipes",
    navLink: RoutePages.Recipes,
  },
  {
    title: "Blog",
    sectionId: SectionIds.blog,
  },
  {
    title: "Contact",
    sectionId: SectionIds.contact,
  },
  {
    title: "About us",
    sectionId: SectionIds.about,
  },
];
