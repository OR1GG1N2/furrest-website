import Image from "next/image";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>

      {/* main section */}
      <div className="mt-20 relative z-20 mx-auto min-h-screen grid max-w-7xl">
        <div className="py-48 md:py-48 mx-6 flex   justify-between">
          <div className="text-center md:text-left">
            <div className="text-[2.5rem] font-extrabold leading-[0.75] tracking-tighter text-[#7B583D] md:gap-2 md:text-7xl">
              FURREST CON 2025
            </div>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-800 md:text-xl md:leading-relaxed">
              Набридла цивілізація і сидіти у 4 стінах?
              Тоді це про нас!
              Час вибратися на природу та зробити ковток свіжого повітря! 🏕️
            </p>

            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              <a className="group inline-flex shrink-0 select-none items-center justify-center font-medium transition focus:outline-0 gap-2 px-6 py-3 rounded-lg text-base hover:bg-[#1B2919] bg-[#3c5c38] text-white">
                Реєстрація
              </a>
              <button className="group inline-flex shrink-0 select-none items-center justify-center font-medium transition focus:outline-0 gap-2 px-6 py-3 rounded-lg text-base hover:bg-zinc-500/10 pl-3 pr-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                Детальніше
              </button>
            </div>

            <div className="mt-4 text-sm">
              *Тут повинна бути додаткова Інформація
            </div>
          </div>

          <div className="-mt-36 lg:block hidden md:ml-10  justify-center">
            <Image
              src="/mascot.png"
              width={400}
              height={400}
              alt="Picture of the author"
              className="w-full max-w-[35rem] "
            />
          </div>
        </div>
      </div>

      <div className="bg-[#7B583D] h-5 w-screen"></div>
    </div>
  );
}
