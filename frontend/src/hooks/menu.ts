import AnimatedCookingPot from "@/components/icons/cookingPot";
import {
  Building2Icon,
  CarrotIcon,
  DropletsIcon,
  HomeIcon,
  LogsIcon,
  SettingsIcon,
  Share2Icon,
  StretchHorizontal,
  TagIcon,
  UsersIcon,
} from "lucide-react";

export const menuItems = () => {
  return [
    {
      groupName: "Menu",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: HomeIcon,
        },
        {
          title: "Products",
          url: "/products",
          icon: StretchHorizontal,
        },
        {
          title: "Recipes",
          url: "/recipes",
          icon: AnimatedCookingPot,
        },
        {
          title: "Ingredients",
          url: "/ingredients",
          icon: CarrotIcon,
        },
        {
          title: "Categories",
          url: "/categories",
          icon: TagIcon,
        },
      ],
    },
    {
      groupName: "Restaurants",
      items: [
        {
          title: "Settings",
          url: "/settings",
          icon: Building2Icon,
        },
        {
          title: "Sales channels",
          url: "/sales-channels",
          icon: Share2Icon,
        },
        {
          title: "People",
          url: "/people",
          icon: UsersIcon,
        },
      ],
    },
    {
      groupName: "System",
      items: [
        {
          title: "Settings",
          url: "#",
          icon: SettingsIcon,
        },
        {
          title: "Appearance",
          url: "#",
          icon: DropletsIcon,
        },
        {
          title: "Users",
          url: "#",
          icon: UsersIcon,
        },
        {
          title: "Logs",
          url: "/logs",
          icon: LogsIcon,
        },
      ],
    },
  ];
};

export const protectedRoutes = menuItems()
  .map((item) =>
    item.items.filter((x) => x.url !== "#").map((subItem) => subItem.url)
  )
  .flat();
