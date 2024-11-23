import { BackgroundLines } from "./components/ui/backgroundlines";
import { HoverBorderGradient } from "./components/ui/hoverbtn";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen md:p-6 gap-12 overflow-hidden">
      <div className="mt-[750px] lg:mt-[800px] 2xl:mt-[1000px]">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-ourgreen text-center text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-sans py-4 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight">
            Empowering Your Educational Journey with AI
          </h2>
          <p className="sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto text-xs sm:text-sm md:text-lg text-white/50 text-center mb-6 sm:mb-8 lg:mb-10">
            Unlock personalized guidance for your academic future. Salaah.ai
            uses AI-driven technology to deliver expert counseling, tailored
            program recommendations, and interactive video assistance—all at
            your fingertips. Get clarity, make informed decisions, and take the
            next step towards your educational success with ease.
          </p>
          <button className="md:px-6 md:py-3 px-10 py-3 bg-transparent border-2 border-gradient-to-r from-blue-400 to-ourgreen text-white rounded-full text-sm md:text-base lg:text-lg font-bold relative md:overflow-hidden hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-ourgreen opacity-20 rounded-full animate-pulse"></span>
            Get Started
          </button>
        </BackgroundLines>
      </div>
    </div>
  );
}
