import { useRef, useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video-diverse.mp4";
import demoVideo from "@/assets/hero-video.mp4";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const demoVideoRef = useRef<HTMLVideoElement>(null);

  const handleDemoOpenChange = (open: boolean) => {
    setDemoOpen(open);
    if (!open) demoVideoRef.current?.pause();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />

      {/* Futuristic grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(hsl(217 100% 63% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 100% 63% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Construction Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground mb-6">
            Simplify your business with speed and control using our{" "}
            <span className="text-primary">AI software</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-lg">
            Create cost estimation from blueprint in minutes
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://app.constil.com/signup"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-all duration-300 glow-primary focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Get Started
            </a>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>

      <Dialog open={demoOpen} onOpenChange={handleDemoOpenChange}>
        <DialogContent
          className="max-w-[98vw] w-[98vw] max-h-[95vh] h-[95vh] p-0 gap-0 border-0 bg-black overflow-hidden rounded-xl [&>button]:absolute [&>button]:right-3 [&>button]:top-3 [&>button]:z-10 [&>button]:bg-white/10 [&>button]:text-white [&>button]:hover:bg-white/20"
          onPointerDownOutside={() => demoVideoRef.current?.pause()}
        >
          <DialogTitle className="sr-only">Watch Demo Video</DialogTitle>
          <video
            ref={demoVideoRef}
            src={demoVideo}
            controls
            className="w-full h-full object-contain rounded-xl"
            playsInline
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
