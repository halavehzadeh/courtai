
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  CreditCard, 
  FileText, 
  Menu, 
  User, 
  X,
  ChevronRight,
  FileUp,
  Gavel,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type SidebarItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  children?: Array<{
    title: string;
    href: string;
  }>;
};

const SidebarItems: SidebarItem[] = [
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Legal Case Analysis",
    href: "/legal-case-analysis",
    icon: FileText,
    children: [
      {
        title: "Case Details",
        href: "/legal-case-analysis/case-details",
      },
      {
        title: "Upload Documents",
        href: "/legal-case-analysis/upload-documents",
      },
    ],
  },
  {
    title: "Compliance",
    href: "/compliance",
    icon: Shield,
  },
  {
    title: "Payment",
    href: "/payment",
    icon: CreditCard,
  },
];

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    if (expandedItem === title) {
      setExpandedItem(null);
    } else {
      setExpandedItem(title);
    }
  };

  // Desktop sidebar
  const DesktopSidebar = () => (
    <aside className="hidden md:flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border shadow-sm">
      <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <Gavel className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Court AI</span>
        </div>
      </div>
      <nav className="flex-1 overflow-auto p-4">
        <ul className="space-y-2">
          {SidebarItems.map((item) => (
            <li key={item.href} className="space-y-1">
              <div 
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium cursor-pointer",
                  (location.pathname === item.href || location.pathname.startsWith(item.href + "/"))
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                onClick={() => item.children && toggleExpand(item.title)}
              >
                <Link 
                  to={item.href}
                  className="flex items-center flex-1"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.title}
                </Link>
                {item.children && (
                  <ChevronRight 
                    className={cn(
                      "h-4 w-4 transition-transform", 
                      expandedItem === item.title && "transform rotate-90"
                    )} 
                  />
                )}
              </div>
              
              {item.children && expandedItem === item.title && (
                <ul className="pl-8 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        to={child.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm font-medium",
                          location.pathname === child.href
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        )}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-md bg-sidebar-accent p-3">
          <h4 className="text-sm font-medium text-sidebar-accent-foreground">Need Assistance?</h4>
          <p className="mt-1 text-xs text-sidebar-foreground">
            Our legal experts are available to help with your case analysis.
          </p>
        </div>
      </div>
    </aside>
  );

  // Mobile sidebar (using Sheet component)
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden fixed top-4 left-4 z-40"
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64 border-r bg-sidebar">
          <SheetHeader className="border-b border-sidebar-border h-16 flex items-center px-6">
            <SheetTitle className="flex items-center">
              <Gavel className="h-6 w-6 text-primary mr-2" />
              <span>Court AI</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-auto p-4">
            <ul className="space-y-2">
              {SidebarItems.map((item) => (
                <li key={item.href} className="space-y-1">
                  <div 
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium cursor-pointer",
                      (location.pathname === item.href || location.pathname.startsWith(item.href + "/"))
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                    onClick={() => item.children && toggleExpand(item.title)}
                  >
                    <Link 
                      to={item.href}
                      className="flex items-center flex-1"
                      onClick={() => !item.children && setIsOpen(false)}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.title}
                    </Link>
                    {item.children && (
                      <ChevronRight 
                        className={cn(
                          "h-4 w-4 transition-transform", 
                          expandedItem === item.title && "transform rotate-90"
                        )} 
                      />
                    )}
                  </div>
                  
                  {item.children && expandedItem === item.title && (
                    <ul className="pl-8 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            to={child.href}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm font-medium",
                              location.pathname === child.href
                                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-sidebar-border p-4">
            <div className="rounded-md bg-sidebar-accent p-3">
              <h4 className="text-sm font-medium text-sidebar-accent-foreground">Need Assistance?</h4>
              <p className="mt-1 text-xs text-sidebar-foreground">
                Our legal experts are available to help with your case analysis.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <DesktopSidebar />
    </>
  );
}
