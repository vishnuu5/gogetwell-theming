import React from "react";
import { cn } from "../../utils/themeUtils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        // Variant styles
        variant === "primary" && "bg-primary text-black hover:bg-primary/90",
        variant === "secondary" &&
          "bg-secondary text-black hover:bg-secondary/90",
        variant === "outline" &&
          "border border-input bg-transparent text-foreground hover:bg-accent/10 hover:text-accent-foreground",
        variant === "ghost" &&
          "text-foreground hover:bg-accent/10 hover:text-accent-foreground",
        // Size styles
        size === "sm" && "h-8 px-3 text-xs",
        size === "md" && "h-10 px-4 py-2",
        size === "lg" && "h-12 px-6 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
