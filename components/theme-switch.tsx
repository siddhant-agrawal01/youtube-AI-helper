"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className={`
          relative w-16 h-8 rounded-full p-1 transition-all duration-500 ease-in-out
          ${
            isDark
              ? "bg-gradient-to-r from-slate-800 to-slate-700 shadow-inner shadow-slate-900/50"
              : "bg-gradient-to-r from-amber-200 to-yellow-300 shadow-inner shadow-yellow-500/30"
          }
          hover:scale-105 active:scale-95 transform
          border-2 ${isDark ? "border-slate-600" : "border-yellow-400"}
          hover:shadow-lg ${
            isDark ? "hover:shadow-blue-500/20" : "hover:shadow-yellow-500/30"
          }
        `}
        aria-label="Toggle theme"
      >
        {/* Sliding Ball */}
        <div
          className={`
            absolute top-1 w-6 h-6 rounded-full transition-all duration-500 ease-in-out
            ${
              isDark
                ? "translate-x-8 bg-gradient-to-br from-slate-300 to-slate-400 shadow-lg shadow-slate-900/50"
                : "translate-x-0 bg-gradient-to-br from-white to-yellow-100 shadow-lg shadow-yellow-600/40"
            }
            flex items-center justify-center
            hover:scale-110 transform
          `}
        >
          {/* Icon with rotation animation */}
          <div className="relative">
            <Sun
              className={`
                h-3 w-3 absolute inset-0 transition-all duration-500 ease-in-out
                ${
                  isDark
                    ? "scale-0 rotate-180 opacity-0 text-yellow-600"
                    : "scale-100 rotate-0 opacity-100 text-yellow-600"
                }
              `}
            />
            <Moon
              className={`
                h-3 w-3 absolute inset-0 transition-all duration-500 ease-in-out
                ${
                  isDark
                    ? "scale-100 rotate-0 opacity-100 text-slate-600"
                    : "scale-0 rotate-180 opacity-0 text-slate-600"
                }
              `}
            />
          </div>
        </div>

        {/* Background Icons */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Sun
            className={`
              h-4 w-4 transition-all duration-500 ease-in-out
              ${
                isDark
                  ? "text-slate-500 scale-90 opacity-50"
                  : "text-yellow-600 scale-110 opacity-80"
              }
            `}
          />
          <Moon
            className={`
              h-4 w-4 transition-all duration-500 ease-in-out
              ${
                isDark
                  ? "text-slate-300 scale-110 opacity-80"
                  : "text-slate-400 scale-90 opacity-50"
              }
            `}
          />
        </div>

        {/* Glow effect */}
        <div
          className={`
            absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300
            ${
              isDark
                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                : "bg-gradient-to-r from-yellow-400/20 to-orange-400/20"
            }
          `}
        />
      </button>
    </div>
  );
}
