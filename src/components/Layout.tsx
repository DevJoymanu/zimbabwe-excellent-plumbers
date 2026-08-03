import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageMeta from "./PageMeta";

/** Client-side navigation keeps scroll position; each route should start at the top. */
function ScrollToTop() {
  const { pathname } = useLocation();
  // The braces are load-bearing. Written as a concise arrow body, this
  // returned window.scrollTo's result — and because index.css sets
  // `scroll-behavior: smooth`, current Chrome makes that a Promise, not
  // undefined. React took the Promise for a cleanup function and threw
  // "destroy is not a function" on the next route change, blanking every page
  // reached by clicking a link. Never let an effect implicitly return.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <PageMeta />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
