import { useNavigate } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useScrollReveal } from "./ServicesPage";

const gold = "oklch(0.78 0.12 65)";
const dark = "oklch(0.1 0.005 250)";
const cardBg = "oklch(0.14 0.008 260)";
const cardBorder = "oklch(0.25 0.02 260)";

const timeline = [
  {
    year: "2010",
    title: "First Steps in Bharatanatyam",
    desc: "Began formal training in the classical South Indian dance form under Guru Lalitha Raghunathan in Chennai, discovering a lifelong passion.",
  },
  {
    year: "2014",
    title: "First Major Stage Performance",
    desc: "Delivered a solo Arangetram at the prestigious Music Academy in Chennai \u2014 a transformative debut that earned standing ovations.",
  },
  {
    year: "2017",
    title: "Directed Debut Short Film \u2018Raga\u2019",
    desc: "\u2018Raga\u2019 screened at three international film festivals, blending classical movement with cinematic language in an unprecedented way.",
  },
  {
    year: "2020",
    title: "International Dance Residency, Berlin",
    desc: "Selected for a prestigious 6-month residency at the Tanzfabrik Berlin, merging classical Indian forms with European contemporary dance.",
  },
  {
    year: "2024",
    title: "Founded Her Creative Studio",
    desc: "Launched her independent creative studio \u2014 a home for choreography, filmmaking, and artistic collaboration at the highest level.",
  },
];

const philosophyPillars = [
  {
    title: "Movement is Memory",
    desc: "Every gesture holds the weight of generations \u2014 dance is how culture breathes across time.",
  },
  {
    title: "Cinema is Emotion",
    desc: "A film is not what you see. It is what you feel long after the screen goes dark.",
  },
  {
    title: "Art is Truth",
    desc: "The most powerful work strips away pretense and reveals the raw, unedited human experience.",
  },
];

const danceSkills = [
  "Bharatanatyam",
  "Contemporary",
  "Fusion",
  "Kathak",
  "Kuchipudi",
  "Jazz",
];
const filmSkills = [
  "Direction",
  "Cinematography",
  "Editing",
  "Dance Films",
  "Screenwriting",
  "Visual Storytelling",
];

export default function AboutPage() {
  useScrollReveal();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("grain");
    window.scrollTo(0, 0);
    return () => document.body.classList.remove("grain");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isAboutPage />

      {/* \u2500\u2500 HERO \u2500\u2500 */}
      <section
        data-ocid="about.hero.section"
        className="relative flex flex-col items-end justify-end px-8 md:px-16 pb-20"
        style={{ minHeight: "100svh" }}
      >
        <img
          src="/assets/generated/about-hero-portrait.dim_1600x900.jpg"
          alt="Anjali Moorthy \u2014 Artist Portrait"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.06 0.005 250 / 0.97) 0%, oklch(0.06 0.005 250 / 0.7) 50%, transparent 100%)",
            zIndex: 1,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.06 0.005 250) 0%, transparent 50%)",
            zIndex: 1,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 20% 60%, oklch(0.18 0.06 65 / 0.25) 0%, transparent 70%)",
            zIndex: 2,
          }}
        />

        <div
          className="relative max-w-2xl flex flex-col gap-5"
          style={{ zIndex: 3 }}
        >
          <span
            className="animate-fade-in text-xs tracking-[0.45em] uppercase"
            style={{ color: gold, animationDelay: "0.1s" }}
          >
            About Anjali
          </span>
          <h1 className="font-display">
            <span
              className="animate-fade-up block text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground leading-tight"
              style={{ animationDelay: "0.3s" }}
            >
              The Artist
            </span>
            <span
              className="animate-fade-up block text-5xl sm:text-6xl md:text-7xl font-semibold italic leading-tight"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="gold-text">Behind the Art</span>
            </span>
          </h1>
          <p
            className="animate-fade-in text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed"
            style={{ animationDelay: "0.8s" }}
          >
            A choreographer who directs. A filmmaker who dances. Two disciplines
            united by one unwavering commitment \u2014 to move people.
          </p>
          <div
            className="animate-fade-in h-px w-20"
            style={{ background: gold, animationDelay: "1s" }}
          />
        </div>
      </section>

      {/* \u2500\u2500 STORY / BIOGRAPHY \u2500\u2500 */}
      <section
        data-ocid="about.story.section"
        className="py-28 px-6 md:px-16"
        style={{ background: "oklch(0.11 0.006 255)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">
          <div className="md:col-span-2 reveal reveal-left">
            <div
              className="relative pl-6 py-2"
              style={{ borderLeft: `3px solid ${gold}` }}
            >
              <p className="font-display italic text-2xl md:text-3xl leading-snug text-foreground">
                &ldquo;Dance taught me to feel. Cinema taught me to see.
                Together, they taught me to tell the truth.&rdquo;
              </p>
              <p
                className="mt-5 text-sm tracking-[0.3em] uppercase"
                style={{ color: gold }}
              >
                \u2014 Anjali Moorthy
              </p>
            </div>
          </div>

          <div className="md:col-span-3 reveal reveal-right">
            <span
              className="text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: gold }}
            >
              Her Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              A Life in Motion
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Anjali Moorthy is an award-winning Indian choreographer and
                filmmaker who weaves classical dance traditions with
                contemporary storytelling. Born in Chennai with an innate love
                for movement, she began her journey in Bharatanatyam at age
                seven \u2014 drawn not just to the technique, but to the stories
                the form could tell.
              </p>
              <p>
                After years of rigorous classical training, Anjali encountered
                the camera and found a second language. She discovered that
                cinema and dance share the same heart \u2014 both are about the
                body in time, about emotion given form, about the invisible made
                visible.
              </p>
              <p>
                Today, she is recognized internationally for her unique ability
                to inhabit both disciplines simultaneously. Her work has been
                performed across three continents, screened at film festivals
                from Chennai to Berlin, and has touched audiences who had never
                seen classical dance translated into such viscerally cinematic
                language.
              </p>
              <p>
                Her studio is a space where movement and image converge \u2014
                where choreography becomes cinema and cinema becomes movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 PHILOSOPHY \u2500\u2500 */}
      <section
        data-ocid="about.philosophy.section"
        className="py-24 px-6 md:px-16"
        style={{ background: dark }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: gold }}
            >
              Creative Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-foreground">
              What She Believes
            </h2>
            <div
              className="mx-auto mt-5 h-px w-24"
              style={{ background: gold }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                data-ocid={`about.philosophy.card.${i + 1}`}
                className="reveal service-card flex flex-col gap-4 p-8 rounded-2xl"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  transitionDelay: `${i * 0.12}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{
                    background: "oklch(0.78 0.12 65 / 0.12)",
                    color: gold,
                    border: "1px solid oklch(0.78 0.12 65 / 0.3)",
                  }}
                >
                  {String.fromCharCode(8544 + i)}
                </div>
                <h3 className="font-display text-xl font-semibold italic text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 CAREER TIMELINE \u2500\u2500 */}
      <section
        data-ocid="about.timeline.section"
        className="py-28 px-6 md:px-16"
        style={{ background: "oklch(0.13 0.007 255)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: gold }}
            >
              The Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-foreground">
              Milestones
            </h2>
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
            <div className="flex flex-col gap-14">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={item.year}
                    data-ocid={`about.timeline.item.${i + 1}`}
                    className={`reveal flex flex-col md:flex-row items-center gap-6 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    <div
                      className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}
                    >
                      <p
                        className="font-display text-xs tracking-widest mb-2"
                        style={{ color: "oklch(0.78 0.12 65 / 0.6)" }}
                      >
                        {item.year}
                      </p>
                      <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div
                      className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display text-xs font-bold z-10 tracking-wider"
                      style={{
                        background: gold,
                        color: dark,
                        boxShadow: "0 0 28px oklch(0.78 0.12 65 / 0.45)",
                      }}
                    >
                      {item.year}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 SKILLS & EXPERTISE \u2500\u2500 */}
      <section
        data-ocid="about.skills.section"
        className="py-24 px-6 md:px-16"
        style={{ background: "oklch(0.11 0.006 255)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span
              className="text-xs tracking-[0.4em] uppercase"
              style={{ color: gold }}
            >
              Expertise
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 text-foreground">
              Skills &amp; Mastery
            </h2>
            <div
              className="mx-auto mt-5 h-px w-24"
              style={{ background: gold }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="reveal reveal-left">
              <div
                className="flex items-center gap-3 mb-6 pb-4"
                style={{ borderBottom: `1px solid ${cardBorder}` }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.78 0.12 65 / 0.15)",
                    border: "1px solid oklch(0.78 0.12 65 / 0.3)",
                  }}
                >
                  <span
                    style={{
                      color: gold,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                    }}
                  >
                    \u2726
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Dance Styles
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {danceSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm tracking-wide"
                    style={{
                      background: "oklch(0.78 0.12 65 / 0.1)",
                      border: "1px solid oklch(0.78 0.12 65 / 0.35)",
                      color: gold,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal reveal-right">
              <div
                className="flex items-center gap-3 mb-6 pb-4"
                style={{ borderBottom: `1px solid ${cardBorder}` }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.78 0.12 65 / 0.15)",
                    border: "1px solid oklch(0.78 0.12 65 / 0.3)",
                  }}
                >
                  <span
                    style={{
                      color: gold,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                    }}
                  >
                    \u25c8
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Filmmaking
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {filmSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm tracking-wide"
                    style={{
                      background: "oklch(0.14 0.008 260)",
                      border: `1px solid ${cardBorder}`,
                      color: "oklch(0.75 0.01 80)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 CTA \u2500\u2500 */}
      <section
        data-ocid="about.cta.section"
        className="py-28 px-6 md:px-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.015 65 / 0.9) 0%, oklch(0.1 0.005 250) 60%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="reveal">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight">
              Ready to Create
            </h2>
            <h2 className="font-display text-3xl md:text-5xl font-semibold italic leading-tight mt-1">
              <span className="gold-text">Something Together?</span>
            </h2>
          </div>
          <p
            className="reveal text-muted-foreground mt-6 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
            style={{ transitionDelay: "0.1s" }}
          >
            Every great collaboration begins with a single conversation.
          </p>
          <div
            className="reveal flex flex-col sm:flex-row gap-4 justify-center mt-10"
            style={{ transitionDelay: "0.2s" }}
          >
            <button
              type="button"
              data-ocid="about.cta.services.button"
              onClick={() => navigate({ to: "/" })}
              className="cta-btn-primary px-10 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase"
              style={{ background: gold, color: dark }}
            >
              View Services
            </button>
            <button
              type="button"
              data-ocid="about.cta.contact.button"
              className="px-10 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase transition-colors duration-200 hover:text-foreground"
              style={{
                border: "1px solid oklch(0.78 0.12 65 / 0.5)",
                color: gold,
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 FOOTER \u2500\u2500 */}
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
              {[
                { label: "Home", action: () => navigate({ to: "/" }) },
                { label: "About", action: () => navigate({ to: "/about" }) },
              ].map(({ label, action }) => (
                <button
                  type="button"
                  key={label}
                  onClick={action}
                  className="nav-link text-muted-foreground hover:text-foreground text-xs"
                >
                  {label}
                </button>
              ))}
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
