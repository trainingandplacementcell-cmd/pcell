import Image from "next/image";
import { GlassmorphismNav } from "./components/glassmorphism-nav";
import LandingPage from "./home/home";


export default function Home() {
  return (
        <div className="flex items-center justify-center ">
     <main className=" relative overflow-hidden ">
        <div className="fixed inset-0 w-full ">
          {/* <Aurora colorStops={["#475569", "#64748b", "#9ba9bdff"]} amplitude={1.2} blend={0.6} speed={0.8} /> */}
        </div>
        <div className="relative z-0">
          
          <LandingPage />
          
        </div>
        
      </main>
    </div>
  );
}
