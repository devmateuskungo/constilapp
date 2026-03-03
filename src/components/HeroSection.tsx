import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video-diverse.mp4";

const HeroSection = () => {
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
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-all duration-300 glow-primary"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
