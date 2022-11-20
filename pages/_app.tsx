import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Expletus_Sans } from "@next/font/google";

const expletusSans = Expletus_Sans({
  subsets: ["latin"],
  variable: "--font-expletus",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${expletusSans.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
