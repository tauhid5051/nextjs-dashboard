import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import styles from "@/app/ui/home.module.css";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white p-6">
      {/* Header */}
      <header className="flex h-20 shrink-0 items-end rounded-xl bg-blue-500 p-4 shadow-md md:h-52">
        <AcmeLogo />
      </header>

      {/* Main content */}
      <section className="mt-8 flex grow flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
        {/* Left column */}
        <div className="relative flex flex-col justify-center gap-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-lg transition-transform hover:scale-[1.01] md:w-2/5 md:px-16 md:py-12">
          {/* Decorative shape */}
          <div className={styles.shape} />

          <p
            className={`${lusitana.className} text-lg text-gray-800 md:text-3xl md:leading-snug`}
          >
            <strong className="text-blue-600">Welcome to Acme.</strong> This is
            the example project for the{" "}
            <a
              href="https://nextjs.org/learn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline decoration-blue-300 hover:text-blue-600"
            >
              Next.js Learn Course
            </a>
            , brought to you by{" "}
            <span className="font-semibold text-gray-700">Vercel</span>.
          </p>

          {/* Button */}
          <Link
            href="/login"
            className="group flex items-center gap-3 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200 md:text-base"
          >
            <span>Log in</span>
            <ArrowRightIcon className="w-5 transition-transform group-hover:translate-x-1 md:w-6" />
          </Link>

          {/* Floating small triangle */}
          <div className={styles.triangle} />
        </div>

        {/* Right column */}
        <div className="flex items-center justify-center md:w-3/5 md:px-20 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden w-full h-auto object-contain drop-shadow-xl md:block"
            alt="Dashboard screenshots for desktop version"
            priority
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block w-full h-auto object-contain drop-shadow-lg md:hidden"
            alt="Dashboard screenshots for mobile version"
          />
        </div>
      </section>
    </main>
  );
}
