/* eslint-disable @next/next/inline-script-id */
"use client";

import Script from "next/script";

const ThemeScript = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script strategy="beforeInteractive">
      {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
  } else {
      document.documentElement.classList.remove('dark')
  }`}
    </Script>
  );
};

export default ThemeScript;
