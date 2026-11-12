import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BrainCircuit,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-white text-slate-900 dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-100">
      {/* Background glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-600/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 text-white shadow-lg shadow-blue-500/25 transition-transform duration-300 group-hover:scale-105">
                <ShoppingBag size={21} className="transition-transform group-hover:-rotate-6" />
                <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400 ring-2 ring-white dark:ring-slate-950">
                  <Sparkles size={9} className="text-slate-950" />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    Peer<span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">Kart</span>
                  </span>
                  <span className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    AI
                  </span>
                </div>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                  Campus Marketplace
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
              The next-generation campus commerce hub. Buy, sell, exchange and rent
              products with student-verified trust and AI-assisted pricing guidance.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified Student Platform
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1.5 text-xs font-bold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                <BrainCircuit size={13} />
                AI Price Engine
              </div>
            </div>
          </div>

          {/* MARKETPLACE */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Marketplace
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/marketplace" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Explore Listings
                </Link>
              </li>
              <li>
                <Link to="/sell" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  List an Item
                </Link>
              </li>
              <li>
                <Link to="/ai-exchange-matcher" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  AI Exchange Matcher
                </Link>
              </li>
              <li>
                <Link to="/my-rentals" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Campus Rentals
                </Link>
              </li>
            </ul>
          </div>

          {/* FEATURES */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              AI Tools
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-500" />
                Smart Product Finder
              </li>
              <li className="flex items-center gap-2">
                <Zap size={14} className="text-amber-500" />
                Fair Price Predictor
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-500" />
                Scam Risk Indicator
              </li>
              <li className="flex items-center gap-2">
                <BrainCircuit size={14} className="text-indigo-500" />
                Buy-vs-Rent Advisor
              </li>
            </ul>
          </div>

          {/* COMMUNITY */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Community
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/about" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  About PeerKart
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Campus Admin
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/mkumar1205-beep/PeerKart"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub Repository
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} PeerKart. All rights reserved. Built for student campuses.
          </p>

          <p className="flex items-center gap-1.5 font-medium">
            Designed with <Heart size={13} className="fill-red-500 text-red-500" /> for the student community
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
