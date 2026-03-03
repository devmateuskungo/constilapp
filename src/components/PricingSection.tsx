import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    monthly: 90,
    yearly: 864,
    popular: false,
    features: ["1,500 Tokens / month", "20 Blueprints", "60 Invoices", "200 Data Entries", "Rollover credits (2x limit)", "Buy 500 Tokens for $35"],
  },
  {
    name: "Professional",
    monthly: 170,
    yearly: 1632,
    popular: true,
    features: ["3,500 Tokens", "50 Blueprints", "150 Invoices", "250 Data Entries", "Rollover credits", "Access all templates"],
  },
  {
    name: "Enterprise",
    monthly: 290,
    yearly: 2784,
    popular: false,
    features: ["8,000 Tokens", "~120 Blueprints", "Unlimited Invoices", "Unlimited Data Entry", "Priority Support"],
  },
];

const PricingSection = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
            Choose Your Subscription Plan
          </h2>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-sm font-medium ${!yearly ? "text-primary" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-14 h-7 rounded-full bg-muted transition-colors border border-border"
              aria-label="Toggle billing"
            >
              <div
                className={`absolute top-0.5 w-6 h-6 rounded-full bg-primary transition-all duration-300 shadow-md ${
                  yearly ? "left-7" : "left-0.5"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${yearly ? "text-primary" : "text-muted-foreground"}`}>Yearly</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-8 relative ${
                plan.popular
                  ? "bg-primary/5 border-2 border-primary glow-primary"
                  : "card-futuristic"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-primary">
                  ${yearly ? Math.round(plan.yearly / 12) : plan.monthly}
                </span>
                <span className="text-muted-foreground text-sm"> / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://app.constil.com/signup"
                className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary-hover glow-primary"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
