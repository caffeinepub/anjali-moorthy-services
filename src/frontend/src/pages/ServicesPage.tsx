import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );

    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    for (const el of targets) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}

// ─── Dance SVG Icon ───────────────────────────────────────────────────────────
function DanceIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="8"
        r="4"
        stroke="oklch(0.78 0.12 65)"
        strokeWidth="1.5"
      />
      <path
        d="M20 16c-2 2-4 6-3 10l2 8M28 16c2 2 4 6 3 10l-2 8"
        stroke="oklch(0.78 0.12 65)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 26l-5 6M31 26l5 6M22 34l-3 8M26 34l3 8"
        stroke="oklch(0.78 0.12 65)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 22c2-1 6-2 12 0"
        stroke="oklch(0.78 0.12 65)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Film SVG Icon ────────────────────────────────────────────────────────────
function FilmIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="10"
        width="36"
        height="28"
        rx="3"
        stroke="oklch(0.78 0.12 65)"
        strokeWidth="1.5"
      />
      <rect
        x="6"
        y="16"
        width="36"
        height="2"
        fill="oklch(0.78 0.12 65)"
        opacity="0.5"
      />
      <rect
        x="6"
        y="30"
        width="36"
        height="2"
        fill="oklch(0.78 0.12 65)"
        opacity="0.5"
      />
      <rect
        x="10"
        y="10"
        width="2"
        height="6"
        rx="1"
        fill="oklch(0.78 0.12 65)"
      />
      <rect
        x="18"
        y="10"
        width="2"
        height="6"
        rx="1"
        fill="oklch(0.78 0.12 65)"
      />
      <rect
        x="26"
        y="10"
        width="2"
        height="6"
        rx="1"
        fill="oklch(0.78 0.12 65)"
      />
      <rect
        x="34"
        y="10"
        width="2"
        height="6"
        rx="1"
        fill="oklch(0.78 0.12 65)"
      />
      <rect
        x="10"
        y="32"
        width="2"
        height="6"
        rx="1"
        fill="oklch(0.78 0.12 65)"
      />
      <rect
        x="18"
        y="32"
        width="2"
        height="6"
        rx="1"
        fill="oklch(0.78 0.12 65)"
      />
      <rect
        x="26"
        y="32"
        width="2"
        height="6"
        rx="1"
        fill="oklch(0.78 0.12 65)"
      />
      <rect
        x="34"
        y="32"
        width="2"
        height="6"
        rx="1"
        fill="oklch(0.78 0.12 65)"
      />
      <path
        d="M20 20l8 4-8 4V20z"
        stroke="oklch(0.78 0.12 65)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const choreoServices = [
  {
    num: "01",
    title: "Stage Performances",
    desc: "Commanding live productions that fuse classical heritage with contemporary power. From intimate recitals to grand theatrical spectacles.",
  },
  {
    num: "02",
    title: "Wedding Choreography",
    desc: "Bespoke choreography crafted for your most sacred moments. Intimate, emotional, unforgettable.",
  },
  {
    num: "03",
    title: "Music Video Choreography",
    desc: "High-energy visual storytelling that amplifies the music and electrifies the frame.",
  },
  {
    num: "04",
    title: "Dance Workshops",
    desc: "Transformative masterclasses that unlock movement potential for all levels and styles.",
  },
];

const filmServices = [
  {
    num: "01",
    title: "Short Films",
    desc: "Cinematic narratives compressed into pure emotion — every second crafted with intent.",
  },
  {
    num: "02",
    title: "Music Videos",
    desc: "Visual poetry synced to sound — collaborations that define artists' visual identity.",
  },
  {
    num: "03",
    title: "Dance Films",
    desc: "The intersection of movement and cinema — dance captured with cinematic precision.",
  },
  {
    num: "04",
    title: "Documentary & Event",
    desc: "Authentic storytelling and live event coverage that preserves moments in their rawest truth.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We begin with a conversation — understanding your vision, your story, your soul.",
  },
  {
    step: "02",
    title: "Concept & Design",
    desc: "Ideas take shape as we craft a unique creative blueprint tailored to your goals.",
  },
  {
    step: "03",
    title: "Rehearsal & Pre-Production",
    desc: "Rigorous preparation ensuring every movement and every shot is choreographed to perfection.",
  },
  {
    step: "04",
    title: "Performance & Production",
    desc: "The magic unfolds — live direction, precision execution, and pure creative energy.",
  },
  {
    step: "05",
    title: "Delivery & Legacy",
    desc: "Final polish, professional delivery, and a timeless work you'll treasure forever.",
  },
];

const testimonials = [
  {
    quote:
      "Anjali doesn\u2019t just choreograph movement \u2014 she choreographs feeling. Watching her work is like watching someone paint with the human body.",
    author: "Priya Krishnamurthy",
    role: "Director",
    avatar: "/assets/generated/testimonial-priya.dim_200x200.jpg",
  },
  {
    quote:
      "Her films have a rare quality \u2014 they move you without words. Pure visual poetry.",
    author: "Rahul Mehta",
    role: "Producer",
    avatar: "/assets/generated/testimonial-rahul.dim_200x200.jpg",
  },
  {
    quote:
      "Training with Anjali transformed not just my technique, but my entire relationship with movement and expression.",
    author: "Meera Sundaram",
    role: "Dancer & Performer",
    avatar: "/assets/generated/testimonial-meera.dim_200x200.jpg",
  },
];

// ─── Color shorthands ─────────────────────────────────────────────────────────
const gold = "oklch(0.78 0.12 65)";
const dark = "oklch(0.1 0.005 250)";
const cardBg = "oklch(0.14 0.008 260)";
const cardBorder = "oklch(0.25 0.02 260)";

// ─── Testimonial Slider ───────────────────────────────────────────────────────
function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 400);
    },
    [animating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, next]);

  const t = testimonials[current];

  const slideStyle: React.CSSProperties = {
    transition: "opacity 0.4s ease, transform 0.4s ease",
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "next" ? "-30px" : "30px"})`
      : "translateX(0)",
  };

  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-24 px-6 md:px-12"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 50% 50%, oklch(0.15 0.02 65 / 0.3) 0%, oklch(0.1 0.005 250) 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: gold }}
          >
            Kind Words
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-foreground">
            What They Say
          </h2>
          <div
            className="mx-auto mt-5 h-px w-24"
            style={{ background: gold }}
          />
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            boxShadow: "0 8px 48px oklch(0.78 0.12 65 / 0.08)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute top-0 left-6 font-display leading-none select-none pointer-events-none"
            style={{
              fontSize: "10rem",
              color: "oklch(0.78 0.12 65 / 0.15)",
              lineHeight: 1,
            }}
          >
            &ldquo;
          </div>

          <div
            className="relative z-10 px-8 md:px-16 pt-16 pb-12"
            style={slideStyle}
          >
            <blockquote className="font-display italic text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground text-center">
              {t.quote}
            </blockquote>

            <div className="flex flex-col items-center mt-10 gap-3">
              <div
                className="w-16 h-16 rounded-full overflow-hidden"
                style={{ border: `2px solid ${gold}` }}
              >
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-sans font-semibold text-sm tracking-wide text-foreground">
                  {t.author}
                </p>
                <p
                  className="font-sans text-xs tracking-widest uppercase mt-0.5"
                  style={{ color: "oklch(0.78 0.12 65 / 0.7)" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            data-ocid="testimonials.prev.button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: "oklch(0.2 0.01 260)",
              border: `1px solid ${cardBorder}`,
              color: gold,
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            data-ocid="testimonials.next.button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: "oklch(0.2 0.01 260)",
              border: `1px solid ${cardBorder}`,
              color: gold,
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={testimonials[i].author}
              type="button"
              data-ocid={`testimonials.dot.${i + 1}`}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to testimonial ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "0.5rem",
                borderRadius: "9999px",
                background: i === current ? gold : "oklch(0.78 0.12 65 / 0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Page ────────────────────────────────────────────────────────────
export default function ServicesPage() {
  useScrollReveal();

  useEffect(() => {
    document.body.classList.add("grain");
    return () => document.body.classList.remove("grain");
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100svh" }}
      >
        <img
          src="/assets/generated/hero-bg.dim_1600x900.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "oklch(0.08 0.005 250 / 0.75)", zIndex: 1 }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, oklch(0.18 0.06 65 / 0.35) 0%, transparent 70%)",
            zIndex: 2,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/3 h-px opacity-10"
          style={{ background: gold, zIndex: 2 }}
        />

        <div
          className="relative max-w-4xl mx-auto flex flex-col items-center gap-6"
          style={{ zIndex: 3 }}
        >
          <span
            className="animate-fade-in text-xs tracking-[0.4em] uppercase"
            style={{ color: gold, animationDelay: "0s" }}
          >
            Services
          </span>

          <h1 className="font-display">
            <span
              className="animate-fade-up block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight"
              style={{ animationDelay: "0.3s" }}
            >
              The Art of
            </span>
            <span
              className="animate-fade-up block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic leading-tight"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="gold-text">Movement &amp; Vision</span>
            </span>
          </h1>

          <p
            className="animate-fade-in text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
            style={{ animationDelay: "0.8s" }}
          >
            Where choreography meets cinema — every frame tells a story, every
            step ignites a soul.
          </p>

          <div
            className="animate-fade-in flex gap-3 flex-wrap justify-center"
            style={{ animationDelay: "1s" }}
          >
            {["Choreography", "Filmmaking"].map((label) => (
              <span
                key={label}
                className="px-5 py-1.5 rounded-full text-sm tracking-widest uppercase"
                style={{
                  border: "1px solid oklch(0.78 0.12 65 / 0.5)",
                  color: gold,
                  background: "oklch(0.78 0.12 65 / 0.08)",
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <button
            type="button"
            data-ocid="hero.cta.button"
            className="animate-fade-in cta-btn-primary mt-2 px-8 py-3 rounded-full font-sans font-medium text-sm tracking-widest uppercase"
            style={{ animationDelay: "1.2s", background: gold, color: dark }}
            onClick={() => scrollTo("services")}
          >
            Explore Services
          </button>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow"
          style={{ color: "oklch(0.78 0.12 65 / 0.5)", zIndex: 3 }}
          aria-hidden="true"
        >
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ── ABOUT VISUAL SECTION ── */}
      <section
        id="about"
        className="py-24 px-6 md:px-12"
        style={{ background: "oklch(0.11 0.006 255)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: gold }}
            >
              The Disciplines
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-foreground">
              Two Worlds, One Vision
            </h2>
            <div
              className="mx-auto mt-5 h-px w-24"
              style={{ background: gold }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              data-ocid="about.dance.card"
              className="reveal reveal-left relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                border: "1px solid oklch(0.25 0.02 260)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = gold;
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 32px oklch(0.78 0.12 65 / 0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.25 0.02 260)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/generated/about-dance.dim_800x600.jpg"
                  alt="Choreography — Anjali Moorthy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-5"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.08 0.005 250 / 0.95) 0%, transparent 100%)",
                }}
              >
                <p
                  className="font-display text-2xl font-semibold italic"
                  style={{ color: gold }}
                >
                  Choreography
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Movement as language — emotion as architecture
                </p>
              </div>
            </div>

            <div
              data-ocid="about.film.card"
              className="reveal reveal-right relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                border: "1px solid oklch(0.25 0.02 260)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                transitionDelay: "0.1s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = gold;
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 32px oklch(0.78 0.12 65 / 0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.25 0.02 260)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/generated/about-film.dim_800x600.jpg"
                  alt="Filmmaking — Anjali Moorthy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-5"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.08 0.005 250 / 0.95) 0%, transparent 100%)",
                }}
              >
                <p
                  className="font-display text-2xl font-semibold italic"
                  style={{ color: gold }}
                >
                  Filmmaking
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Every frame a brushstroke, every cut a revelation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: gold }}
          >
            What I Offer
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-foreground">
            Crafted with Intention
          </h2>
          <div
            className="mx-auto mt-5 h-px w-24"
            style={{ background: gold }}
          />
        </div>

        <div className="mb-20">
          <div
            className="reveal reveal-left flex flex-col md:flex-row items-center gap-6 mb-10 p-8 rounded-2xl"
            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
          >
            <div className="shrink-0">
              <DanceIcon />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Choreography
              </h3>
              <div
                className="mt-2 mb-3 h-px w-16"
                style={{ background: gold }}
              />
              <p className="text-muted-foreground text-base italic">
                Movement as language — emotion as architecture
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {choreoServices.map((s, i) => (
              <div
                key={s.title}
                data-ocid={`choreo.card.${i + 1}`}
                className="reveal service-card p-7 rounded-xl flex flex-col gap-4"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <span
                  className="font-display text-xs tracking-widest"
                  style={{ color: "oklch(0.78 0.12 65 / 0.6)" }}
                >
                  {s.num}
                </span>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {s.desc}
                </p>
                <button
                  type="button"
                  className="mt-2 self-start text-sm font-medium tracking-wide"
                  style={{ color: gold }}
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div
            className="reveal reveal-right flex flex-col md:flex-row items-center gap-6 mb-10 p-8 rounded-2xl"
            style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
          >
            <div className="shrink-0">
              <FilmIcon />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Filmmaking
              </h3>
              <div
                className="mt-2 mb-3 h-px w-16"
                style={{ background: gold }}
              />
              <p className="text-muted-foreground text-base italic">
                Every frame a brushstroke, every cut a revelation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filmServices.map((s, i) => (
              <div
                key={s.title}
                data-ocid={`film.card.${i + 1}`}
                className="reveal service-card p-7 rounded-xl flex flex-col gap-4"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <span
                  className="font-display text-xs tracking-widest"
                  style={{ color: "oklch(0.78 0.12 65 / 0.6)" }}
                >
                  {s.num}
                </span>
                <h4 className="font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {s.desc}
                </p>
                <button
                  type="button"
                  className="mt-2 self-start text-sm font-medium tracking-wide"
                  style={{ color: gold }}
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="process"
        className="py-24 px-6 md:px-12"
        style={{ background: "oklch(0.13 0.007 255)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: gold }}
            >
              How We Work
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-foreground">
              The Creative Process
            </h2>
            <p className="text-muted-foreground mt-4 text-base">
              From first conversation to final frame
            </p>
            <div
              className="mx-auto mt-5 h-px w-24"
              style={{ background: gold }}
            />
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "oklch(0.78 0.12 65 / 0.2)" }}
            />
            <div className="flex flex-col gap-12">
              {processSteps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={step.step}
                    data-ocid={`process.item.${i + 1}`}
                    className={`reveal flex flex-col md:flex-row items-center gap-6 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    <div
                      className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}
                    >
                      <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                    <div
                      className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-display text-sm font-bold z-10"
                      style={{
                        background: gold,
                        color: dark,
                        boxShadow: "0 0 24px oklch(0.78 0.12 65 / 0.4)",
                      }}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* ── CTA ── */}
      <section
        className="py-28 px-6 md:px-12 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.015 65 / 0.9) 0%, oklch(0.1 0.005 250) 60%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight">
              Ready to Create Something
            </h2>
            <h2 className="font-display text-3xl md:text-5xl font-semibold italic leading-tight mt-1">
              <span className="gold-text">Extraordinary?</span>
            </h2>
          </div>
          <p
            className="reveal text-muted-foreground mt-6 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
            style={{ transitionDelay: "0.1s" }}
          >
            Every great work begins with a single conversation. Let&rsquo;s
            start yours.
          </p>
          <div
            className="reveal flex flex-col sm:flex-row gap-4 justify-center mt-10"
            style={{ transitionDelay: "0.2s" }}
          >
            <button
              type="button"
              data-ocid="cta.contact.button"
              className="cta-btn-primary px-10 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase"
              style={{ background: gold, color: dark }}
            >
              Get in Touch
            </button>
            <button
              type="button"
              data-ocid="cta.work.button"
              className="px-10 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase transition-colors duration-200 hover:text-foreground"
              style={{
                border: "1px solid oklch(0.78 0.12 65 / 0.5)",
                color: gold,
              }}
            >
              View My Work
            </button>
          </div>
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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-5">
            <span className="font-display italic text-2xl gold-text">
              Anjali Moorthy
            </span>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
              Filmmaker &middot; Performer &middot; Choreographer
            </p>

            <nav className="flex flex-wrap gap-6 justify-center mt-2">
              {["Home", "About", "Services", "My Work", "Gallery"].map(
                (label) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() =>
                      scrollTo(label.toLowerCase().replace(" ", ""))
                    }
                    className="nav-link text-muted-foreground hover:text-foreground text-xs"
                  >
                    {label}
                  </button>
                ),
              )}
            </nav>

            <div className="flex gap-5 mt-2">
              {[
                {
                  href: "https://instagram.com",
                  Icon: Instagram,
                  ocid: "footer.instagram.link",
                  label: "Instagram",
                },
                {
                  href: "https://twitter.com",
                  Icon: Twitter,
                  ocid: "footer.twitter.link",
                  label: "Twitter",
                },
                {
                  href: "https://facebook.com",
                  Icon: Facebook,
                  ocid: "footer.facebook.link",
                  label: "Facebook",
                },
                {
                  href: "https://linkedin.com",
                  Icon: Linkedin,
                  ocid: "footer.linkedin.link",
                  label: "LinkedIn",
                },
                {
                  href: "https://youtube.com",
                  Icon: Youtube,
                  ocid: "footer.youtube.link",
                  label: "YouTube",
                },
              ].map(({ href, Icon, ocid, label }) => (
                <a
                  key={ocid}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={ocid}
                  aria-label={label}
                  className="transition-colors duration-200"
                  style={{ color: "oklch(0.6 0.02 80)" }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div
              className="w-full h-px mt-4"
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
        </div>
      </footer>
    </div>
  );
}
