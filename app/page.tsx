"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// ✅ Load Hero dynamically (prevents "document is not defined")
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Experience /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
