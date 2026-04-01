import { cn } from "@/lib/utils"

export function Section({
  className,
  narrow = false,
  children,
  ...props
}: React.ComponentProps<"section"> & { narrow?: boolean }) {
  return (
    <section className={cn("py-section", className)} {...props}>
      <div
        className={cn(
          "mx-auto px-5",
          narrow ? "max-w-narrow" : "max-w-container"
        )}
      >
        {children}
      </div>
    </section>
  )
}
