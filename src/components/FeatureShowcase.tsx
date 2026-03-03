import { motion } from "framer-motion";
import officeImg from "@/assets/professionals-office.jpg";
import showcaseImg from "@/assets/feature-showcase.jpg";

const FeatureShowcase = () => (
  <section className="section-light py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Expert</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
            We are the best expert for{" "}
            <span className="text-primary">construction Intelligence</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p className="text-foreground/90 font-medium">Constil is not estimating software.</p>
            <p className="text-foreground/90 font-medium">
              Constil is <span className="text-primary font-semibold">Construction Intelligence Infrastructure.</span>
            </p>
            <p>We power contractors with real-time intelligence.</p>
            <p>
              Constil is the leading construction intelligence platform delivering estimate intelligence, payment
              intelligence, and insurance-grade smart benchmarking — giving contractors the Estimator&apos;s Edge.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <img
            src={officeImg}
            alt="Happy professionals reviewing blueprints"
            className="rounded-3xl shadow-2xl w-full"
          />
          <img
            src={showcaseImg}
            alt="AI blueprint analysis"
            className="absolute -bottom-8 -left-8 w-48 h-32 object-cover rounded-2xl shadow-xl border-4 border-background hidden md:block"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeatureShowcase;
