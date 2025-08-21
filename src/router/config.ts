const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/projects",
    exact: true,
    component: "Projects",
  },
  {
    path: "/event/:id",
    exact: true,
    component: "Event",
  },
  {
    path: "/verb",
    exact: true,
    component: "Verb",
  },
  {
    path: "/structure",
    exact: true,
    component: "Structure",
  },
];

export default routes;
