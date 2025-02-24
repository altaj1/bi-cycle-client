export type MenuItems = {
  label: string;
  path: `/${string}`;
};

export const adminMenu: MenuItems[] = [
  {
    label: "Project",
    path: "/project",
  },
  {
    label: "User",
    path: "/user",
  },
];
