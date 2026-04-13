import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: {
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <div className="text-lg font-medium text-muted-foreground">{subtitle}</div>
      )}
    </div>
  )
}
