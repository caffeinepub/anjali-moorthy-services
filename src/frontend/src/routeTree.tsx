import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: GalleryPage,
});

export const routeTree = rootRoute.addChildren([
  servicesRoute,
  aboutRoute,
  galleryRoute,
]);
