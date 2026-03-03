import { motion } from "framer-motion";
import workerImg from "@/assets/happy-worker.jpg";
import siteImg from "@/assets/construction-site.jpg";

const WhyChooseUs = () => (
  <section className="relative py-24 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${siteImg})` }}
    />
    <div className="absolute inset-0 bg-foreground/80" />

    {/* Futuristic grid overlay */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `linear-gradient(hsl(217 100% 63% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(217 100% 63% / 0.5) 1px, transparent 1px)`,
      backgroundSize: '80px 80px'
    }} />

    <div className="relative z-10 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Intelligence</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-primary-foreground">
            Construction intelligence
          </h2>
          <p className="text-primary-foreground/90 font-semibold leading-relaxed text-lg mb-4">
            Because Construction Is No Longer About Guessing — It&apos;s About Intelligence.
          </p>
          <p className="text-primary-foreground/70 leading-relaxed text-lg mb-4">
            Most contractors use tools that help them calculate.
          </p>
          <p className="text-primary-foreground/70 leading-relaxed text-lg mb-4">
            Constil helps you outthink the market.
          </p>
          <p className="text-primary-foreground/70 leading-relaxed text-lg mb-2">We combine:</p>
          <ul className="space-y-2 text-primary-foreground/70 text-lg mb-4 list-none">
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Estimate Intelligence™
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Invoice & Payment
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Smart Benchmarking™
            </li>
          </ul>
          <p className="text-primary-foreground/70 leading-relaxed text-lg">
            Instead of disconnected tools, you get a unified intelligence system that sees the entire project lifecycle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <img
            src={workerImg}
            alt="Happy construction worker"
            className="rounded-3xl shadow-2xl w-full max-h-[400px] object-cover border-4 border-primary-foreground/10"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
