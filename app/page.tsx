import Image from "next/image";
import Nav from "@/components/nav";
import {
  ArrowIcon,
  BadgeIcon,
  BroomIcon,
  BuildingIcon,
  EyeIcon,
  FlowerIcon,
  GlobeIcon,
  HomeIcon,
  InstitutionIcon,
  KeyIcon,
  LeafIcon,
  MailIcon,
  MowerIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
  TargetIcon,
  ThumbIcon,
  TreeIcon,
  UsersIcon,
  ClipboardIcon,
} from "@/components/icons";

const PHONE = "+254 720 447 964";
const PHONE_HREF = "tel:+254720447964";
const EMAIL = "info@bitutam.co.ke";

/* ---------------------------------- bits ---------------------------------- */

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.28em] ${
        light ? "text-[#7bc144]" : "text-[#177036]"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-[#7bc144]" : "bg-[#177036]"}`} />
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  light,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl ${
        light ? "text-white" : "text-[#0d431f]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#062615]">
      <Image
        src="/img/hero-facade.jpg"
        alt="Bitutam rope-access technicians cleaning the glass facade of a high-rise building"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#062615]/95 via-[#0d431f]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#062615] via-transparent to-[#062615]/50" />

      <Nav />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8">
        <div className="max-w-2xl reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7bc144]/40 bg-[#7bc144]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7bc144]">
            <LeafIcon className="h-4 w-4" /> Nairobi, Kenya
          </p>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Bitutam
            <br />
            International
            <br />
            <span className="text-[#7bc144]">Cleaning Services</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Bringing a neat &amp; organized outlook. We deliver a full range of professional cleaning,
            gardening and landscaping services for homes, businesses and institutions across Kenya.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#7bc144] px-7 py-3.5 font-semibold text-[#062615] transition-transform hover:scale-[1.04]"
            >
              Request a Quote
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#cleaning"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/10 sm:mt-20">
          {[
            ["Clean Spaces.", "Homes, offices & institutions"],
            ["Green Spaces.", "Gardening & landscaping"],
            ["Better Places.", "Eco-friendly, every time"],
          ].map(([t, s]) => (
            <div key={t} className="bg-[#062615]/70 px-4 py-5 backdrop-blur-sm sm:px-6">
              <p className="font-display text-lg font-bold uppercase tracking-wide text-[#7bc144] sm:text-2xl">{t}</p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- about ---------------------------------- */

const pillars = [
  { icon: ShieldIcon, title: "Reliable Service", copy: "Consistent standards on every visit." },
  { icon: LeafIcon, title: "Eco-Friendly Solutions", copy: "Products that are safe for people and place." },
  { icon: UsersIcon, title: "Trained Professionals", copy: "A vetted, uniformed and supervised team." },
  { icon: BadgeIcon, title: "Quality Assured", copy: "Standard procedures and regular checks." },
];

function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>About Bitutam International</Eyebrow>
          <SectionTitle>
            Your reliable partner in creating cleaner, greener, more organized spaces
          </SectionTitle>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#5c6660]">
            <p>
              Welcome to Bitutam International Limited. We offer a full range of cleaning and gardening
              services for homes, businesses and institutions.
            </p>
            <p>
              Our team is committed to delivering quality, reliability, and attention to detail — every
              time. From a single deep clean to a recurring commercial contract, we bring the same standard
              of care to every space we touch.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex gap-3.5">
                <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0d431f] text-[#7bc144]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold uppercase tracking-wide text-[#0d431f]">{title}</p>
                  <p className="mt-1 text-sm text-[#5c6660]">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 overflow-hidden rounded-2xl">
            <Image
              src="/img/office-bright.jpg"
              alt="A bright, freshly cleaned open-plan office"
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/img/staff-mopping.jpg"
              alt="A Bitutam cleaner in branded green uniform mopping a floor beside a wet floor sign"
              width={285}
              height={379}
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-72"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/img/living-room.jpg"
              alt="A tidy, well-presented modern living room"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- vision & mission --------------------------- */

function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[#0d431f] py-24 sm:py-32">
      <Image
        src="/img/garden-path.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d431f] via-[#0d431f]/95 to-[#062615]/90" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <Eyebrow light>Vision &amp; Mission</Eyebrow>
          <SectionTitle light>Beauty, order and hygiene in every space we touch</SectionTitle>

          <div className="mt-10 space-y-8">
            <div className="flex gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#7bc144] text-[#062615]">
                <EyeIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">Vision</h3>
                <p className="mt-2 leading-relaxed text-white/80">
                  To be Kenya&apos;s most trusted provider of sustainable cleaning and landscaping services,
                  delivering beauty, order and hygiene to every space we touch.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#7bc144] text-[#062615]">
                <TargetIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">Mission</h3>
                <p className="mt-2 leading-relaxed text-white/80">
                  To provide high-quality, affordable and professional cleaning services tailored to
                  residential, commercial and institutional clients, while upholding environmental
                  responsibility and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/img/cleaner-window.jpg"
            alt="A cleaner wearing gloves wiping down a window frame"
            width={1600}
            height={1067}
            sizes="(min-width: 1024px) 28vw, 50vw"
            className="h-72 w-full rounded-2xl object-cover sm:h-96"
          />
          <div className="grid gap-4">
            <Image
              src="/img/lawn.jpg"
              alt="A healthy, freshly mown green lawn"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 28vw, 50vw"
              className="h-34 w-full rounded-2xl object-cover sm:h-46"
            />
            <Image
              src="/img/supplies-green.jpg"
              alt="A bucket of professional cleaning supplies and microfibre cloths"
              width={1322}
              height={1599}
              sizes="(min-width: 1024px) 28vw, 50vw"
              className="h-34 w-full rounded-2xl object-cover sm:h-46"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- clients -------------------------------- */

const clients = [
  {
    icon: HomeIcon,
    title: "Residential Clients",
    copy: "Homeowners, apartment complexes and gated communities.",
    img: "/img/residential-block.jpg",
    alt: "A modern residential apartment block",
  },
  {
    icon: BuildingIcon,
    title: "Corporate Clients",
    copy: "Offices, co-working spaces, banks and retail stores.",
    img: "/img/office-lobby.jpg",
    alt: "A corporate office corridor with glass meeting rooms",
  },
  {
    icon: InstitutionIcon,
    title: "Institutions",
    copy: "Schools, hospitals, churches and government agencies.",
    img: "/img/apartment-block.jpg",
    alt: "An institutional building exterior",
  },
  {
    icon: KeyIcon,
    title: "Property Managers",
    copy: "Real estate agents and landlords requiring pre- and post-occupancy cleaning or landscape maintenance.",
    img: "/img/apartment-interior.jpg",
    alt: "A clean, staged apartment interior ready for occupancy",
  },
];

function Clients() {
  return (
    <section id="clients" className="bg-[#f6f5f1] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Our Target Clients</Eyebrow>
          <SectionTitle>Who we clean for</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-[#5c6660]">
            Our service model is built to flex — from a one-off residential deep clean to scheduled
            institutional contracts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map(({ icon: Icon, title, copy, img, alt }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d431f]/80 via-[#0d431f]/10 to-transparent" />
                <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-full bg-[#7bc144] text-[#062615]">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#0d431f]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5c6660]">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- cleaning services --------------------------- */

const routineTasks = [
  "Dusting and wiping surfaces",
  "Sweeping, mopping and floor care",
  "Sanitizing high-contact areas",
  "Bathroom and kitchen cleaning & sanitation",
];

const deepTasks = [
  "Steam cleaning of carpets & upholstery",
  "Scrubbing & polishing of hard floors",
  "High-pressure washing for stubborn dirt",
  "Removing mold, algae & oil stains",
];

function CleaningServices() {
  return (
    <section id="cleaning" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Our Cleaning Services</Eyebrow>
          <SectionTitle>Routine care and deep restoration</SectionTitle>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl bg-[#0d431f] p-8 sm:p-10">
            <Image
              src="/img/mop-corridor.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d431f] via-[#0d431f]/92 to-[#0d431f]/70" />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#7bc144] text-[#062615]">
                <BroomIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-white">
                Routine General Cleaning
              </h3>
              <p className="mt-3 leading-relaxed text-white/80">
                Designed for daily, weekly or monthly maintenance to ensure ongoing hygiene and order.
              </p>
              <ul className="mt-7 space-y-3">
                {routineTasks.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7bc144]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-[#062615] p-8 sm:p-10">
            <Image
              src="/img/bathroom.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#062615] via-[#062615]/92 to-[#062615]/70" />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#7bc144] text-[#062615]">
                <SparkleIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-white">
                Deep Cleaning Services
              </h3>
              <p className="mt-3 leading-relaxed text-white/80">
                Intensive cleaning aimed at eliminating accumulated dirt, grime and bacteria.
              </p>
              <ul className="mt-7 space-y-3">
                {deepTasks.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7bc144]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            ["/img/vacuum-confetti.jpg", "A vacuum cleaner lifting debris from a hard floor"],
            ["/img/staff-vacuum.jpg", "A Bitutam cleaner in green uniform vacuuming an office floor"],
            ["/img/vacuum-carpet.jpg", "Vacuuming a carpet in a residential living room"],
            ["/img/bedroom-bw.jpg", "A bedroom being cleaned and reset"],
          ].map(([src, alt]) => (
            <div key={src} className="group overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 24vw, 50vw"
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- gardening ------------------------------ */

const gardening = [
  {
    icon: MowerIcon,
    title: "Lawn Care & Maintenance",
    copy: "Grass mowing & edging, weed removal, soil aeration, fertilization and pest control.",
    img: "/img/lawn-mow.jpg",
    alt: "A groundsman mowing a lawn beside a hedge",
  },
  {
    icon: FlowerIcon,
    title: "Flower & Plant Care",
    copy: "Planting of flowers, shrubs and trees, pruning, trimming and irrigation system setup.",
    img: "/img/garden-path.jpg",
    alt: "A landscaped garden path lined with flowering hedges",
  },
  {
    icon: TreeIcon,
    title: "Hedge & Tree Maintenance",
    copy: "Trimming and shaping hedges for a neat look, plus tree pruning and maintenance.",
    img: "/img/hedge-man.jpg",
    alt: "A gardener trimming a hedge with powered shears",
  },
];

function Gardening() {
  return (
    <section id="gardening" className="relative overflow-hidden bg-[#f6f5f1] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Gardening &amp; Landscaping</Eyebrow>
          <SectionTitle>Green spaces, properly kept</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-[#5c6660]">
            Grounds maintenance that keeps compounds, gardens and green spaces looking cared for all year
            round.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {gardening.map(({ icon: Icon, title, copy, img, alt }) => (
            <article key={title} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0d431f] text-[#7bc144]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-[#0d431f]">
                  {title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-[#5c6660]">{copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["/img/hedge-trim.jpg", "Close-up of hedge shears trimming a green hedge"],
            ["/img/strimmer.jpg", "A groundsman using a strimmer on a garden lawn"],
            ["/img/soil.jpg", "A scoop of potting soil prepared for planting"],
            ["/img/garden-path.jpg", "A flowering garden walkway"],
          ].map(([src, alt]) => (
            <div key={src + alt} className="group overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                sizes="(min-width: 640px) 24vw, 50vw"
                className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-48"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- equipment ------------------------------- */

const cleaningSupplies = [
  "Mops & buckets",
  "Scrubbers & brushes",
  "Eco-friendly detergents & disinfectants",
  "High-power pressure washers",
  "Staff protective gear (gloves, masks, aprons, goggles)",
];

const gardenEquipment = [
  "Lawn mowers",
  "Shovels, rakes, hoes",
  "Pruners & shears",
  "Organic fertilizers & pesticides",
  "Watering cans & sprinkler systems",
];

function Equipment() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <Image
            src="/img/supplies-green.jpg"
            alt="A bucket filled with professional cleaning products, sprays and microfibre cloths"
            width={1322}
            height={1599}
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="h-72 w-full rounded-2xl object-cover sm:h-96"
          />
          <div className="grid gap-4">
            <Image
              src="/img/glove-spray.jpg"
              alt="A gloved hand holding a spray bottle of cleaning solution"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="h-34 w-full rounded-2xl object-cover sm:h-46"
            />
            <Image
              src="/img/lawn.jpg"
              alt="A neatly maintained green lawn"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="h-34 w-full rounded-2xl object-cover sm:h-46"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>Equipment &amp; Supplies</Eyebrow>
          <SectionTitle>Industry-approved tools, eco-friendly products</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-[#5c6660]">
            We use high-quality, industry-approved tools and eco-friendly products to deliver excellent
            results — without compromising the health of the space or the people in it.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold uppercase tracking-wide text-[#0d431f]">
                <BroomIcon className="h-5 w-5 text-[#177036]" /> Cleaning Supplies
              </h3>
              <ul className="mt-4 space-y-2.5">
                {cleaningSupplies.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#5c6660]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7bc144]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold uppercase tracking-wide text-[#0d431f]">
                <MowerIcon className="h-5 w-5 text-[#177036]" /> Gardening Equipment
              </h3>
              <ul className="mt-4 space-y-2.5">
                {gardenEquipment.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#5c6660]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7bc144]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- portfolio ------------------------------- */

const portfolio = [
  {
    name: "New Rays House",
    copy: "Comprehensive hotel cleaning solutions.",
    img: "/img/apartment-interior.jpg",
    alt: "A made-up hotel room after a full clean",
  },
  {
    name: "The Royal Apartments",
    copy: "Residential cleaning & maintenance services.",
    img: "/img/residential-block.jpg",
    alt: "A residential apartment tower",
  },
  {
    name: "Various Offices",
    copy: "Routine office cleaning & sanitation.",
    img: "/img/office-corridor.jpg",
    alt: "A clean corporate office corridor",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#062615] py-24 sm:py-32">
      <Image src="/img/nairobi.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-[#062615] via-[#062615]/90 to-[#062615]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow light>Our Portfolio &amp; Previous Work</Eyebrow>
          <SectionTitle light>Trusted by homeowners and major corporates</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            We have successfully served both individual homeowners and major corporate clients across
            Nairobi.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {portfolio.map(({ name, copy, img, alt }) => (
            <article key={name} className="group overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-[#7bc144]">{name}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- assurance ------------------------------- */

const assurance = [
  {
    icon: ShieldIcon,
    title: "Quality Assurance",
    copy: "Trained staff, standard operating procedures and regular quality checks.",
  },
  {
    icon: LeafIcon,
    title: "Environmental Responsibility",
    copy: "We use eco-friendly products and sustainable practices.",
  },
  {
    icon: ClipboardIcon,
    title: "Compliance",
    copy: "We adhere to all industry regulations and health & safety standards.",
  },
];

function Assurance() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <Eyebrow>Service Assurance &amp; Compliance</Eyebrow>
          <SectionTitle>Standards you can hold us to</SectionTitle>
          <div className="mt-10 space-y-7">
            {assurance.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex gap-5">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-[#0d431f] p-3.5 text-[#7bc144]">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#0d431f]">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-[#5c6660]">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Image
            src="/img/team.jpg"
            alt="The Bitutam team collaborating on a service schedule"
            width={1600}
            height={1067}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-80 w-full rounded-3xl object-cover sm:h-[28rem]"
          />
          <div className="absolute -bottom-8 -left-4 hidden w-56 rounded-2xl bg-[#7bc144] p-6 sm:block">
            <p className="font-display text-4xl font-bold text-[#062615]">100%</p>
            <p className="mt-1 text-sm font-medium leading-snug text-[#062615]/80">
              Eco-friendly products across every service line
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- why choose ------------------------------- */

const why = [
  { icon: UsersIcon, title: "Experienced & Reliable Team" },
  { icon: LeafIcon, title: "Eco-Friendly Approach" },
  { icon: ShieldIcon, title: "Attention to Detail" },
  { icon: ThumbIcon, title: "Affordable & Flexible Packages" },
  { icon: StarIcon, title: "Customer Satisfaction Guaranteed" },
];

function WhyChoose() {
  return (
    <section id="why" className="bg-[#f6f5f1] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.28em] text-[#177036]">
            Why Choose Bitutam?
          </p>
          <SectionTitle className="!text-4xl sm:!text-5xl">Five reasons clients stay with us</SectionTitle>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {why.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0d431f] text-[#7bc144] transition-colors group-hover:bg-[#7bc144] group-hover:text-[#062615]">
                <Icon className="h-8 w-8" />
              </span>
              <p className="mt-5 font-display text-base font-bold uppercase leading-snug tracking-wide text-[#0d431f]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- contact -------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0d431f]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem] lg:min-h-full">
          <Image
            src="/img/hero-facade.jpg"
            alt="Rope-access technicians cleaning a glass tower facade"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d431f] via-[#0d431f]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0d431f]/30 lg:to-[#0d431f]" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:top-1/2 lg:-translate-y-1/2">
            <p className="font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl">
              Clean Spaces.
              <br />
              Green Spaces.
              <br />
              <span className="text-[#7bc144]">Better Places.</span>
            </p>
          </div>
        </div>

        <div className="px-5 py-20 sm:px-12 sm:py-28">
          <Eyebrow light>To Get In Touch</Eyebrow>
          <SectionTitle light>Let&apos;s talk about your space</SectionTitle>
          <p className="mt-5 max-w-md leading-relaxed text-white/80">
            Thank you for considering Bitutam International. Tell us what you need cleaned or maintained and
            we will put together a package that fits.
          </p>

          <div className="mt-10 space-y-1">
            {[
              { icon: PhoneIcon, label: PHONE, href: PHONE_HREF },
              { icon: MailIcon, label: EMAIL, href: `mailto:${EMAIL}` },
              { icon: GlobeIcon, label: "www.bitutam.co.ke", href: "https://www.bitutam.co.ke" },
              { icon: PinIcon, label: "Nairobi, Kenya" },
            ].map(({ icon: Icon, label, href }) => {
              const inner = (
                <span className="flex items-center gap-4 border-b border-white/15 py-4 text-white/90 transition-colors group-hover:text-[#7bc144]">
                  <Icon className="h-5 w-5 shrink-0 text-[#7bc144]" />
                  <span className="text-lg">{label}</span>
                </span>
              );
              return href ? (
                <a key={label} href={href} className="group block">
                  {inner}
                </a>
              ) : (
                <div key={label} className="group block">
                  {inner}
                </div>
              );
            })}
          </div>

          <a
            href={PHONE_HREF}
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#7bc144] px-8 py-4 font-semibold text-[#062615] transition-transform hover:scale-[1.04]"
          >
            Call Us Today
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#062615] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:px-8 md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/95 font-display text-xl font-bold text-[#0d431f]">
            B
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-bold uppercase tracking-wide text-white">
              Bitutam International Limited
            </p>
            <p className="text-xs text-[#7bc144]">Bringing A Neat &amp; Organized Outlook</p>
          </div>
        </div>
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Bitutam International Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <VisionMission />
      <Clients />
      <CleaningServices />
      <Gardening />
      <Equipment />
      <Portfolio />
      <Assurance />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  );
}
