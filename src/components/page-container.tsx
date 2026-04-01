import { cn } from "@/lib/utils"

export function PageContainer({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      className={cn("mx-auto max-w-container px-5", className)}
      {...props}
    />
  )
}
