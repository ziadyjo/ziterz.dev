import Image from "next/image";
import { AboutSection } from "./components/about-section";
import { SiteMenu } from "./components/site-menu";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background-primary font-sans">
      <SiteMenu />
      <main className="flex w-full max-w-3xl flex-1 flex-col bg-background-primary px-4 py-16 sm:px-0">
        <div className="flex w-full flex-col gap-8 sm:grid sm:grid-cols-2 sm:items-start">
          <div>
            <h1 className="whitespace-nowrap font-serif text-5xl font-medium text-foreground-primary sm:hidden">
              Ziady Mubaraq
            </h1>
            <div className="hidden sm:block">
              <h1 className="font-serif text-5xl font-medium text-foreground-primary">
                Ziady
              </h1>
              <h1 className="font-serif text-5xl font-medium text-foreground-primary">
                Mubaraq
              </h1>
            </div>
          </div>

          <div className="hidden flex-col gap-8 sm:flex sm:justify-self-end">
            <Image
              src="/vercel.svg"
              alt="Ziady Mubaraq"
              width={100}
              height={100}
            />
            <AboutSection />
          </div>

          <div className="sm:hidden">
            <AboutSection />
          </div>
        </div>
      </main>
    </div>
  );
}
