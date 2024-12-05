import { Building, Club, Members } from "../assets";
import { Aclub, Amember, Apayment,Abooking } from "../assets";

const NavbarLinks = [
  {
    linkName: "Home",
    route: "#home",
  },
  {
    linkName: "Features",
    route: "#features",
  },
  {
    linkName: "Community",
    route: "#community",
  },
  {
    linkName: "Blog",
    route: "#blog",
  },
  {
    linkName: "Pricing",
    route: "#pricing",
  },
];
const footerLinks = [
  {
    linkName: "Home",
    route: "#",
  },
  {
    linkName: "Features",
    route: "#features",
  },
  {
    linkName: "Community",
    route: "#community",
  },
  {
    linkName: "Blog",
    route: "#blog",
  },
  {
    linkName: "Pricing",
    route: "#pricing",
  },
  {
    linkName: "Help",
    route: "#help",
  },
  {
    linkName: "Feedback",
    route: "#feedback",
  },
  {
    linkName: "Privacy",
    route: "#privacy",
  },
  {
    linkName: "Terms",
    route: "#terms",
  },
  {
    linkName: "About",
    route: "#about",
  },
];

const cCard = [
  {
    icon: Members,
    title: "Membership Organisations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Building,
    title: "National Associations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Club,
    title: "Clubs and Groups",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const Achievements = [
  {
    icon: Amember,
    no: "2,245,341",
    title: "members",
  },
  {
    icon: Abooking,
    no: "828,867",
    title: "Event Booking",
  },
  {
    icon: Aclub,
    no: "46,328",
    title: "Clubs",
  },
  {
    icon: Apayment,
    no: "1,926,436",
    title: "Payments",
  },
];

export { NavbarLinks, footerLinks, cCard, Achievements };
