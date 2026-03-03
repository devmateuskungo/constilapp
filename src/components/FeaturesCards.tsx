import { motion } from "framer-motion";
import { BarChart3, Workflow, Zap } from "lucide-react";

const cards = [
  { icon: BarChart3, title: "Data-driven accuracy", desc: "Invoices generated from extracted blueprint data" },
  { icon: Workflow, title: "Streamlined workflow", desc: "Estimate, organize, and invoice in one place" },
  { icon: Zap, title: "Save time and reduce errors", desc: "No manual entry, no complexity" },
];

const FeaturesCards = () => (
  <section className="section-white py-24" id="features">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Core Features</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
          Construction Intelligence
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          15-Minute AI Blueprint Analysis & Complete Project Management
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-futuristic rounded-2xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <c.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesCards;
