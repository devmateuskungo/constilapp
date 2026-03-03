import { motion } from "framer-motion";
import { Upload, Cpu, DollarSign, FileText } from "lucide-react";

const items = [
  { icon: Upload, title: "AI Blueprint Analysis", desc: "Upload construction and architectural plans in PDF, CAD, and other formats." },
  { icon: Cpu, title: "Smart Data Extraction", desc: "Automatically extract quantities, materials, and services from blueprints." },
  { icon: DollarSign, title: "Accurate Cost Estimates", desc: "Generate precise estimates based on real project data." },
  { icon: FileText, title: "Invoice Creation Made Easy", desc: "Create professional invoices directly from extracted project details." },
];

const BlueprintIntelligence = () => (
  <section className="section-white py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Blueprint Intelligence</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
          AI-Powered Analysis in Minutes
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-futuristic rounded-2xl p-6"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlueprintIntelligence;
