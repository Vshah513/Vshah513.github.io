"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const IVY_DEV_URL = "https://ivy-dev.com";

export default function MiniProjectPage() {
  return (
    <div
      className="mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      style={{ maxWidth: "48rem" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center" }}
      >
        <span
          className="inline-block text-sm font-medium tracking-wider uppercase text-[var(--color-gold)]"
          style={{ display: "block", marginBottom: "24px" }}
        >
          Mini Project
        </span>
        <h1
          className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]"
          style={{
            fontFamily: "var(--font-playfair), serif",
            marginBottom: "32px",
          }}
        >
          Ivy Dev
        </h1>
        <p
          className="text-lg text-[var(--color-text-secondary)]"
          style={{ marginBottom: "32px" }}
        >
          Visit the website for consulting and development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            href={IVY_DEV_URL}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            external
          >
            Open ivy-dev.com →
          </Button>
        </div>

        <div className="glass rounded-2xl p-8 text-left">
          <h2
            className="text-xl font-semibold text-[var(--color-text-primary)] mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Website
          </h2>
          <a
            href={IVY_DEV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gold)] hover:underline break-all"
          >
            {IVY_DEV_URL}
          </a>

          <h2
            className="text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Source (different GitHub)
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm mb-2">
            The project lives in a separate repo. Clone or open:
          </p>
          <a
            href="https://github.com/ishandhodu/Consulting-idea"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-gold)] hover:underline break-all text-sm"
          >
            https://github.com/ishandhodu/Consulting-idea
          </a>
        </div>
      </motion.div>
    </div>
  );
}
