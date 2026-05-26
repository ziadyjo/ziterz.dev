import { type LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-button-primary-background text-button-primary-text border-button-primary-border",
    "hover:bg-button-primary-background-hover hover:text-button-primary-text-hover hover:border-button-primary-border-hover",
    "[&_svg]:text-button-primary-icon hover:[&_svg]:text-button-primary-icon-hover",
  ].join(" "),
  secondary: [
    "bg-button-secondary-background text-button-secondary-text border-button-secondary-border",
    "hover:bg-button-secondary-background-hover hover:text-button-secondary-text-hover hover:border-button-secondary-border-hover",
    "[&_svg]:text-button-secondary-icon hover:[&_svg]:text-button-secondary-icon-hover",
  ].join(" "),
  tertiary: [
    "bg-button-tertiary-background text-button-tertiary-text border-button-tertiary-border",
    "hover:bg-button-tertiary-background-hover hover:text-button-tertiary-text-hover hover:border-button-tertiary-border-hover",
    "[&_svg]:text-button-tertiary-icon hover:[&_svg]:text-button-tertiary-icon-hover",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 gap-1.5 rounded-lg px-3 text-sm",
  md: "h-10 gap-2 rounded-xl px-4 text-md",
  lg: "h-12 gap-2.5 rounded-xl px-5 text-md",
};

export function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex cursor-pointer items-center justify-center border font-medium outline-none transition-colors",
        "focus-visible:ring-2 focus-visible:ring-button-tertiary-border-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
        "disabled:pointer-events-none disabled:opacity-40",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="size-4 shrink-0" strokeWidth={2} />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="size-4 shrink-0" strokeWidth={2} />}
    </button>
  );
}
