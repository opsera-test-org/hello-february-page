import FloatingHearts from "@/components/FloatingHearts";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <FloatingHearts />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Heart icon */}
        <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Heart
            className="w-16 h-16 text-primary fill-primary animate-pulse-glow"
          />
        </div>

        {/* Title */}
        <h1
          className="font-display text-6xl md:text-8xl font-bold text-foreground tracking-tight mb-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          Happy
          <span className="block text-primary italic">Valentine's</span>
        </h1>

        {/* Date */}
        <p
          className="font-body text-lg text-muted-foreground tracking-[0.3em] uppercase mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          February 14, 2026
        </p>

        {/* Divider */}
        <div
          className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <span className="h-px w-16 bg-primary/30" />
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <span className="h-px w-16 bg-primary/30" />
        </div>

        {/* Message */}
        <p
          className="font-body text-xl md:text-2xl text-foreground/80 italic leading-relaxed animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.9s" }}
        >
          "Love is composed of a single soul inhabiting two bodies."
        </p>
        <p
          className="font-body text-sm text-muted-foreground mt-3 animate-fade-in-up opacity-0"
          style={{ animationDelay: "1.1s" }}
        >
          — Aristotle
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/50 to-transparent" />
    </div>
  );
};

export default Index;
