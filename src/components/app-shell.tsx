"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Coffee,
  CreditCard,
  Dumbbell,
  HeartPulse,
  LayoutDashboard,
  MessageSquare,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Utensils
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: Route;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { label: "Command", href: "/", icon: LayoutDashboard },
  { label: "Clients", href: "/clients", icon: UsersRound },
  { label: "Programs", href: "/programs", icon: PanelsTopLeft },
  { label: "Workouts", href: "/workouts", icon: Dumbbell },
  { label: "Nutrition", href: "/nutrition", icon: Utensils },
  { label: "Check-ins", href: "/check-ins", icon: HeartPulse },
  { label: "Messages", href: "/messages", icon: MessageSquare },
  { label: "AI Vault", href: "/ai-vault", icon: ShieldCheck },
  { label: "Community", href: "/community", icon: Coffee },
  { label: "Gym Ops", href: "/gym-ops", icon: PanelsTopLeft },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Mobile", href: "/mobile", icon: Smartphone },
  { label: "Billing", href: "/billing", icon: CreditCard },
  { label: "Settings", href: "/settings", icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen text-espresso-950">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-espresso-200/70 bg-cream-100/88 px-4 py-5 shadow-[12px_0_44px_rgba(43,32,27,0.07)] backdrop-blur lg:block">
        <div className="flex items-center gap-3 px-2">
          <div className="flex size-10 items-center justify-center rounded-md bg-espresso-900 text-cream-50">
            <Coffee size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">L&amp;C</p>
            <h1 className="text-lg font-semibold">Leadership &amp; Coffee</h1>
          </div>
        </div>

        <nav className="mt-8 max-h-[calc(100vh-18rem)] space-y-1 overflow-y-auto pr-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex h-10 items-center gap-2 rounded-md px-3 text-sm font-semibold transition",
                active
                  ? "bg-espresso-900 text-cream-50 shadow-sm"
                  : "text-espresso-700 hover:bg-cream-200/70 hover:text-espresso-950"
              )}
              aria-current={active ? "page" : undefined}
            >
              <item.icon size={18} aria-hidden={true} />
              {item.label}
            </Link>
            );
          })}
        </nav>

        <div className="absolute inset-x-4 bottom-5 rounded-lg border border-copper-500/30 bg-espresso-950 p-4 text-cream-50">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-honey-100">Sponsor pulse</p>
          <p className="mt-2 text-sm leading-6 text-cream-200">Brand readiness is high across coffee culture, coaching, and workplace wellness programs.</p>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-espresso-200/70 bg-cream-50/88 backdrop-blur">
          <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-700">Coach operations</p>
              <p className="text-sm text-espresso-700">Enterprise command center</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" aria-label="Notifications">
                <Bell size={18} aria-hidden="true" />
              </Button>
              <Button variant="secondary">Invite coach</Button>
            </div>
          </div>
          <nav className="flex gap-2 overflow-x-auto border-t border-espresso-200/60 px-4 py-2 lg:hidden">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "inline-flex h-9 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-semibold",
                    active ? "bg-espresso-900 text-cream-50" : "bg-cream-100 text-espresso-700"
                  )}
                >
                  <item.icon size={16} aria-hidden={true} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
