export type MenuItems = {
  label: string;
  path: `${string}`;
};

export const adminMenu: MenuItems[] = [
  {
    label: "Project",
    path: "project",
  },
  {
    label: "User",
    path: "user",
  },
  {
    label: "ALL Order",
    path: "all-order",
  },
];
export const userMenu: MenuItems[] = [
  {
    label: "Order",
    path: "order",
  },
  {
    label: "Settings",
    path: "settings",
  },
];
