"use client";

import { useGluedEmotionCache } from "@/lib/emotionNextjsGlue";
import { CacheProvider } from "@emotion/react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { ReactNode, useState } from "react";

export default function EmotionProvider({ children }: { children: ReactNode }) {
  const cache = useGluedEmotionCache();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider>{children}</MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
}
