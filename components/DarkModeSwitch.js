"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <SunIcon
            onClick={() => setTheme("light")}
            className=" h-8 w-8 cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MoonIcon
            onClick={() => setTheme("dark")}
            className=" h-8 w-8 cursor-pointer hover:text-amber-500"
          />
        ))}
    </>
  );
}

export default DarkModeSwitch;
