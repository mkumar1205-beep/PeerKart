import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroStudents from "../assets/campusmart-hero-students.png";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bike,
  Check,
  ChevronRight,
  CircleDollarSign,
  Cpu,
  GraduationCap,
  Grid2X2,
  Headphones,
  Laptop,
  NotebookTabs,
  PackageCheck,
  Repeat,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sofa,
  Sparkles,
  TrendingUp,
  WalletCards,
  Zap,
} from "lucide-react";

// ============================================================
// DATA
// ============================================================

const categories = [
  {
    name: "Books",
    count: "120+ items",
    icon: BookOpen,
    tone: "blue",
  },
  {
    name: "Electronics",
    count: "85+ items",
    icon: Laptop,
    tone: "violet",
  },
  {
    name: "Cycles",
    count: "42+ items",
    icon: Bike,
    tone: "green",
  },
  {
    name: "Furniture",
    count: "38+ items",
    icon: Sofa,
    tone: "orange",
  },
  {
    name: "Accessories",
    count: "65+ items",
    icon: Headphones,
    tone: "cyan",
  },
  {
    name: "Sports",
    count: "40+ items",
    icon: CircleDollarSign,
    tone: "yellow",
  },
  {
    name: "Notes",
    count: "70+ items",
    icon: NotebookTabs,
    tone: "indigo",
  },
  {
    name: "Lab Gear",
    count: "35+ items",
    icon: Cpu,
    tone: "pink",
  },
  {
    name: "All Items",
    count: "500+ items",
    icon: Grid2X2,
    tone: "slate",
  },
];

const quickPrompts = [
  "Engineering Books",
  "Scientific Calculator",
  "Mountain Cycle",
  "Lab Coat",
  "MacBook Pro",
  "Study Desk",
];

const aiFeatures = [
  {
    icon: Sparkles,
    badge: "Semantic Search",
    title: "Smart Product Finder",
    description:
      "Search in natural student language like 'cheap drafter for 1st year' or 'quiet study headphones' and find exact matches.",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: Zap,
    badge: "Real-time Valuation",
    title: "Fair Price Predictor",
    description:
      "Avoid getting ripped off. Our AI evaluates product condition, specs, and historical campus transactions to estimate true fair market value.",
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/20",
  },
  {
    icon: Repeat,
    badge: "Cashless Barter",
    title: "AI Exchange Matcher",
    description:
      "Trade your 2nd year books for 3rd year lab equipment. The AI algorithm matches complementary student listings for instant zero-cash swaps.",
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    icon: WalletCards,
    badge: "Budget Optimizer",
    title: "Buy vs. Rent Advisor",
    description:
      "Only taking a subject for one semester? The system computes whether renting or buying-and-reselling saves you the most money.",
    color: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/20",
  },
];

const featuredProducts = [
  {
    id: "1",
    title: "Engineering Mathematics & Mechanics",
    category: "Books",
    price: "₹1,250",
    originalPrice: "₹2,400",
    condition: "Like New",
    type: "For Sale",
    savings: "48% off",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1000&q=90",
    seller: "Arjun K. (3rd Yr CS)",
  },
  {
    id: "2",
    title: "Hero Sprint 21-Speed Mountain Cycle",
    category: "Cycles",
    price: "₹120 / day",
    originalPrice: "₹450 / wk",
    condition: "Good Condition",
    type: "For Rent",
    savings: "Campus Deal",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1000&q=90",
    seller: "Rohit D. (2nd Yr ME)",
  },
  {
    id: "3",
    title: "Casio FX-991CW ClassWiz Scientific Calc",
    category: "Electronics",
    price: "₹750",
    originalPrice: "₹1,500",
    condition: "Mint",
    type: "For Sale",
    savings: "50% off",
    image:
      "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=1000&q=90",
    seller: "Priya S. (4th Yr ECE)",
  },
  {
    id: "4",
    title: "Lab Apron + Complete Chemistry Kit",
    category: "Lab Gear",
    price: "Swap Offer",
    originalPrice: "Value ₹1,800",
    condition: "Excellent",
    type: "Exchange",
    savings: "Zero Cash",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=90",
    seller: "Siddharth M. (2nd Yr BT)",
  },
];

const toneClasses = {
  blue: "bg-blue-50 text-blue-600 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/10",
  violet:
    "bg-violet-50 text-violet-600 ring-violet-100 dark:bg-violet-500/10 dark:text-violet-400 dark:ring-violet-500/10",
  green:
    "bg-emerald-50 text-emerald-600 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/10",
  orange:
    "bg-orange-50 text-orange-600 ring-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:ring-orange-500/10",
  pink: "bg-pink-50 text-pink-600 ring-pink-100 dark:bg-pink-500/10 dark:text-pink-400 dark:ring-pink-500/10",
  cyan: "bg-cyan-50 text-cyan-600 ring-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-400 dark:ring-cyan-500/10",
  yellow:
    "bg-amber-50 text-amber-600 ring-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/10",
  indigo:
    "bg-indigo-50 text-indigo-600 ring-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/10",
  slate:
    "bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700",
};

const getStoredUser = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const adminToken =
    localStorage.getItem("peerkart_admin_token") ||
    localStorage.getItem("campusmart_admin_token");
  const studentToken =
    localStorage.getItem("peerkart_token") ||
    localStorage.getItem("campusmart_token");

  const adminUserRaw =
    localStorage.getItem("peerkart_admin_user") ||
    localStorage.getItem("campusmart_admin_user");
  const studentUserRaw =
    localStorage.getItem("peerkart_user") ||
    localStorage.getItem("campusmart_user");

  let adminUser = null;
  let studentUser = null;

  try {
    adminUser = adminUserRaw ? JSON.parse(adminUserRaw) : null;
  } catch {
    adminUser = null;
  }

  try {
    studentUser = studentUserRaw ? JSON.parse(studentUserRaw) : null;
  } catch {
    studentUser = null;
  }

  const isAdmin =
    Boolean(adminToken) &&
    String(adminUser?.role || "").toLowerCase() === "admin";

  return isAdmin ? adminUser : studentUser;
};

// ============================================================
// HERO VISUAL (DYNAMIC LIVE CAMPUS TRADING PREVIEW)
// ============================================================

function StudentIllustration({ currentUser }) {
  const displayName = currentUser?.name || currentUser?.fullName || "Student";
  const userInitial = displayName.charAt(0).toUpperCase();

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-12 -top-12 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/15" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/15" />

      {/* Main Illustration container */}
      <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200/90 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 p-4 shadow-[0_25px_70px_rgba(37,99,235,0.14)] backdrop-blur-xl dark:border-slate-800 dark:from-slate-900 dark:via-slate-900/90 dark:to-blue-950/30 dark:shadow-black/40">
        
        {/* Top bar info */}
        <div className="mb-3 flex items-center justify-between border-b border-slate-100 px-3 pb-3 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Live On-Campus Marketplace
            </span>
          </div>

          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-black text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            NIT Campus Active
          </span>
        </div>

        {/* Central visual */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-blue-100/30 to-indigo-100/20 dark:from-slate-800/40 dark:to-slate-800/20">
          <img
            src={heroStudents}
            alt="Campus students using PeerKart"
            className="relative z-10 h-auto min-h-[380px] w-full object-contain object-center transition duration-700 group-hover:scale-[1.03] sm:min-h-[440px]"
          />

          {/* Floating AI Valuation Badge (Top Right) */}
          <div className="absolute right-3 top-3 z-20 animate-float rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 sm:right-5 sm:top-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/20">
                <Zap size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  AI Fair Value
                </p>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white">
                  MacBook M2 · ₹58,000 <span className="text-emerald-500 font-bold text-[10px]">(Fair)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Floating Match Card (Bottom Left) */}
          <div className="absolute bottom-3 left-3 z-20 animate-float-delayed rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 sm:bottom-5 sm:left-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20">
                <Repeat size={15} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                    Swap Match Found
                  </span>
                  <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[9px] font-black text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                    98%
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Maths II ⇄ Physics Lab Kit
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom card footer */}
        <div className="mt-3 flex items-center justify-between rounded-xl bg-white p-3 shadow-sm dark:bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xs">
              {currentUser?.profileImage ? (
                <img
                  src={currentUser.profileImage}
                  alt={displayName}
                  className="h-full w-full rounded-xl object-cover"
                />
              ) : (
                userInitial
              )}
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 dark:text-white">
                {currentUser ? displayName : "Student Verified Community"}
              </p>
              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                Direct Handover at Library or Canteen
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400">
            <ShieldCheck size={14} className="text-emerald-500" />
            Zero Fees
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN REVAMPED HOME
// ============================================================

function Home() {
  const navigate = useNavigate();
  const currentUser = getStoredUser();
  const [searchQuery, setSearchQuery] = useState("");

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/marketplace");
    }
  };

  const handleChipClick = (prompt) => {
    navigate(`/marketplace?search=${encodeURIComponent(prompt)}`);
  };

  return (
    <main className="overflow-hidden bg-[#f8fafc] text-slate-900 dark:bg-[#070d18] dark:text-slate-100">
      
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950">
        {/* Ambient Gradients */}
        <div className="pointer-events-none absolute -left-40 -top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/15" />
        <div className="pointer-events-none absolute -right-20 top-40 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/10" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            
            {/* Left Column */}
            <div>
              {/* Announcement Pill */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-md transition-all hover:bg-blue-100/70 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="font-extrabold uppercase tracking-wider text-[11px]">PeerKart AI 2.0</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span>The Smart Campus Marketplace</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-[62px] lg:leading-[1.08]">
                Buy, Sell, Rent & Swap.
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Exclusively On Campus.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                Connect directly with verified students. Skip retail markups, rent lab gear for the semester, or exchange textbooks with intelligent AI price evaluation.
              </p>

              {/* Interactive Search Box */}
              <div className="mt-8 max-w-xl rounded-2xl border border-slate-200/90 bg-white p-2 shadow-[0_20px_50px_rgba(37,99,235,0.10)] transition-all hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
                <form onSubmit={handleHeroSearch} className="flex flex-col gap-2 sm:flex-row">
                  <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4 py-1 dark:bg-slate-800/80">
                    <Search size={19} className="shrink-0 text-slate-400 dark:text-slate-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search books, cycles, laptops, calculators..."
                      className="min-w-0 flex-1 bg-transparent py-3 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                    <span className="hidden rounded-lg bg-blue-100/70 px-2 py-0.5 text-[10px] font-black text-blue-700 sm:inline-block dark:bg-blue-500/20 dark:text-blue-300">
                      AI SEARCH
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-500/40"
                  >
                    Search
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>

              {/* Quick trending prompt chips */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-slate-400 dark:text-slate-500">Popular:</span>
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleChipClick(prompt)}
                    className="rounded-lg border border-slate-200/80 bg-slate-50/70 px-2.5 py-1 font-semibold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-300"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Verified Student IDs
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  0% Commission
                </span>

                <span className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  Same-Day Pickup
                </span>
              </div>

              {/* Micro stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-100 pt-7 dark:border-slate-800">
                <div>
                  <p className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                    1,200+
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Live Campus Listings
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                    500+
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Active Students
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                    ₹4.2L+
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Saved by Peers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Dynamic Illustration) */}
            <StudentIllustration currentUser={currentUser} />
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES RAIL (BENTO CHIPS)
      ====================================================== */}
      <section className="border-b border-slate-200/80 bg-white py-12 dark:border-slate-800/80 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Browse Campus Catalog
              </p>
              <h2 className="mt-1.5 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Explore by category
              </h2>
            </div>

            <Link
              to="/marketplace"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition hover:gap-2 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View all listings
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  to={`/marketplace?category=${encodeURIComponent(category.name === "All Items" ? "All" : category.name)}`}
                  className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-600 dark:hover:bg-slate-900"
                >
                  <div
                    className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition duration-300 group-hover:scale-110 ${toneClasses[category.tone]}`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-slate-100">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    {category.count}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          AI SUPERPOWERS (BENTO GRID)
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-20 dark:from-slate-900/60 dark:via-slate-950 dark:to-blue-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
              <Sparkles size={14} className="text-cyan-500" />
              Built For Campus Intelligence
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              AI Superpowers built for student budgets
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              PeerKart integrates intelligent algorithms designed to help students buy without overpaying, exchange without friction, and rent safely on campus.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-blue-600"
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${feature.color} text-white shadow-lg ${feature.shadow}`}
                      >
                        <Icon size={22} />
                      </div>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom link */}
                  <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <Link
                      to="/marketplace"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition group-hover:gap-2.5 dark:text-blue-400"
                    >
                      Try Feature Now
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED CAMPUS DROPS
      ====================================================== */}
      <section className="border-y border-slate-200/80 bg-white py-20 dark:border-slate-800/80 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <TrendingUp size={14} />
                Fresh On Campus
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Top picks from student peers
              </h2>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Verified listings available for immediate handover on campus.
              </p>
            </div>

            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              Explore All Drops
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/marketplace?search=${encodeURIComponent(product.category)}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Image container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Mode badge */}
                  <span
                    className={`absolute left-3.5 top-3.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md ${
                      product.type === "For Rent"
                        ? "bg-purple-600"
                        : product.type === "Exchange"
                        ? "bg-emerald-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {product.type}
                  </span>

                  {/* Savings pill */}
                  <span className="absolute right-3.5 top-3.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold text-slate-800 shadow-sm backdrop-blur-md dark:bg-slate-900/90 dark:text-white">
                    {product.savings}
                  </span>

                  {/* Seller badge */}
                  <div className="absolute bottom-3 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-slate-950/75 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                    <BadgeCheck size={13} className="text-cyan-400" />
                    {product.seller}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-blue-600 dark:text-blue-400">{product.category}</span>
                      <span className="text-slate-400 dark:text-slate-500">{product.condition}</span>
                    </div>

                    <h3 className="mt-2 line-clamp-2 text-base font-black text-slate-900 dark:text-white">
                      {product.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                    <div>
                      <span className="text-xs text-slate-400 line-through mr-1.5">
                        {product.originalPrice}
                      </span>
                      <span className="text-xl font-black text-slate-950 dark:text-white">
                        {product.price}
                      </span>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-blue-500">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS (3-STEP PIPELINE)
      ====================================================== */}
      <section className="bg-slate-50/70 py-20 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Simple & Safe
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              How PeerKart works on your campus
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Three simple steps to buy, sell or exchange with peace of mind.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                icon: GraduationCap,
                title: "Verify With Student ID",
                desc: "Create an account using your college email address. Only verified campus peers can browse, chat, and transact.",
              },
              {
                step: "02",
                icon: Sparkles,
                title: "AI-Powered Valuation",
                desc: "Snap a photo of your gear. Our AI engine recommends fair market price, auto-generates tags, and finds swap matches.",
              },
              {
                step: "03",
                icon: PackageCheck,
                title: "Safe On-Campus Meetup",
                desc: "Meet at the campus library, cafeteria, or common room. Inspect your gear in person and pay safely with zero shipping delays.",
              },
            ].map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.step}
                  className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      <Icon size={24} />
                    </div>
                    <span className="text-3xl font-black text-slate-200 dark:text-slate-800">
                      {card.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HIGH-IMPACT BOTTOM CTA
      ====================================================== */}
      <section className="relative overflow-hidden border-t border-blue-200/80 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 py-24 text-white dark:border-slate-800">
        {/* Glow circles */}
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-xl shadow-xl ring-1 ring-white/30">
            <ShoppingBag size={28} />
          </div>

          <h2 className="mt-7 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Turn your unused campus gear into cash today.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Join hundreds of students saving money and decluttering their dorm rooms on PeerKart. Completely free to list.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/sell"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-blue-900 shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Start Selling Free
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-extrabold text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Search size={18} />
              Explore Campus Marketplace
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs font-bold text-blue-100">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-cyan-300" /> Free Student Listings
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-cyan-300" /> AI Pricing Guidance
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-cyan-300" /> In-App Direct Chat
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-cyan-300" /> Safe Meetups
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
