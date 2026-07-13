import { Gallery } from "@/components/Gallery";
import { SkillsBreakdown } from "@/components/SkillsBreakdown";
import { CodMobile } from "@/components/CodMobile";
import { WritingWork } from "@/components/WritingWork";
import { WhyPMM } from "@/components/WhyPMM";
import { ViewPing } from "@/components/ViewPing";
import {
  profile,
  interests,
  creativeGallery,
  experience,
  involvement,
  companies,
  deliverables,
  education,
  skills,
} from "@/data/resume";

const stats = [
  { value: "$800M", label: "CoD: Mobile portfolio", sub: "cross-functional alignment" },
  { value: "16K+", label: "social followers grown", sub: "IG · FB · Twitter" },
  { value: "1,000+", label: "materials consolidated", sub: "onboarding hub" },
  { value: "4+", label: "domains marketed across", sub: "Procurement · Marketing Cloud · Gaming · Media" },
];

const nav = [
  { href: "#why-pmm", label: "Why PMM" },
  { href: "#work-samples", label: "Work" },
  { href: "#cod", label: "Case Study" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#skills", label: "Skills" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-24">
      <ViewPing />
      {/* NAV */}
      <header className="sticky top-0 z-50 -mx-5 mb-2 border-b border-plum/5 bg-background/70 px-5 py-3 backdrop-blur-xl">
        <nav className="flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-base font-extrabold tracking-tight text-plum"
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-grape to-pink-500 text-xs font-black text-white">
              SP
            </span>
            Shreya P
          </a>
          <ul className="hidden gap-6 text-sm font-semibold text-plum/70 sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-grape">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-plum px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Say hi 👋
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 pb-10 text-center sm:pt-24">
        <div className="animate-float mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-plum/70 shadow-sm ring-1 ring-plum/10">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to big
          ideas &amp; collabs
        </div>
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          <span className="animate-shimmer bg-gradient-to-r from-grape via-pink-500 to-orange-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-display text-lg font-semibold text-plum/80 sm:text-xl">
          {profile.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-plum/70">
          {profile.blurb}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {profile.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-plum/10 bg-white/60 px-3 py-1 text-sm font-semibold text-plum/70 shadow-sm"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work-samples"
            className="rounded-full bg-gradient-to-r from-grape to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-grape/20 transition hover:-translate-y-0.5"
          >
            See my work ↓
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#0a66c2] px-6 py-3 font-semibold text-white shadow-lg shadow-[#0a66c2]/20 transition hover:-translate-y-0.5"
          >
            in · LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-plum/15 bg-white/70 px-6 py-3 font-semibold text-plum/80 shadow-sm transition hover:-translate-y-0.5"
          >
            📍 {profile.location}
          </a>
        </div>

        {/* interests */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {interests.map((it) => (
            <span
              key={it.label}
              className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-plum/75 shadow-sm ring-1 ring-plum/5"
            >
              <span className="mr-1">{it.emoji}</span>
              {it.label}
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mt-10">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-plum/40">
          Impact at a glance
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-3xl bg-white p-5 text-left shadow-sm ring-1 ring-plum/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-grape to-pink-500" />
              <div className="font-display text-3xl font-extrabold text-grape">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-plum">{s.label}</div>
              <div className="mt-0.5 text-xs text-plum/50">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANIES */}
      <section className="mt-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-plum/40">
          What I&apos;ve worked on
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {companies.map((c) => (
            <span
              key={c.name}
              className="rounded-2xl border border-plum/10 bg-white px-4 py-2 text-sm font-bold text-plum/75 shadow-sm"
            >
              <span className="mr-1.5">{c.emoji}</span>
              {c.name}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        emoji="🌷"
        title="A little about me"
        tint="from-blush to-lilac"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <p className="text-base leading-relaxed text-plum/75">
            I&apos;m a builder at heart — I turn ambiguous business problems into
            products people actually love using. At Microsoft I rebuild legacy
            tools into modern AI-powered apps; at Activision I helped steer an
            $800M mobile gaming portfolio.
          </p>
          <p className="text-base leading-relaxed text-plum/75">
            My superpower is storytelling with data — pairing crisp positioning
            with dashboards, Copilot agents, and go-to-market plans. I think like
            a PMM: obsessed with the user, the narrative, and the launch. 🚀
          </p>
        </div>
      </Section>

      {/* WHY PMM */}
      <Section
        id="why-pmm"
        emoji="💡"
        title="Why I'm a product marketing fit"
        tint="from-grape to-pink-500"
        subtitle="Click a strength to see the receipts."
      >
        <WhyPMM />
      </Section>

      {/* NOTABLE DELIVERABLES */}
      <Section
        id="work-samples"
        emoji="📎"
        title="Notable deliverables"
        tint="from-blush to-peach"
        subtitle="A highlight reel of things I've built and shipped."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {deliverables.map((d) => (
            <article
              key={d.title}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-plum/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-grape to-pink-500 text-2xl shadow-sm">
                  {d.emoji}
                </span>
                <span className="rounded-full bg-plum/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-plum/60">
                  {d.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-plum">
                {d.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-plum/75">
                {d.text}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {d.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-lg bg-gradient-to-r from-grape/10 to-pink-500/10 px-2.5 py-1 text-xs font-semibold text-grape"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* COD MOBILE CASE STUDY */}
      <Section
        id="cod"
        emoji="🎯"
        title="Call of Duty: Mobile"
        tint="from-mint to-sky"
        subtitle="Go-to-market across China, Korea & Garena — from my Activision role."
      >
        <CodMobile />
      </Section>

      {/* WORK */}
      <Section
        id="experience"
        emoji="💼"
        title="Where I've made an impact"
        tint="from-sky to-lilac"
      >
        <div className="relative space-y-4 border-l-2 border-dashed border-plum/15 pl-5 sm:pl-7">
          {experience.map((job) => (
            <article
              key={job.role + job.dates}
              className="relative rounded-3xl bg-white/75 p-5 shadow-sm ring-1 ring-plum/5 transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <span className="absolute -left-[34px] top-6 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-lilac to-blush text-lg shadow-sm ring-4 ring-background sm:-left-[46px]">
                {job.emoji}
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-plum">
                  {job.company}
                </h3>
                <span className="rounded-full bg-plum/5 px-3 py-1 text-xs font-semibold text-plum/60">
                  {job.dates}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-grape">
                {job.role}
              </p>
              <p className="text-xs text-plum/50">{job.location}</p>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-plum/75"
                  >
                    <span className="mt-1 text-grape">✦</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* CAMPUS */}
      <Section
        id="campus"
        emoji="🎀"
        title="Campus & community"
        tint="from-peach to-blush"
        subtitle="Where I learned to lead — running finance, social, and events for MSU's biggest orgs."
      >
        <div className="space-y-4">
          {involvement.map((inv) => (
            <article
              key={inv.org}
              className={`rounded-3xl p-5 shadow-sm ring-1 sm:p-6 ${
                inv.featured
                  ? "bg-gradient-to-br from-white/90 to-lilac/30 ring-grape/15"
                  : "bg-white/70 ring-plum/5"
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-plum">
                  <span className="mr-2">{inv.emoji}</span>
                  {inv.org}
                  {inv.featured && (
                    <span className="ml-2 align-middle text-[10px] font-bold uppercase tracking-wider text-grape">
                      ★ featured
                    </span>
                  )}
                </h3>
                <span className="rounded-full bg-plum/5 px-3 py-1 text-xs font-semibold text-plum/60">
                  {inv.dates}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-grape">
                {inv.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-plum/75">
                {inv.blurb}
              </p>
              {inv.links && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {inv.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-r from-grape to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
              {inv.images && <Gallery images={inv.images} />}
            </article>
          ))}
        </div>
      </Section>

      {/* CREATIVE & SOCIAL GALLERY */}
      <Section
        id="creative"
        emoji="📸"
        title={creativeGallery.title}
        tint="from-blush to-lilac"
        subtitle={creativeGallery.subtitle}
      >
        <div className="columns-2 gap-3 sm:columns-3 [&>*]:mb-3">
          {creativeGallery.images.map((img) => (
            <figure
              key={img.src}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-[#1c1424] shadow-sm ring-1 ring-plum/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.caption}
                className="w-full transition duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs font-semibold text-white">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-plum/45">
          {creativeGallery.note}
        </p>
      </Section>

      {/* WRITING & HACKATHONS */}
      <Section
        id="writing"
        emoji="📝"
        title="Writing & hackathons"
        tint="from-peach to-lilac"
        subtitle="Published research and product-marketing hackathon wins."
      >
        <WritingWork />
      </Section>

      {/* EDUCATION */}
      <Section
        id="education"
        emoji="🎓"
        title="Education & honors"
        tint="from-mint to-sky"
      >
        <div className="rounded-3xl bg-white/75 p-5 shadow-sm ring-1 ring-plum/5 sm:p-6">
          <h3 className="font-display text-xl font-bold text-plum">
            {education.school}
          </h3>
          <p className="text-sm font-semibold text-grape">{education.college}</p>
          <p className="mt-1 text-sm text-plum/75">{education.degree}</p>
          <p className="text-xs text-plum/55">{education.concentration}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {education.honors.map((h) => (
              <span
                key={h}
                className="rounded-full border border-plum/10 bg-plum/[0.03] px-3 py-1 text-xs font-semibold text-plum/75 shadow-sm"
              >
                🏆 {h}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" emoji="🧩" title="How my skillset splits" tint="from-lilac to-sky">
        <SkillsBreakdown />
        <details className="group mt-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-plum/5">
          <summary className="cursor-pointer list-none font-display text-sm font-bold text-grape">
            + See the full toolkit
          </summary>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="font-display text-xs font-bold uppercase tracking-wider text-plum/50">
                  {group}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg bg-plum/5 px-2.5 py-1 text-xs font-semibold text-plum/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      </Section>

      {/* FOOTER */}
      <footer className="mt-16 rounded-[2rem] bg-gradient-to-br from-grape to-pink-500 p-8 text-center text-white shadow-xl sm:p-12">
        <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
          Let&apos;s build something 💫
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/85">
          Whether it&apos;s a product, a partnership, or a pitch — I&apos;d love
          to chat.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-white px-7 py-3 font-bold text-grape shadow-lg transition hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-white/40 px-7 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            in · LinkedIn
          </a>
        </div>
        <p className="mt-8 text-xs text-white/60">
          Built with Next.js + Tailwind · © {new Date().getFullYear()}{" "}
          {profile.name}
        </p>
      </footer>
    </main>
  );
}

function Section({
  id,
  emoji,
  title,
  subtitle,
  tint,
  children,
}: {
  id: string;
  emoji: string;
  title: string;
  subtitle?: string;
  tint: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 pt-14">
      <div className="mb-5 flex items-center gap-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${tint} text-xl shadow-sm`}
        >
          {emoji}
        </span>
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-plum sm:text-3xl">
            {title}
          </h2>
          {subtitle && <p className="text-sm text-plum/60">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}
