import { useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { useScrollReveal } from "./ServicesPage";

const gold = "oklch(0.78 0.12 65)";
const dark = "oklch(0.1 0.005 250)";
const cardBorder = "oklch(0.25 0.02 260)";

type Category = "All" | "Choreography" | "Filmmaking" | "Events";

interface GalleryItem {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
  aspect: "portrait" | "landscape" | "square";
}

const galleryItems: GalleryItem[] = [
  {
    src: "/assets/generated/gallery-dance-1.dim_800x1000.jpg",
    title: "Kuchipudi Elegance",
    category: "Choreography",
    aspect: "portrait",
  },
  {
    src: "/assets/generated/gallery-dance-2.dim_800x600.jpg",
    title: "Ensemble Performance",
    category: "Choreography",
    aspect: "landscape",
  },
  {
    src: "/assets/generated/gallery-dance-3.dim_800x800.jpg",
    title: "Bharatanatyam Spotlight",
    category: "Choreography",
    aspect: "square",
  },
  {
    src: "/assets/generated/gallery-film-1.dim_800x600.jpg",
    title: "On Set: The Vision",
    category: "Filmmaking",
    aspect: "landscape",
  },
  {
    src: "/assets/generated/gallery-film-2.dim_800x1000.jpg",
    title: "Director's Frame",
    category: "Filmmaking",
    aspect: "portrait",
  },
  {
    src: "/assets/generated/gallery-film-3.dim_800x600.jpg",
    title: "Night Shoot",
    category: "Filmmaking",
    aspect: "landscape",
  },
  {
    src: "/assets/generated/gallery-events-1.dim_800x600.jpg",
    title: "Workshop 2024",
    category: "Events",
    aspect: "landscape",
  },
  {
    src: "/assets/generated/gallery-events-2.dim_800x500.jpg",
    title: "Grand Gala Performance",
    category: "Events",
    aspect: "landscape",
  },
];

const categories: Category[] = ["All", "Choreography", "Filmmaking", "Events"];

export default function GalleryPage() {
  useScrollReveal();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.classList.add("grain");
    window.scrollTo(0, 0);
    return () => document.body.classList.remove("grain");
  }, []);

  const filtered = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory,
  );

  const openLightbox = (src: string) => {
    const globalIndex = galleryItems.findIndex((item) => item.src === src);
    setLightboxIndex(globalIndex);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const filteredItems =
        activeCategory === "All"
          ? galleryItems
          : galleryItems.filter((i) => i.category === activeCategory);
      const filteredIndex = filteredItems.findIndex(
        (i) => i.src === galleryItems[prev].src,
      );
      const nextFiltered = (filteredIndex + 1) % filteredItems.length;
      return galleryItems.findIndex(
        (i) => i.src === filteredItems[nextFiltered].src,
      );
    });
  }, [activeCategory]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const filteredItems =
        activeCategory === "All"
          ? galleryItems
          : galleryItems.filter((i) => i.category === activeCategory);
      const filteredIndex = filteredItems.findIndex(
        (i) => i.src === galleryItems[prev].src,
      );
      const prevFiltered =
        (filteredIndex - 1 + filteredItems.length) % filteredItems.length;
      return galleryItems.findIndex(
        (i) => i.src === filteredItems[prevFiltered].src,
      );
    });
  }, [activeCategory]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const currentItem =
    lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isAboutPage />

      {/* ── HERO ── */}
      <section
        data-ocid="gallery.hero.section"
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "60svh" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.07 0.005 250) 0%, oklch(0.13 0.015 65 / 0.4) 50%, oklch(0.1 0.005 250) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.2 0.06 65 / 0.2) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "oklch(0.78 0.12 65 / 0.2)" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-5 pt-28 pb-16">
          <span
            className="animate-fade-in text-xs tracking-[0.5em] uppercase"
            style={{ color: gold, animationDelay: "0.1s" }}
          >
            Portfolio
          </span>
          <h1 className="font-display">
            <span
              className="animate-fade-up block text-5xl sm:text-6xl md:text-8xl font-semibold italic leading-tight"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="gold-text">Gallery</span>
            </span>
          </h1>
          <p
            className="animate-fade-in text-muted-foreground text-base md:text-lg max-w-md leading-relaxed"
            style={{ animationDelay: "0.6s" }}
          >
            A visual journey through choreography, cinema, and the moments that
            define a craft.
          </p>
          <div
            className="animate-fade-in h-px w-16"
            style={{ background: gold, animationDelay: "0.9s" }}
          />
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section
        className="sticky top-16 z-30 py-5 px-6"
        style={{
          background: "oklch(0.1 0.005 250 / 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${cardBorder}`,
        }}
      >
        <div className="max-w-6xl mx-auto flex gap-2 sm:gap-3 overflow-x-auto pb-1 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              data-ocid="gallery.filter.tab"
              onClick={() => setActiveCategory(cat)}
              className="flex-shrink-0 px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat ? gold : "oklch(0.18 0.01 260 / 0.8)",
                color: activeCategory === cat ? dark : "oklch(0.65 0.02 80)",
                border:
                  activeCategory === cat
                    ? "1px solid transparent"
                    : `1px solid ${cardBorder}`,
                boxShadow:
                  activeCategory === cat
                    ? "0 0 20px oklch(0.78 0.12 65 / 0.3)"
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── MASONRY GRID ── */}
      <section
        data-ocid="gallery.list"
        className="py-16 px-6 md:px-12"
        style={{ background: "oklch(0.1 0.005 250)" }}
      >
        <div className="max-w-7xl mx-auto">
          <style>{`
            .gallery-masonry { columns: 2; column-gap: 1rem; }
            @media (min-width: 768px) { .gallery-masonry { columns: 3; } }
            @media (min-width: 1200px) { .gallery-masonry { columns: 4; } }
          `}</style>
          <div className="gallery-masonry">
            {filtered.map((item, i) => {
              const globalIndex = galleryItems.findIndex(
                (g) => g.src === item.src,
              );
              return (
                <GalleryCard
                  key={item.src}
                  item={item}
                  index={i}
                  ocid={`gallery.item.${globalIndex + 1}`}
                  onClick={() => openLightbox(item.src)}
                />
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div
              data-ocid="gallery.empty_state"
              className="text-center py-24 text-muted-foreground"
            >
              No items in this category.
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {currentItem && (
        <LightboxOverlay
          item={currentItem}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}

      {/* ── CTA ── */}
      <section
        data-ocid="gallery.cta.section"
        className="py-24 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.015 65 / 0.8) 0%, oklch(0.1 0.005 250) 60%)",
          borderTop: `1px solid ${cardBorder}`,
        }}
      >
        <div className="max-w-2xl mx-auto reveal">
          <span
            className="text-xs tracking-[0.4em] uppercase block mb-4"
            style={{ color: gold }}
          >
            Ready to Collaborate?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Like What You <span className="italic gold-text">See?</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed">
            Every image tells a story. Let&apos;s create yours together.
          </p>
          <button
            type="button"
            data-ocid="gallery.cta.primary_button"
            onClick={() => navigate({ to: "/" })}
            className="cta-btn-primary mt-10 inline-block px-10 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase"
            style={{ background: gold, color: dark }}
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-14 px-6 md:px-12"
        style={{
          background: "oklch(0.09 0.004 250)",
          borderTop: `1px solid ${cardBorder}`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-5">
          <span className="font-display italic text-2xl gold-text">
            Anjali Moorthy
          </span>
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            Filmmaker &middot; Performer &middot; Choreographer
          </p>
          <nav className="flex gap-6 justify-center">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="nav-link text-muted-foreground hover:text-foreground text-xs"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: "/about" })}
              className="nav-link text-muted-foreground hover:text-foreground text-xs"
            >
              About
            </button>
          </nav>
          <div
            className="w-full h-px mt-2"
            style={{ background: cardBorder }}
          />
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Anjali Moorthy. Built with{" "}
            <span style={{ color: gold }}>&#9829;</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// ── Lightbox Overlay ──
function LightboxOverlay({
  item,
  onClose,
  onNext,
  onPrev,
}: {
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div
      data-ocid="gallery.lightbox.modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "oklch(0.05 0.003 250 / 0.95)" }}
    >
      {/* Close */}
      <button
        type="button"
        data-ocid="gallery.lightbox.close_button"
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-200 hover:scale-110"
        style={{
          background: "oklch(0.18 0.01 260 / 0.9)",
          border: `1px solid ${cardBorder}`,
          color: "oklch(0.75 0.02 80)",
        }}
        aria-label="Close lightbox"
      >
        <X size={18} />
      </button>

      {/* Prev */}
      <button
        type="button"
        data-ocid="gallery.lightbox.pagination_prev"
        onClick={onPrev}
        className="absolute left-3 md:left-6 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-all duration-200 hover:scale-110"
        style={{
          background: "oklch(0.18 0.01 260 / 0.9)",
          border: `1px solid ${cardBorder}`,
          color: "oklch(0.75 0.02 80)",
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <div
        className="relative flex flex-col items-center gap-4 max-w-5xl w-full"
        style={{ maxHeight: "90svh" }}
      >
        <img
          src={item.src}
          alt={item.title}
          className="rounded-xl object-contain"
          style={{
            maxHeight: "80svh",
            maxWidth: "100%",
            boxShadow: "0 30px 80px oklch(0 0 0 / 0.8)",
          }}
        />
        <div className="text-center">
          <p className="font-display italic text-xl text-foreground">
            {item.title}
          </p>
          <p
            className="text-xs tracking-widest uppercase mt-1"
            style={{ color: gold }}
          >
            {item.category}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        type="button"
        data-ocid="gallery.lightbox.pagination_next"
        onClick={onNext}
        className="absolute right-3 md:right-6 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-all duration-200 hover:scale-110"
        style={{
          background: "oklch(0.18 0.01 260 / 0.9)",
          border: `1px solid ${cardBorder}`,
          color: "oklch(0.75 0.02 80)",
        }}
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

// ── Gallery Card ──
function GalleryCard({
  item,
  index,
  ocid,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  ocid: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      data-ocid={ocid}
      onClick={onClick}
      className="reveal group relative overflow-hidden rounded-xl cursor-pointer w-full text-left"
      style={{
        breakInside: "avoid",
        marginBottom: "1rem",
        transitionDelay: `${(index % 4) * 0.08}s`,
        border: "1px solid oklch(0.22 0.015 260)",
        background: "transparent",
        padding: 0,
        display: "block",
      }}
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-auto block group-hover:scale-105"
        style={{
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, oklch(0.08 0.005 250 / 0.92) 0%, oklch(0.08 0.005 250 / 0.4) 50%, transparent 100%)",
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <p className="font-display italic text-base text-foreground leading-snug">
          {item.title}
        </p>
        <p
          className="text-xs tracking-widest uppercase mt-1"
          style={{ color: "oklch(0.78 0.12 65)" }}
        >
          {item.category}
        </p>
      </div>
    </button>
  );
}
