import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Disc3 } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
const nav = [
  { to: "/", label: "Inicio" },
  { to: "/historia", label: "Historia" },
  { to: "/albumes", label: "Álbumes" },
];

export function Shell() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <header className="site-header">
        <div className="container nav-bar">
          <Link to="/" className="brand" aria-label="Cerativerse, ir a inicio">
            <Disc3 size={27} aria-hidden="true" />
            CERATI<span>VERSE</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="site-nav"
            className={`nav-links ${open ? "open" : ""}`}
            aria-label="Navegación principal"
          >
            {nav.map((v) => (
              <NavLink
                key={v.to}
                to={v.to}
                end={v.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {v.label}
              </NavLink>
            ))}
            <Link
              to="/albumes"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              Explorar <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      </header>
      <main id="contenido">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <Link to="/" className="brand footer-brand">
              <Disc3 size={24} />
              CERATI<span>VERSE</span>
            </Link>
            <p>Archivo visual de homenaje, creado de forma independiente.</p>
          </div>
          <nav aria-label="Pie de página">
            <Link to="/historia">Historia</Link>
            <Link to="/albumes">Discografía</Link>
          </nav>
        </div>
        <div className="container footer-end">
          <small>
            Proyecto de fans no oficial. Sin afiliación con el artista, sus
            herederos o discográficas.
          </small>
          <small>
            © {new Date().getFullYear()} Cerativerse · Demostración web
          </small>
        </div>
      </footer>
    </>
  );
}
