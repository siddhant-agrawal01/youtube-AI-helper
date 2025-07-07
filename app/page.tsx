"use client";
import Image from "next/image";

import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { ModeToggle } from "@/components/theme-switch";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <nav
          className="relative backdrop-blur-md bg-neutral-200/70 dark:bg-neutral-900/70 rounded-2xl border border-white/20 dark:border-neutral-700/30 shadow-lg shadow-black/5 dark:shadow-black/20"
          aria-label="Global"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <Image src={"/logo.svg"} alt="logo" width={120} height={120} />
            </div>

<div className="flex items-center space-x-4">
  {/* Theme Toggle - hidden on mobile, visible on md screens */}
  <div className="hidden md:block">
    <ModeToggle />
  </div>
  
  {/* Clerk Authentication */}
  {!user ? (
    <SignInButton
      mode="modal"
      signUpForceRedirectUrl={"/dashboard"}
    >
      <button className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors duration-200 px-3 py-2 sm:px-4 sm:py-2 rounded-full hover:bg-white/50 dark:hover:bg-neutral-800/50">
        <svg
          className="flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
        <span className="hidden sm:inline">Get Started</span>
      </button>
    </SignInButton>
  ) : (
    <div className="p-1 rounded-full bg-white/20 dark:bg-neutral-800/20">
      <UserButton />
    </div>
  )}
</div>
            
          </div>
        </nav>
      </header>

      {/* Add top padding to account for fixed header */}
      <div className="pt-24">{/* Your main content goes here */}</div>
    </div>
  );
}
