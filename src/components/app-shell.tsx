import { Bell, Coffee, LayoutDashboard, MessageSquare, ShieldCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Command", icon: LayoutDashboard },
  { label: "Clients", icon: UsersRound },
  { label: "Messages", icon: MessageSquare },
  { label: "AI Vault", icon: ShieldCheck }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-50 text-espresso-950">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-espresso-200/70 bg-cream-100/80 px-4 py-5 backdrop-blur lg:block">
        <div className="flex items-center gap-3 px-2">
          <div className="flex size-10 items-center justify-center rounded-md bg-espresso-900 text-cream-50">
            <Coffee size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">L&amp;C</p>
            <h1 className="text-lg font-semibold">Leadership &amp; Coffee</h1>
          </div>
        </div>

        <nav className="mt-8 space-y-1">
          {navItems.map((item, index) => (
            <Button
              key={item.label}
              variant={index === 0 ? "default" : "ghost"}
              className="w-full justify-start"
              aria-current={index === 0 ? "page" : undefined}
            >
              <item.icon size={18} aria-hidden="true" />
              {item.label}
            </Button>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-espresso-200/70 bg-cream-50/88 backdrop-blur">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
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
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
