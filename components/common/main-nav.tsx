"use client";

import { motion } from "framer-motion";
import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex gap-6 md:gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn(norican.className, "text-2xl font-medium")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </motion.div>

      {items?.length ? (
        <nav className="hidden md:flex gap-8 items-center">
          {items.map((item, index) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                >
                  {item.title}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      ) : null}

      <motion.button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close className="h-5 w-5" /> : <Icons.menu className="h-5 w-5" />}
        <span className="text-sm font-medium">Menu</span>
      </motion.button>

      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
