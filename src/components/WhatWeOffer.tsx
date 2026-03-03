import { motion } from "framer-motion";
import { FileText, Calculator, Users, CreditCard } from "lucide-react";
import teamImg from "@/assets/team-professionals.jpg";

const offers = [
  { icon: FileText, title: "Invoice Management", desc: "Easily create, send, and track professional invoices in real time—AI powered and automated." },
  { icon: Calculator, title: "Estimates & Quotes", desc: "Generate detailed estimates and convert them into invoices in seconds using AI blueprint analysis." },
  { icon: Users, title: "Client Management", desc: "Store and manage client data in one central place." },
  { icon: CreditCard, title: "Payment Tracking", desc: "Track incoming and outgoing payments and maintain healthy cash flow year-round." },
];

const WhatWeOffer = () => (
  <section className="section-white py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
          What We Offer to Power Your Business
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-futuristic rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <o.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground">{o.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={teamImg}
            alt="Happy team of construction professionals"
            className="rounded-3xl shadow-2xl w-full"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhatWeOffer;
