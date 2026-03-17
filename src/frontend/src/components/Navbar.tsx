import { useNavigate, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const cardBorder = "oklch(0.25 0.02 260)";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "My Work", id: "work" },
  { label: "Gallery", id: "gallery" },
];

interface NavbarProps {
  /** If true, clicking hash links will navigate to / first */
  isAboutPage?: boolean;
}

export default function Navbar({ isAboutPage = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const router = useRouter();

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    if (id === "about") {
      navigate({ to: "/about" });
      return;
    }
    if (id === "gallery") {
      navigate({ to: "/gallery" });
      return;
    }
    const isOnHome = router.state.location.pathname === "/";
    if (isAboutPage || !isOnHome) {
      navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: "oklch(0.1 0.005 250 / 0.85)",
          borderBottom: `1px solid ${cardBorder}`,
        }}
      >
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="font-display italic text-lg md:text-xl select-none"
        >
          <span className="gold-text">Anjali Moorthy</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, id }) => (
            <button
              type="button"
              key={id}
              data-ocid={`nav.${id}.link`}
              onClick={() => handleNavClick(id)}
              className="nav-link text-muted-foreground hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          data-ocid="nav.menu.toggle"
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{
            background: "oklch(0.1 0.005 250 / 0.97)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map(({ label, id }) => (
            <button
              type="button"
              key={id}
              data-ocid={`nav.mobile.${id}.link`}
              onClick={() => handleNavClick(id)}
              className="font-display italic text-2xl gold-text"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
